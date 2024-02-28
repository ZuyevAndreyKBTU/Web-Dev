from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager
import json
import time

def get_categories(driver):
    categories_js_code = """
    let categories = Array.from(document.querySelectorAll('.categories__slider-item.main-category-card')).map(link => {
        const name = link.querySelector('.main-category-card__title').innerText.trim();
        const url = link.href;
        const imageLink = link.querySelector('img').src || link.querySelector('img').getAttribute('data-src');
        return {
            name,
            url,
            imageLink
        };
    });
    return categories;
    """
    return driver.execute_script(categories_js_code)

def collect_product_details(driver, category_name):
    js_code = """
    let products = [];
    document.querySelectorAll('.item-card.ddl_product').forEach(card => {
        const name = card.querySelector('.item-card__name-link').innerText.trim();
        const url = card.querySelector('.item-card__name-link').href;
        const imageUrl = card.querySelector('.item-card__image').src;
        products.push({ name, url, imageUrl, likes: 0, category: arguments[0] });
    });
    return products;
    """
    return driver.execute_script(js_code, category_name)

def collect_and_filter_product_details(driver, category):
    driver.get(category['url'])
    time.sleep(2)

    products = collect_product_details(driver, category['name'])

    required_attributes = ['name', 'url', 'imageUrl']
    filtered_products = [product for product in products if all(product.get(attr) for attr in required_attributes)]

    complete_products = []
    for product in filtered_products:
        description, rating, price = get_product_description_and_rating(driver, product['url'])
        product.update({
            'description': description,
            'rating': rating,
            'image_url': product.pop('imageUrl', None),
            'likes': 0,
            'category': category['name'],
            'price': price
        })
        complete_products.append(product)

    return complete_products

def get_product_description_and_rating(driver, product_url):
    driver.get(product_url)
    
    # Description extraction remains unchanged
    try:
        description = WebDriverWait(driver, 10).until(
            EC.visibility_of_element_located((By.CSS_SELECTOR, ".item__description-text"))
        ).text
    except Exception:
        description = 'Without description'
    
    # Rating extraction remains unchanged
    try:
        rating_element = driver.find_element(By.CSS_SELECTOR, ".item__rating span[class^='rating _']")
        rating_class = rating_element.get_attribute("class")
        rating_value = float(rating_class.split("_")[-1]) / 2
    except Exception:
        rating_value = "NaN"

    # Price extraction with conversion to number
    try:
        price_text = WebDriverWait(driver, 10).until(
            EC.visibility_of_element_located((By.CSS_SELECTOR, ".item__price-once"))
        ).text
        # Remove non-numeric characters and convert to float
        price = float(''.join(filter(str.isdigit, price_text)))  # Assumes the price is in the format "196 ₸" and needs conversion
    except Exception:
        price = "Not Available"  # Use a placeholder if the price cannot be determined

    return description, rating_value, price

def write_typescript_files(categories_data, products_data):

    with open('category.ts', 'w', encoding='utf-8') as f:
        f.write("export interface Category {\n\n  id: number;\n  name: string;\n  imageLink: string;\n  listOfProduct: number[];\n\n}\n")
        f.write("export const categories = [\n")
        for category in categories_data:
            f.write(f"  {{id: {category['id']}, name: '{category['name']}',  imageLink: \"{category['imageLink']}\", listOfProduct:{json.dumps(category['listOfProduct'])}}},\n")
        f.write("];\n")

    # Adjustments in products.ts for handling price as a number
    with open('products.ts', 'w', encoding='utf-8') as f:
        f.write("export interface Product {\n  id: number;\n  name: string;\n  price: number;\n  description: string;\n  image_url: string;\n  url: string;\n  rating: number;\n  likes: number;\n  category: string;\n}\n")
        f.write("export const products = [\n")
        for product in products_data:
            # Check if price is "Not Available" and handle accordingly
            price_value = product.get('price', 0) if product.get('price', "Not Available") != "Not Available" else 0
            f.write(f"  {{\n    id: {product['id']},\n    name: '{product['name']}',\n    price: {price_value},\n    description: `{product.get('description', '')}`,")
            f.write(f"\n    rating: {product.get('rating', 'NaN')},\n    image_url: '{product.get('image_url', '')}',\n    url: '{product['url']}',\n    likes: {product.get('likes', 0)},\n    category: '{product['category']}'\n  }},\n")
        f.write("];\n\n")
        # The copyright notice remains unchanged

def main():
    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
    driver.get("https://kaspi.kz/shop/")
    categories = get_categories(driver)
    
    categories_data = []
    all_products = []
    product_id = 1
    
    for category in categories:
        products = collect_and_filter_product_details(driver, category)
        
        for product in products:
            product['id'] = product_id
            all_products.append(product)
            product_id += 1
            
        category_entry = {
            "id": category.get("id", product_id),
            "name": category['name'],
            "imageLink": category['imageLink'],
            "listOfProduct": [p['id'] for p in products]
        }
        categories_data.append(category_entry)
    
    write_typescript_files(categories_data, all_products)
    
    driver.quit()
    
if __name__ == "__main__":
    main()