export interface Category {
  id: number;
  name: string;
  imageLink: string;
  listOfProduct: number[];
}
export const categories = [
  {
    id: 7,
    name: 'Строительство и ремонт',
    imageLink:
      'https://resources.cdn-kaspi.kz/shop/static/main-nav/e2c63fc3-85c0-4985-adae-0b646ed91b2b-Hard.png',
    listOfProduct: [1, 2, 3, 4, 5, 6],
  },
  {
    id: 13,
    name: 'Одежда',
    imageLink:
      'https://resources.cdn-kaspi.kz/shop/static/main-nav/32ca8f3c-e27d-4bf4-a6cd-0f7ca16b9586-Clothes.png',
    listOfProduct: [7, 8, 9, 10, 11, 12],
  },
  {
    id: 19,
    name: 'Досуг, книги',
    imageLink:
      'https://resources.cdn-kaspi.kz/shop/static/main-nav/81c9289f-e76e-4695-8aa5-08ac6814a6ba-Hobby.png',
    listOfProduct: [13, 14, 15, 16, 17, 18],
  },
  {
    id: 25,
    name: 'Мебель',
    imageLink:
      'https://resources.cdn-kaspi.kz/shop/static/main-nav/c75cdd81-0da8-4fb0-ae47-de52fcbee721-Furniture.png',
    listOfProduct: [19, 20, 21, 22, 23, 24],
  },
  {
    id: 31,
    name: 'Аксессуары',
    imageLink:
      'https://resources.cdn-kaspi.kz/shop/static/main-nav/2a793ce4-bd93-40e8-be53-3b9c29fa1fc9-accessories-2.png',
    listOfProduct: [25, 26, 27, 28, 29, 30],
  },
  {
    id: 37,
    name: 'Подарки, товары для праздников',
    imageLink:
      'https://resources.cdn-kaspi.kz/shop/static/main-nav/3eab821c-c51f-4a65-bb72-08be958fad63-Holidays.png',
    listOfProduct: [31, 32, 33, 34, 35, 36],
  },
  {
    id: 43,
    name: 'Украшения',
    imageLink:
      'https://resources.cdn-kaspi.kz/shop/static/main-nav/31565c8b-c798-4ddc-87b9-7b69410ae4cb-jewelry-2.png',
    listOfProduct: [37, 38, 39, 40, 41, 42],
  },
  {
    id: 49,
    name: 'Товары для животных',
    imageLink:
      'https://resources.cdn-kaspi.kz/shop/static/main-nav/0b77bcd3-fa6a-4e1c-bd41-a24e36c2ced5-Pets.png',
    listOfProduct: [43, 44, 45, 46, 47, 48],
  },
  {
    id: 55,
    name: 'Канцелярские товары',
    imageLink:
      'https://resources.cdn-kaspi.kz/shop/static/main-nav/b35e63f0-9fc8-4106-ba74-65f61edb3551-Stat.png',
    listOfProduct: [49, 50, 51, 52, 53, 54],
  },
  {
    id: 61,
    name: 'Обувь',
    imageLink:
      'https://resources.cdn-kaspi.kz/shop/static/main-nav/9a1e94e6-81f7-4d42-951c-8525eaf6b003-Shoes.png',
    listOfProduct: [55, 56, 57, 58, 59, 60],
  },
  {
    id: 67,
    name: 'Телефоны и гаджеты',
    imageLink:
      'https://resources.cdn-kaspi.kz/shop/static/main-nav/b698f0a2-59ab-4b91-9bbe-08714373be5a-Phone.png',
    listOfProduct: [61, 62, 63, 64, 65, 66],
  },
  {
    id: 73,
    name: 'Бытовая техника',
    imageLink:
      'https://resources.cdn-kaspi.kz/shop/static/main-nav/be5d3776-1758-4869-940c-aa703bc5dca6-Home App.png',
    listOfProduct: [67, 68, 69, 70, 71, 72],
  },
  {
    id: 79,
    name: 'ТВ, Аудио, Видео',
    imageLink:
      'https://resources.cdn-kaspi.kz/shop/static/main-nav/4cd61e8e-7faa-4276-8aaf-44380e0c145d-TV.png',
    listOfProduct: [73, 74, 75, 76, 77, 78],
  },
  {
    id: 85,
    name: 'Компьютеры',
    imageLink:
      'https://resources.cdn-kaspi.kz/shop/static/main-nav/2e1540b8-0546-4741-acc4-447c0df3a981-Computer.png',
    listOfProduct: [79, 80, 81, 82, 83, 84],
  },
  {
    id: 91,
    name: 'Товары для дома',
    imageLink:
      'https://resources.cdn-kaspi.kz/shop/static/main-nav/d0f757ed-1d94-46c1-870b-010c3136b9ea-Home.png',
    listOfProduct: [85, 86, 87, 88, 89, 90],
  },
  {
    id: 97,
    name: 'Красота и здоровье',
    imageLink:
      'https://resources.cdn-kaspi.kz/shop/static/main-nav/362c1530-38f2-4bfa-b65d-0d4e84f73f5e-Beauty.png',
    listOfProduct: [91, 92, 93, 94, 95, 96],
  },
  {
    id: 103,
    name: 'Детские товары',
    imageLink:
      'https://resources.cdn-kaspi.kz/shop/static/main-nav/97a54c52-1572-4410-95e8-7027fc0464de-Kids.png',
    listOfProduct: [97, 98, 99, 100, 101, 102],
  },
  {
    id: 109,
    name: 'Аптека',
    imageLink:
      'https://resources.cdn-kaspi.kz/shop/static/main-nav/bb49a17d-93d1-4428-93d0-9c2ead66fe23-Pharmacy.png',
    listOfProduct: [103, 104, 105, 106, 107, 108],
  },
  {
    id: 115,
    name: 'Автотовары',
    imageLink:
      'https://resources.cdn-kaspi.kz/shop/static/main-nav/2eac5475-390e-484c-8dc9-a3b3a6758abf-Avto.png',
    listOfProduct: [109, 110, 111, 112, 113, 114],
  },
  {
    id: 121,
    name: 'Спорт, туризм',
    imageLink:
      'https://resources.cdn-kaspi.kz/shop/static/main-nav/8d543f62-86f7-42ce-81cc-81583b4ab5df-Sport-summer.png',
    listOfProduct: [115, 116, 117, 118, 119, 120],
  },
  {
    id: 127,
    name: 'Строительство и ремонт',
    imageLink:
      'https://resources.cdn-kaspi.kz/shop/static/main-nav/e2c63fc3-85c0-4985-adae-0b646ed91b2b-Hard.png',
    listOfProduct: [121, 122, 123, 124, 125, 126],
  },
  {
    id: 133,
    name: 'Одежда',
    imageLink:
      'https://resources.cdn-kaspi.kz/shop/static/main-nav/32ca8f3c-e27d-4bf4-a6cd-0f7ca16b9586-Clothes.png',
    listOfProduct: [127, 128, 129, 130, 131, 132],
  },
  {
    id: 139,
    name: 'Досуг, книги',
    imageLink:
      'https://resources.cdn-kaspi.kz/shop/static/main-nav/81c9289f-e76e-4695-8aa5-08ac6814a6ba-Hobby.png',
    listOfProduct: [133, 134, 135, 136, 137, 138],
  },
  {
    id: 145,
    name: 'Мебель',
    imageLink:
      'https://resources.cdn-kaspi.kz/shop/static/main-nav/c75cdd81-0da8-4fb0-ae47-de52fcbee721-Furniture.png',
    listOfProduct: [139, 140, 141, 142, 143, 144],
  },
  {
    id: 151,
    name: 'Аксессуары',
    imageLink:
      'https://resources.cdn-kaspi.kz/shop/static/main-nav/2a793ce4-bd93-40e8-be53-3b9c29fa1fc9-accessories-2.png',
    listOfProduct: [145, 146, 147, 148, 149, 150],
  },
  {
    id: 157,
    name: 'Подарки, товары для праздников',
    imageLink:
      'https://resources.cdn-kaspi.kz/shop/static/main-nav/3eab821c-c51f-4a65-bb72-08be958fad63-Holidays.png',
    listOfProduct: [151, 152, 153, 154, 155, 156],
  },
  {
    id: 163,
    name: 'Украшения',
    imageLink:
      'https://resources.cdn-kaspi.kz/shop/static/main-nav/31565c8b-c798-4ddc-87b9-7b69410ae4cb-jewelry-2.png',
    listOfProduct: [157, 158, 159, 160, 161, 162],
  },
  {
    id: 169,
    name: 'Товары для животных',
    imageLink:
      'https://resources.cdn-kaspi.kz/shop/static/main-nav/0b77bcd3-fa6a-4e1c-bd41-a24e36c2ced5-Pets.png',
    listOfProduct: [163, 164, 165, 166, 167, 168],
  },
  {
    id: 175,
    name: 'Канцелярские товары',
    imageLink:
      'https://resources.cdn-kaspi.kz/shop/static/main-nav/b35e63f0-9fc8-4106-ba74-65f61edb3551-Stat.png',
    listOfProduct: [169, 170, 171, 172, 173, 174],
  },
  {
    id: 181,
    name: 'Обувь',
    imageLink:
      'https://resources.cdn-kaspi.kz/shop/static/main-nav/9a1e94e6-81f7-4d42-951c-8525eaf6b003-Shoes.png',
    listOfProduct: [175, 176, 177, 178, 179, 180],
  },
  {
    id: 187,
    name: 'Телефоны и гаджеты',
    imageLink:
      'https://resources.cdn-kaspi.kz/shop/static/main-nav/b698f0a2-59ab-4b91-9bbe-08714373be5a-Phone.png',
    listOfProduct: [181, 182, 183, 184, 185, 186],
  },
  {
    id: 193,
    name: 'Бытовая техника',
    imageLink:
      'https://resources.cdn-kaspi.kz/shop/static/main-nav/be5d3776-1758-4869-940c-aa703bc5dca6-Home App.png',
    listOfProduct: [187, 188, 189, 190, 191, 192],
  },
  {
    id: 199,
    name: 'ТВ, Аудио, Видео',
    imageLink:
      'https://resources.cdn-kaspi.kz/shop/static/main-nav/4cd61e8e-7faa-4276-8aaf-44380e0c145d-TV.png',
    listOfProduct: [193, 194, 195, 196, 197, 198],
  },
  {
    id: 205,
    name: 'Компьютеры',
    imageLink:
      'https://resources.cdn-kaspi.kz/shop/static/main-nav/2e1540b8-0546-4741-acc4-447c0df3a981-Computer.png',
    listOfProduct: [199, 200, 201, 202, 203, 204],
  },
  {
    id: 211,
    name: 'Товары для дома',
    imageLink:
      'https://resources.cdn-kaspi.kz/shop/static/main-nav/d0f757ed-1d94-46c1-870b-010c3136b9ea-Home.png',
    listOfProduct: [205, 206, 207, 208, 209, 210],
  },
  {
    id: 217,
    name: 'Красота и здоровье',
    imageLink:
      'https://resources.cdn-kaspi.kz/shop/static/main-nav/362c1530-38f2-4bfa-b65d-0d4e84f73f5e-Beauty.png',
    listOfProduct: [211, 212, 213, 214, 215, 216],
  },
  {
    id: 223,
    name: 'Детские товары',
    imageLink:
      'https://resources.cdn-kaspi.kz/shop/static/main-nav/97a54c52-1572-4410-95e8-7027fc0464de-Kids.png',
    listOfProduct: [217, 218, 219, 220, 221, 222],
  },
  {
    id: 229,
    name: 'Аптека',
    imageLink:
      'https://resources.cdn-kaspi.kz/shop/static/main-nav/bb49a17d-93d1-4428-93d0-9c2ead66fe23-Pharmacy.png',
    listOfProduct: [223, 224, 225, 226, 227, 228],
  },
  {
    id: 235,
    name: 'Автотовары',
    imageLink:
      'https://resources.cdn-kaspi.kz/shop/static/main-nav/2eac5475-390e-484c-8dc9-a3b3a6758abf-Avto.png',
    listOfProduct: [229, 230, 231, 232, 233, 234],
  },
  {
    id: 241,
    name: 'Спорт, туризм',
    imageLink:
      'https://resources.cdn-kaspi.kz/shop/static/main-nav/8d543f62-86f7-42ce-81cc-81583b4ab5df-Sport-summer.png',
    listOfProduct: [235, 236, 237, 238, 239, 240],
  },
];
