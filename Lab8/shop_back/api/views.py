from django.shortcuts import render

# Create your views here.
from django.http import JsonResponse
from .models import Product
from .models import Category

def product_list(request):
    products = Product.objects.filter(is_active=True)
    product_list = [{'id': product.id, 'name': product.name, 'price': product.price, 
                     'description': product.description, 'count': product.count} 
                    for product in products]
    return JsonResponse(product_list, safe=False)

def product_detail(request, id):
    try:
        product = Product.objects.get(pk=id)
        data = {'id': product.id, 'name': product.name, 'price': product.price,
                'description': product.description, 'count': product.count}
        return JsonResponse(data)
    except Product.DoesNotExist:
        return JsonResponse({'error': 'Product not found'}, status=404)

def category_list(request):
    categories = Category.objects.all()
    category_list = [{'id': category.id, 'name': category.name} for category in categories]
    return JsonResponse(category_list, safe=False)

def category_detail(request, id):
    try:
        category = Category.objects.get(pk=id)
        data = {'id': category.id, 'name': category.name}
        return JsonResponse(data)
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Category not found'}, status=404)

def category_products(request, id):
    try:
        category = Category.objects.get(pk=id)
        products = category.product_set.all() 
        product_list = [{'id': product.id, 'name': product.name, 'price': product.price,
                         'description': product.description, 'count': product.count} 
                        for product in products]
        return JsonResponse(product_list, safe=False)
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Category not found'}, status=404)
