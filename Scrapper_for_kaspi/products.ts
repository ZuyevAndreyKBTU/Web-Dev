export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image_url: string;
  url: string;
  rating: number;
  likes: number;
  category: string;
}
export const products = [
  {
    id: 1,
    name: 'Dossol переходник MerKan B.M.A 1 шт',
    price: 196.0,
    description: `Тип: переходник
Напряжение: 250.0 В
Сила тока: 16.0 А
Количество гнезд: 1
Страна-производитель: Китай`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h2d/h31/64216255954974.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/dossol-perehodnik-merkan-b-m-a-1-sht-102863205/?c=750000000',
    likes: 0,
    category: 'Строительство и ремонт'
  },
  {
    id: 2,
    name: 'Набор инструментов автомобильный 46 в 1 Pride tools CR-V 46',
    price: 2060.0,
    description: `Тип: набор инструментов
Назначение: автомобильный
Количество предметов: 46
Инструменты в комплекте: трещотка, ,рукоять для бит, ,торцевые ключи
Оснастка в комплекте: биты, ,головки со вставками
Аксессуары в комплекте: удлинитель для головок
Упаковка: кейс`,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h56/h52/64365861535774.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/nabor-instrumentov-avtomobil-nyi-46-v-1-pride-tools-cr-v-46-104733089/?c=750000000',
    likes: 0,
    category: 'Строительство и ремонт'
  },
  {
    id: 3,
    name: 'Шуруповерт 48V',
    price: 17467.0,
    description: `Тип патрона: быстрозажимной
Тип инструмента: шуруповерт
Количество скоростей работы: 2
Питание: от аккумулятора
Аккумулятор и зарядное устройство в комплекте: Да
Комплектация: кейс, ,зарядное устройство, ,два аккумулятора, ,сменные головки`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h0a/ha2/69931731419166.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/shurupovert-48v-109294768/?c=750000000',
    likes: 0,
    category: 'Строительство и ремонт'
  },
  {
    id: 4,
    name: 'НИКА стремянка СМ5, 327 см',
    price: 10357.0,
    description: `Тип: стремянка
Макс. рабочая высота (с работником): 327.0 см
Максимальная нагрузка: 150.0 кг
Складной механизм: Да
Материал: сталь
Особенности: с органайзером`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/he1/h76/63840279920670.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/nika-stremjanka-sm5-327-sm-50500000/?c=750000000',
    likes: 0,
    category: 'Строительство и ремонт'
  },
  {
    id: 5,
    name: 'SHARKS шуруповерт 715',
    price: 11490.0,
    description: `Тип патрона: быстрозажимной
Тип инструмента: шуруповерт
Количество скоростей работы: 2
Питание: от аккумулятора
Аккумулятор и зарядное устройство в комплекте: Да
Комплектация: кейс, ,зарядное устройство, ,держатель бит, ,два аккумулятора, ,набор бит, ,набор сверл, ,быстрозажимной патрон`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/hb2/h51/64064369557534.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/sharks-shurupovert-715-101693227/?c=750000000',
    likes: 0,
    category: 'Строительство и ремонт'
  },
  {
    id: 6,
    name: 'Набор автомобильный 142 в 1 PRO FORCE 142',
    price: 34582.0,
    description: `Тип: набор инструментов
Назначение: автомобильный
Количество предметов: 142
Инструменты в комплекте: трещотка, ,ключи имбусовые (шестигранные), ,рукоять для бит, ,вороток для головок, ,ключи гаечные, ,молоток, ,пассатижи, ,отвёртки, ,плоскогубцы, ,ключи комбинированные
Оснастка в комплекте: биты, ,торцевые головки
Аксессуары в комплекте: удлинитель для головок, ,шарнир карданный для головок, ,кейс, ,держатель для бит, ,переходник для головок, ,удлинитель для бит`,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h50/haa/64072666185758.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/nabor-avtomobil-nyi-142-v-1-pro-force-142-101844407/?c=750000000',
    likes: 0,
    category: 'Строительство и ремонт'
  },
  {
    id: 7,
    name: 'Боксеры Nanjiren мультиколор',
    price: 3240.0,
    description: ``,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h2b/h73/84902075662366.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/boksery-nanjiren-mul-tikolor-11118494b/?c=750000000',
    likes: 0,
    category: 'Одежда'
  },
  {
    id: 8,
    name: 'Корсет синий',
    price: 4497.0,
    description: `Модель: корсет
Для беременных: Нет`,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h40/hb1/85255622393886.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/etno-korset-987451-sinii-10932313b/?c=750000000',
    likes: 0,
    category: 'Одежда'
  },
  {
    id: 9,
    name: 'Намазник Muslima style зеленый',
    price: 4973.0,
    description: ``,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/hcb/h45/84042329784350.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/namaznik-muslima-style-zelenyi-11053252b/?c=750000000',
    likes: 0,
    category: 'Одежда'
  },
  {
    id: 10,
    name: 'IQ Socks 1233210 5 пар белый',
    price: 872.0,
    description: `Модель: носки
Комплект: Да
Состав: хлопок
Узор: однотонный
Назначение: повседневные, ,бег
Примечание: чулочно-носочные изделия обмену и возврату не подлежат`,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h9c/h8b/84370839994398.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/iq-socks-1233210-5-par-belyi-104285966/?c=750000000',
    likes: 0,
    category: 'Одежда'
  },
  {
    id: 11,
    name: 'Слипы Koza Underwear мультиколор',
    price: 3495.0,
    description: ``,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h0b/ha3/66010070548510.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/slipy-koza-underwear-mul-tikolor-11169619b/?c=750000000',
    likes: 0,
    category: 'Одежда'
  },
  {
    id: 12,
    name: 'Комплект Antec черный',
    price: 10900.0,
    description: `Модель: комплект
Вид спорта: универсальный
Состав: полиэстер, ,эластан`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/hb1/h57/82999734861854.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/komplekt-antec-rash-921-rashgard-5-v-1-chernyi-11391205b/?c=750000000',
    likes: 0,
    category: 'Одежда'
  },
  {
    id: 13,
    name: 'Дамира Өмірзаққызы Ибрагим: Адамзаттың асыл тәжі',
    price: 3700.0,
    description: `ISBN: 978-601-7941-03-1
Возраст: 10+
Язык издания: казахский
Переплет: твердый переплет
Жанр: казахская классика`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h71/ha4/85122679570462.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/damira-m-rza-yzy-ibragim-adamzatty-asyl-t-zh--116495534/?c=750000000',
    likes: 0,
    category: 'Досуг, книги'
  },
  {
    id: 14,
    name: 'Жолдыбайұлы Қ.: Кемел адам',
    price: 5899.0,
    description: `ISBN: 978-601-7629-44-1
Возраст: 16+
Язык издания: казахский
Переплет: твердый переплет
Жанр: психология популярная`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h28/hc3/67252819197982.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/zholdybai-ly-kemel-adam-103430816/?c=750000000',
    likes: 0,
    category: 'Досуг, книги'
  },
  {
    id: 15,
    name: 'Mold Store Молд Шкатулка силиконовая силикон',
    price: 3498.0,
    description: `Тематика: геометрические фигуры
Назначение: гипс, ,эпоксидная смола
Размеры: 6x4x8,2 см`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h37/h22/84810882154526.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/mold-store-mold-shkatulka-silikonovaja-silikon-106173727/?c=750000000',
    likes: 0,
    category: 'Досуг, книги'
  },
  {
    id: 16,
    name: 'Перизат Мырзахмет: Өмірдің аты М',
    price: 4998.0,
    description: `ISBN: 978-601-7677-32-9
Возраст: 16+
Язык издания: казахский
Переплет: мягкий переплет
Жанр: биографии и мемуары`,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h2d/hb2/84916462878750.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/perizat-myrzahmet-m-rd-aty-m-108340964/?c=750000000',
    likes: 0,
    category: 'Досуг, книги'
  },
  {
    id: 17,
    name: 'Джейн Остин: Тәкаппар ғашықтар',
    price: 5999.0,
    description: `ISBN: 9786018063497
Возраст: 16+
Язык издания: казахский
Переплет: твердый переплет
Жанр: современная мировая проза`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h92/h9f/84916462157854.png?format=preview-large',
    url: 'https://kaspi.kz/shop/p/dzhein-ostin-t-kappar-ashy-tar-105934631/?c=750000000',
    likes: 0,
    category: 'Досуг, книги'
  },
  {
    id: 18,
    name: 'Отпечаток рук для влюбленных 147890',
    price: 2869.0,
    description: `Назначение: для всей семьи
Комплектация: холст, 3 краски (черный, золотой, серебро), кисточка
Размеры холста: 30х24 см
Количество красок: 3`,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h53/h3b/85121626767390.png?format=preview-large',
    url: 'https://kaspi.kz/shop/p/otpechatok-ruk-dlja-vljublennyh-147890-107987498/?c=750000000',
    likes: 0,
    category: 'Досуг, книги'
  },
  {
    id: 19,
    name: 'Стул N-12, 81x50x25 см, белый',
    price: 7389.0,
    description: `Тип: стул
Материал: пластик
Обивка: отсутствует
Жесткость сиденья: высокая
Высота: 81.0 см
Ширина: 50.0 см
Глубина: 25.0 см
Цвет: белый
Страна: Китай`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h59/h3b/63900105277470.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/stul-n-12-81x50x25-sm-belyi-100189414/?c=750000000',
    likes: 0,
    category: 'Мебель'
  },
  {
    id: 20,
    name: 'ЗМИ Вешалка стойка, напольная металл, 63x177 см, Луч 5 черная',
    price: 6934.0,
    description: `Конструкция: стойка, ,напольная
Материал: металл
Количество крючков: 5
Ширина: 63.0 см
Высота: 177.0 см
Цвет: черный`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/he5/h41/64340225916958.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/zmi-veshalka-stoika-napol-naja-metall-63x177-sm-luch-5-chernaja--102471194/?c=750000000',
    likes: 0,
    category: 'Мебель'
  },
  {
    id: 21,
    name: 'Табурет ЗМИ Пенек, 47x46x46 см, серый',
    price: 3115.0,
    description: `Тип: табурет
Материал: металл
Обивка: экокожа
Жесткость сиденья: средняя
Высота: 47.0 см
Ширина: 46.0 см
Глубина: 46.0 см
Цвет: серый
Страна: Россия`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/ha4/haf/63948533432350.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/taburet-zmi-penek-47x46x46-sm-seryi-102981664/?c=750000000',
    likes: 0,
    category: 'Мебель'
  },
  {
    id: 22,
    name: 'Mizam 8902061 диван, обивка ткань, 70x210x75 см, серый',
    price: 57450.0,
    description: `Механизм трансформации: еврокнижка
Обивка: ткань
Комплектация: диван
Высота: 70.0 см
Длина: 210.0 см
Глубина: 75.0 см
Цвет: серый
Страна: Казахстан`,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/he7/h17/64383593971742.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/mizam-8902061-divan-obivka-tkan-70x210x75-sm-seryi-104172973/?c=750000000',
    likes: 0,
    category: 'Мебель'
  },
  {
    id: 23,
    name: 'MSQ premium 02 диван, обивка текстиль, 80x210x75 см, синий',
    price: 52202.0,
    description: `Механизм трансформации: еврокнижка
Обивка: текстиль
Комплектация: диван
Высота: 80.0 см
Длина: 210.0 см
Глубина: 75.0 см`,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/hdf/h51/64448519307294.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/msq-premium-02-divan-obivka-tekstil-80x210x75-sm-sinii-104375942/?c=750000000',
    likes: 0,
    category: 'Мебель'
  },
  {
    id: 24,
    name: 'IMPERIAL Алёна, 120.2x190.5х46.6 см, белый, коричневый',
    price: 49979.0,
    description: `Тип установки: напольный
Материал: ЛДСП
Ширина, см: 120.2
Глубина, см: 46.6
Высота, см: 190.5
Примечание: товар может поставляться в разобранном виде, по поводу сборки уточняйте у продавца
Цвет: белый, ,коричневый
Страна: Россия`,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h7a/hf4/84709365612574.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/imperial-aljona-120-2x190-5h46-6-sm-belyi-korichnevyi-104713427/?c=750000000',
    likes: 0,
    category: 'Мебель'
  },
  {
    id: 25,
    name: 'Сумка багет Amadi 451363 полиуретан, экокожа черный',
    price: 3996.0,
    description: `Тип сумки: сумка багет
Способ ношения: на плече, ,на руке
Материал верха: полиуретан, ,экокожа
Застежка: молния, ,защелка
Для кого: для женщин
Цвет: черный`,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h08/hbe/66762532749342.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/sumka-baget-amadi-451363-poliuretan-ekokozha-chernyi-107989303/?c=750000000',
    likes: 0,
    category: 'Аксессуары'
  },
  {
    id: 26,
    name: 'Барсетка Fashion 557 нейлон черный',
    price: 738.0,
    description: `Тип сумки: барсетка
Способ ношения: на плече, ,через плечо
Материал верха: нейлон
Застежка: молния
Цвет: черный
Для кого: для женщин, ,для мужчин`,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/heb/hf4/64141700825118.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/barsetka-fashion-557-neilon-chernyi-102376597/?c=750000000',
    likes: 0,
    category: 'Аксессуары'
  },
  {
    id: 27,
    name: 'Сумка кросс-боди adn&aru 7770787 экокожа черный',
    price: 1903.0,
    description: `Тип сумки: сумка кросс-боди
Способ ношения: на плече, ,через плечо, ,на руке
Материал верха: экокожа
Застежка: магнит, ,молния
Для кого: для женщин
Цвет: черный`,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h8d/hd1/79378895896606.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/sumka-kross-bodi-adn-aru-7770787-ekokozha-chernyi-107650763/?c=750000000',
    likes: 0,
    category: 'Аксессуары'
  },
  {
    id: 28,
    name: 'Сумка багет Fashion&Bag RF-07 искусственная кожа черный',
    price: 3190.0,
    description: `Тип сумки: сумка багет
Способ ношения: через плечо, ,на руке
Материал верха: искусственная кожа
Застежка: молния
Для кого: для женщин
Цвет: черный`,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/hbf/h5d/69370978304030.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/sumka-baget-fashion-bag-rf-07-iskusstvennaja-kozha-chernyi-107961860/?c=750000000',
    likes: 0,
    category: 'Аксессуары'
  },
  {
    id: 29,
    name: 'Барсетка nahb6061 полиэстер черный',
    price: 1952.0,
    description: `Тип сумки: барсетка
Способ ношения: на плече, ,через плечо
Материал верха: полиэстер
Застежка: защелка
Цвет: черный
Для кого: для женщин, ,для мужчин`,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h20/h6c/84971817107486.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/barsetka-nahb6061-poliester-chernyi-108728538/?c=750000000',
    likes: 0,
    category: 'Аксессуары'
  },
  {
    id: 30,
    name: 'Сумка кросс-боди Queen handbag 143605559 искусственная кожа, металл, экокожа черный',
    price: 5173.0,
    description: `Тип сумки: сумка кросс-боди
Способ ношения: на плече, ,через плечо, ,на руке, ,в руке`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/hc9/hca/69701062230046.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/sumka-kross-bodi-queen-handbag-143605559-iskusstvennaja-kozha-metall-ekokozha-chernyi-109204987/?c=750000000',
    likes: 0,
    category: 'Аксессуары'
  },
  {
    id: 31,
    name: 'Клубника в шоколаде 25 шт',
    price: 5988.0,
    description: `Повод: универсальный
Назначение: универсальное
Состав композиции: клубника в шоколаде
Упаковка: коробка`,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/hc2/h17/85298005475358.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/klubnika-v-shokolade-25-sht-106219875/?c=750000000',
    likes: 0,
    category: 'Подарки, товары для праздников'
  },
  {
    id: 32,
    name: 'Кафф Fashion Jewelry N бижутерный сплав, бисер',
    price: 1990.0,
    description: `Вид изделия: кафф
Материал: бижутерный сплав
Вставка: бисер
Застежка: гвоздик
Цвет материала: золотистый
Цвет вставки: белый
Примечание: значение веса оттенка на фото и характеристики являются примерными усредненными и могут отличаться от фактических`,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h4d/hce/64477705502750.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/kaff-fashion-jewelry-n-bizhuternyi-splav-biser-106419414/?c=750000000',
    likes: 0,
    category: 'Подарки, товары для праздников'
  },
  {
    id: 33,
    name: 'Набор Fashion Jewelry N бижутерный сплав, стекло',
    price: 698.0,
    description: `Вид изделия: набор
Материал: бижутерный сплав
Вставка: стекло
Застежка: гвоздик
Цвет материала: мультиколор
Цвет вставки: черный, ,белый, ,зеленый
Примечание: значение веса оттенка на фото и характеристики являются примерными усредненными и могут отличаться от фактических`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/hb4/h8c/66909111484446.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/nabor-fashion-jewelry-n-bizhuternyi-splav-steklo-108048604/?c=750000000',
    likes: 0,
    category: 'Подарки, товары для праздников'
  },
  {
    id: 34,
    name: '02 мужской набор',
    price: 1999.0,
    description: `Назначение: для мужчины
Тип: мужской набор
Тематика: походы и пикник
Упаковка: коробка
Количество предметов: 3`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h53/h0e/68047450472478.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/02-muzhskoi-nabor-108511550/?c=750000000',
    likes: 0,
    category: 'Подарки, товары для праздников'
  },
  {
    id: 35,
    name: 'Серьги бижутерный сплав, искусственный жемчуг',
    price: 488.0,
    description: `Вид изделия: серьги
Материал: бижутерный сплав
Вставка: искусственный жемчуг
Застежка: гвоздик
Цвет материала: золотистый
Цвет вставки: белый
Примечание: значение веса оттенка на фото и характеристики являются примерными усредненными и могут отличаться от фактических
Для кого: для женщин, ,для детей`,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/hee/hf8/80122203996190.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/ser-gi-bizhuternyi-splav-iskusstvennyi-zhemchug-109905470/?c=750000000',
    likes: 0,
    category: 'Подарки, товары для праздников'
  },
  {
    id: 36,
    name: 'UNO 42003',
    price: 340.0,
    description: `Тип: карточная
Пол: универсальная
Количество игроков: 2, ,10
Минимальный возраст: 7 лет`,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h30/he1/63838700634142.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/uno-42003-10101521/?c=750000000',
    likes: 0,
    category: 'Подарки, товары для праздников'
  },
  {
    id: 37,
    name: 'Серьги бижутерный сплав, без вставок',
    price: 994.0,
    description: `Вид изделия: серьги
Материал: бижутерный сплав
Вставка: без вставок
Застежка: гвоздик
Цвет материала: мультиколор
Цвет вставки: отсутствует
Примечание: значение веса оттенка на фото и характеристики являются примерными усредненными и могут отличаться от фактических`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/hb7/h46/81270775021598.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/ser-gi-bizhuternyi-splav-bez-vstavok-110853997/?c=750000000',
    likes: 0,
    category: 'Украшения'
  },
  {
    id: 38,
    name: 'Кафф Fashion Jewelry N бижутерный сплав, бисер',
    price: 1990.0,
    description: `Вид изделия: кафф
Материал: бижутерный сплав
Вставка: бисер
Застежка: гвоздик
Цвет материала: золотистый
Цвет вставки: белый
Примечание: значение веса оттенка на фото и характеристики являются примерными усредненными и могут отличаться от фактических`,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h4d/hce/64477705502750.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/kaff-fashion-jewelry-n-bizhuternyi-splav-biser-106419414/?c=750000000',
    likes: 0,
    category: 'Украшения'
  },
  {
    id: 39,
    name: 'Набор Fashion Jewelry N бижутерный сплав, стекло',
    price: 698.0,
    description: `Вид изделия: набор
Материал: бижутерный сплав
Вставка: стекло
Застежка: гвоздик
Цвет материала: мультиколор
Цвет вставки: черный, ,белый, ,зеленый
Примечание: значение веса оттенка на фото и характеристики являются примерными усредненными и могут отличаться от фактических
Для кого: для женщин`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/hb4/h8c/66909111484446.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/nabor-fashion-jewelry-n-bizhuternyi-splav-steklo-108048604/?c=750000000',
    likes: 0,
    category: 'Украшения'
  },
  {
    id: 40,
    name: 'Серьги Fashion Jewelry N бижутерный сплав, титан, стразы, искусственный жемчуг',
    price: 1500.0,
    description: `Вид изделия: серьги
Материал: бижутерный сплав, ,титан
Вставка: стразы, ,искусственный жемчуг
Застежка: гвоздик
Цвет материала: золотистый
Цвет вставки: белый, ,бесцветный
Примечание: значение веса оттенка на фото и характеристики являются примерными усредненными и могут отличаться от фактических`,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h25/hce/69489076142110.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/ser-gi-fashion-jewelry-n-bizhuternyi-splav-titan-strazy-iskusstvennyi-zhemchug-109101372/?c=750000000',
    likes: 0,
    category: 'Украшения'
  },
  {
    id: 41,
    name: 'Серьги бижутерный сплав, искусственный жемчуг',
    price: 488.0,
    description: `Вид изделия: серьги
Материал: бижутерный сплав
Вставка: искусственный жемчуг
Застежка: гвоздик
Цвет материала: золотистый
Цвет вставки: белый
Примечание: значение веса оттенка на фото и характеристики являются примерными усредненными и могут отличаться от фактических`,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/hee/hf8/80122203996190.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/ser-gi-bizhuternyi-splav-iskusstvennyi-zhemchug-109905470/?c=750000000',
    likes: 0,
    category: 'Украшения'
  },
  {
    id: 42,
    name: 'Серьги бижутерный сплав, искусственный жемчуг',
    price: 879.0,
    description: `Вид изделия: серьги
Материал: бижутерный сплав
Вставка: искусственный жемчуг
Застежка: гвоздик
Цвет материала: золотистый
Цвет вставки: белый
Примечание: значение веса оттенка на фото и характеристики являются примерными усредненными и могут отличаться от фактических`,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h60/hb8/81270774562846.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/ser-gi-bizhuternyi-splav-iskusstvennyi-zhemchug-110853992/?c=750000000',
    likes: 0,
    category: 'Украшения'
  },
  {
    id: 43,
    name: 'Darling кусочки в соусе говядина 75 г 1 шт',
    price: 149.0,
    description: ``,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h39/h18/84798257594398.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/darling-kusochki-v-souse-govjadina-75-g-1-sht-110583732/?c=750000000',
    likes: 0,
    category: 'Товары для животных'
  },
  {
    id: 44,
    name: 'Felix кусочки в желе лосось 75 г 1 шт',
    price: 115.0,
    description: `Without description`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h1f/h07/80548097851422.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/felix-kusochki-v-zhele-losos-75-g-1-sht-107945462/?c=750000000',
    likes: 0,
    category: 'Товары для животных'
  },
  {
    id: 45,
    name: 'Felix кусочки в желе говядина 75 г 1 шт',
    price: 115.0,
    description: ``,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h3b/h01/84564384645150.png?format=preview-large',
    url: 'https://kaspi.kz/shop/p/felix-kusochki-v-zhele-govjadina-75-g-1-sht-107965425/?c=750000000',
    likes: 0,
    category: 'Товары для животных'
  },
  {
    id: 46,
    name: 'Darling кусочки в соусе лосось 75 г 1 шт',
    price: 149.0,
    description: ``,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/hf2/h66/84798115971102.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/darling-kusochki-v-souse-losos-75-g-1-sht-110583736/?c=750000000',
    likes: 0,
    category: 'Товары для животных'
  },
  {
    id: 47,
    name: 'Darling кусочки в соусе курица 75 г 1 шт',
    price: 150.0,
    description: ``,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/hb3/h03/84798116298782.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/darling-kusochki-v-souse-kuritsa-75-g-1-sht-110583756/?c=750000000',
    likes: 0,
    category: 'Товары для животных'
  },
  {
    id: 48,
    name: 'Felix кусочки в желе кролик 75 г 1 шт',
    price: 115.0,
    description: `Порода: для любой породы
Текстура: кусочки в желе`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/ha7/he9/80547767648286.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/felix-kusochki-v-zhele-krolik-75-g-1-sht-100218713/?c=750000000',
    likes: 0,
    category: 'Товары для животных'
  },
  {
    id: 49,
    name: 'SV4 бумага, A4, 500 листов, матовое покрытие',
    price: 1650.0,
    description: `Тип: бумага
Тип бумаги: форматная
Назначение: лазерный принтер, ,струйный принтер, ,для рукописных работ
Формат: A4
Фасовка: лист
Количество листов: 500
Покрытие: матовое`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h49/hd2/68782824521758.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/sv4-bumaga-a4-500-listov-matovoe-pokrytie-108810207/?c=750000000',
    likes: 0,
    category: 'Канцелярские товары'
  },
  {
    id: 50,
    name: 'Плёнка для ламинирования А4 100мкм 100шт',
    price: 2882.0,
    description: `Тип: пакетная пленка
Формат: А4
Тип ламинирования: горячее
Покрытие: глянцевое
Антистатический эффект: Нет
Количество в упаковке: 100`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h7c/h2b/64616166195230.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/pljonka-dlja-laminirovanija-a4-100mkm-100sht-107232597/?c=750000000',
    likes: 0,
    category: 'Канцелярские товары'
  },
  {
    id: 51,
    name: 'Ручка шариковая Obama 2810 12 шт, цвет чернил синий',
    price: 301.0,
    description: `Тип ручки: шариковая
Конструкция: неавтоматическая
Цвет чернил: синий
Толщина линии: 1.0 мм
Форма корпуса: круглый
Набор: Нет`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/hc0/hae/64377261031454.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/ruchka-sharikovaja-obama-2810-12-sht-tsvet-chernil-sinii-107217516/?c=750000000',
    likes: 0,
    category: 'Канцелярские товары'
  },
  {
    id: 52,
    name: 'Липучка 51840, ширина 15 мм, 100 пар, белый, прозрачный',
    price: 492.0,
    description: `Тип: канцелярская лента
Ширина: 15.0 мм
Набор: Да
Количество в упаковке: 200`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h79/hdb/64393305358366.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/lipuchka-51840-shirina-15-mm-100-par-belyi-prozrachnyi-107218270/?c=750000000',
    likes: 0,
    category: 'Канцелярские товары'
  },
  {
    id: 53,
    name: 'SvetoCopy Classic бумага, A4, 500 листов, матовое покрытие',
    price: 1800.0,
    description: `Тип: бумага
Тип бумаги: копировальная
Назначение: лазерный принтер, ,струйный принтер
Формат: A4
Фасовка: лист
Количество листов: 500`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h71/h48/63982573649950.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/svetocopy-classic-bumaga-a4-500-listov-matovoe-pokrytie-100843701/?c=750000000',
    likes: 0,
    category: 'Канцелярские товары'
  },
  {
    id: 54,
    name: 'Ручка шариковая Gem GEM 303 12 шт, 0.5 мм, цвет чернил синий',
    price: 711.0,
    description: `Тип ручки: шариковая
Конструкция: неавтоматическая
Цвет чернил: синий
Толщина линии: 0.5 мм
Форма корпуса: круглый
Набор: Да`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h0f/h37/80941620527134.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/ruchka-sharikovaja-gem-gem-303-12-sht-0-5-mm-tsvet-chernil-sinii-105944594/?c=750000000',
    likes: 0,
    category: 'Канцелярские товары'
  },
  {
    id: 55,
    name: 'Кроссовки EuroTrend черный',
    price: 4199.0,
    description: `Модель: кроссовки
Материал верха: текстиль
Сезон: демисезон, ,лето
Цвет: черный
Особенности размера: маломерит на 1 размер`,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h27/hde/80620062081054.png?format=preview-large',
    url: 'https://kaspi.kz/shop/p/eurotrend-chernyi-10886987b/?c=750000000',
    likes: 0,
    category: 'Обувь'
  },
  {
    id: 56,
    name: 'Кеды DD&OO белый',
    price: 7489.0,
    description: `Модель: кеды
Материал верха: экокожа`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h1a/h30/84930766372894.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/dd-oo-belyi-10790995b/?c=750000000',
    likes: 0,
    category: 'Обувь'
  },
  {
    id: 57,
    name: 'Кроссовки DIAN черный',
    price: 11000.0,
    description: `Модель: кроссовки
Материал верха: искусственная кожа, ,текстиль
Сезон: демисезон, ,лето
Цвет: черный
Высота каблука: 4.0 см`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/he6/hd7/84944741531678.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/dian-chernyi-11861085b/?c=750000000',
    likes: 0,
    category: 'Обувь'
  },
  {
    id: 58,
    name: 'Чешки Leosport черный',
    price: 1195.0,
    description: `Модель: чешки
Материал верха: текстиль, ,хлопок`,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h09/hbb/80748384616478.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/cheshki-leosport-lbl-chernyi-10133014b/?c=750000000',
    likes: 0,
    category: 'Обувь'
  },
  {
    id: 59,
    name: 'Кроссовки EuroTrend белый',
    price: 4199.0,
    description: `Модель: кроссовки
Материал верха: текстиль
Сезон: демисезон, ,лето
Цвет: белый
Особенности размера: маломерит на 1 размер`,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h26/h4c/80930064072734.png?format=preview-large',
    url: 'https://kaspi.kz/shop/p/eurotrend-belyi-10808248b/?c=750000000',
    likes: 0,
    category: 'Обувь'
  },
  {
    id: 60,
    name: 'Кроссовки Quanzhou Jinqiu Sports серый',
    price: 4000.0,
    description: ``,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/hd3/hc8/81097939845150.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/quanzhou-jinqiu-sports-6842-seryi-10777687b/?c=750000000',
    likes: 0,
    category: 'Обувь'
  },
  {
    id: 61,
    name: 'Apple iPhone 15 Pro Max 256Gb серый',
    price: 629559.0,
    description: `Технология NFC: Да
Цвет: серый
Тип экрана: OLED, Super Retina XDR display`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848181790.png?format=preview-large',
    url: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000',
    likes: 0,
    category: 'Телефоны и гаджеты'
  },
  {
    id: 62,
    name: 'Apple 20W USB-C Power Adapter белый',
    price: 2273.0,
    description: `Тип: сетевая зарядка
Количество подключаемых устройств: 1
Быстрая зарядка: Да
Разъем подключения: USB Type-C`,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h95/h0e/63961934823454.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/apple-20w-usb-c-power-adapter-belyi-100984093/?c=750000000',
    likes: 0,
    category: 'Телефоны и гаджеты'
  },
  {
    id: 63,
    name: 'Apple iPhone 13 128Gb Midnight черный',
    price: 291239.0,
    description: ``,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000',
    likes: 0,
    category: 'Телефоны и гаджеты'
  },
  {
    id: 64,
    name: 'Apple iPhone 15 128Gb черный',
    price: 387790.0,
    description: `Технология NFC: Да
Цвет: черный
Тип экрана: OLED, Super Retina XDR display`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/he2/h1d/83559338442782.png?format=preview-large',
    url: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000',
    likes: 0,
    category: 'Телефоны и гаджеты'
  },
  {
    id: 65,
    name: 'Apple iPhone 15 Pro 256Gb серый',
    price: 579999.0,
    description: `Технология NFC: Да
Цвет: серый
Тип экрана: OLED, Super Retina XDR display`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/hae/h00/83559620739102.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-256gb-seryi-113138213/?c=750000000',
    likes: 0,
    category: 'Телефоны и гаджеты'
  },
  {
    id: 66,
    name: 'Apple iPhone 11 128Gb Slim Box черный',
    price: 237262.0,
    description: ``,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/hd8/hac/63897052413982.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-chernyi-100692388/?c=750000000',
    likes: 0,
    category: 'Телефоны и гаджеты'
  },
  {
    id: 67,
    name: 'Generic SF-400',
    price: 860.0,
    description: `Тип: электронные
Предел взвешивания: 10.0 кг
Точность измерения: 1.0 г
Счетчик калорий: Да
Цвет: белый`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h47/ha1/64094073815070.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/generic-sf-400-102531445/?c=750000000',
    likes: 0,
    category: 'Бытовая техника'
  },
  {
    id: 68,
    name: 'Электрочайник BEREKE BR-810 серый',
    price: 1900.0,
    description: `Фильтр от накипи: Нет
Тип: электрочайник
Объем: 2.0 л
Мощность: 1500.0 Вт
Материал корпуса: нержавеющая сталь
Цвет: серый`,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h08/hde/80282292781086.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/elektrochainik-bereke-br-810-seryi-109981423/?c=750000000',
    likes: 0,
    category: 'Бытовая техника'
  },
  {
    id: 69,
    name: 'Deerma DX700 белый',
    price: 17313.0,
    description: `Тип: вертикальный
Уборка: сухая
Тип пылесборника: циклонный фильтр
Потребляемая мощность: 600.0 Вт
Источник питания: сеть
Цвет: белый`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/hdb/h2f/63803859566622.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/deerma-dx700-belyi-3701383/?c=750000000',
    likes: 0,
    category: 'Бытовая техника'
  },
  {
    id: 70,
    name: 'SM-7700 серебристый',
    price: 9990.0,
    description: `Тип: стационарный
Мощность: 1000.0 Вт
Управление: механическое
Количество скоростей: 3
Измельчитель: Да
Цвет: серебристый`,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h78/he6/81315957440542.png?format=preview-large',
    url: 'https://kaspi.kz/shop/p/sm-7700-serebristyi-110902818/?c=750000000',
    likes: 0,
    category: 'Бытовая техника'
  },
  {
    id: 71,
    name: 'Samsung VCC4520S3R/XEV красный',
    price: 32159.0,
    description: `Тип: традиционный
Уборка: сухая
Тип пылесборника: циклонный фильтр
Потребляемая мощность: 1600.0 Вт
Источник питания: сеть
Цвет: красный`,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/heb/h01/63769265045534.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/samsung-vcc4520s3r-xev-krasnyi-3700926/?c=750000000',
    likes: 0,
    category: 'Бытовая техника'
  },
  {
    id: 72,
    name: 'Погружной Slaouwo HB-2075 белый',
    price: 8398.0,
    description: `Тип: погружной
Мощность: 800.0 Вт
Управление: электронное
Количество скоростей: 6
Измельчитель: Да
Цвет: белый`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/hfe/ha1/67141660606494.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/pogruzhnoi-slaouwo-hb-2075-belyi-108151055/?c=750000000',
    likes: 0,
    category: 'Бытовая техника'
  },
  {
    id: 73,
    name: 'TWS F9-5 черные',
    price: 1968.0,
    description: `Тип: гарнитура
Вид: внутриканальные
Подключение: беспроводное
Тип акустического оформления: полуоткрытые
Тип крепления: без крепления`,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/hf8/hcc/64254215946270.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/tws-f9-5-chernye-101769530/?c=750000000',
    likes: 0,
    category: 'ТВ, Аудио, Видео'
  },
  {
    id: 74,
    name: 'Apple AirPods 3 белый',
    price: 82998.0,
    description: `Тип: гарнитура
Вид: внутриканальные
Подключение: беспроводное
Тип акустического оформления: открытые
Тип крепления: без крепления
Система активного шумоподавления: Нет
Микрофон: Да`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/hda/hc7/64341967994910.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/apple-airpods-3-belyi-102667744/?c=750000000',
    likes: 0,
    category: 'ТВ, Аудио, Видео'
  },
  {
    id: 75,
    name: 'Apple AirPods 3 with Lightning Charging Case белый',
    price: 83882.0,
    description: `Тип: гарнитура
Вид: внутриканальные
Подключение: беспроводное
Тип акустического оформления: открытые
Тип крепления: без крепления
Система активного шумоподавления: Нет`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h31/hd7/64362668556318.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/apple-airpods-3-with-lightning-charging-case-belyi-106667987/?c=750000000',
    likes: 0,
    category: 'ТВ, Аудио, Видео'
  },
  {
    id: 76,
    name: 'Apple AirPods Pro 2nd generation with Wireless MagSafe Charging Case белый',
    price: 108699.0,
    description: `Тип: наушники
Вид: внутриканальные
Подключение: беспроводное
Тип акустического оформления: закрытые
Тип крепления: без крепления
Система активного шумоподавления: Да
Микрофон: Да`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/?c=750000000',
    likes: 0,
    category: 'ТВ, Аудио, Видео'
  },
  {
    id: 77,
    name: 'Apple AirPods 2nd generation белый',
    price: 50958.0,
    description: `Тип: гарнитура
Вид: внутриканальные
Подключение: беспроводное
Тип акустического оформления: открытые
Тип крепления: без крепления
Система активного шумоподавления: Нет
Микрофон: Да`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h12/hc8/84594232688670.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/apple-airpods-2nd-generation-belyi-114927908/?c=750000000',
    likes: 0,
    category: 'ТВ, Аудио, Видео'
  },
  {
    id: 78,
    name: 'Apple AirPods with Charging Case белый',
    price: 49901.0,
    description: `Тип: гарнитура
Вид: внутриканальные
Подключение: беспроводное
Тип акустического оформления: открытые
Тип крепления: без крепления
Система активного шумоподавления: Нет
Микрофон: Да`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/hbc/h5a/63761265426462.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/apple-airpods-with-charging-case-belyi-4804056/?c=750000000',
    likes: 0,
    category: 'ТВ, Аудио, Видео'
  },
  {
    id: 79,
    name: 'LS Pro черный',
    price: 1099.0,
    description: `Тип сенсора: оптическая светодиодная
Тип подключения: беспроводная
Интерфейс: Bluetooth, ,радиоканал
Дизайн: для правой и левой руки
Игровая: Нет
Разрешение оптического сенсора: 1600.0 dpi`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h2f/h61/82393746636830.png?format=preview-large',
    url: 'https://kaspi.kz/shop/p/ls-pro-chernyi-107622516/?c=750000000',
    likes: 0,
    category: 'Компьютеры'
  },
  {
    id: 80,
    name: 'Logitech G102 Lightsync черный',
    price: 9710.0,
    description: `Тип сенсора: оптическая светодиодная
Тип подключения: проводная
Интерфейс: USB
Дизайн: для правой руки
Игровая: Да
Разрешение оптического сенсора: 8000.0 dpi
Количество программируемых клавиш: 6`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/hb2/hc2/64119540187166.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/logitech-g102-lightsync-chernyi-100956618/?c=750000000',
    likes: 0,
    category: 'Компьютеры'
  },
  {
    id: 81,
    name: 'Wi-Fi роутер TELE2 5G H155-380',
    price: 32897.0,
    description: `Тип: Wi-Fi роутер
Максимальная скорость беспроводного соединения: 1024.0 Мбит/с
Стандарты Wi-Fi: Wi-Fi 5 (802.11ac)
Количество LAN портов: 2
Диапазоны частот: 2.4 ГГц, ,5 ГГц`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h52/h70/84057077645342.png?format=preview-large',
    url: 'https://kaspi.kz/shop/p/wi-fi-router-tele2-5g-h155-380-113565384/?c=750000000',
    likes: 0,
    category: 'Компьютеры'
  },
  {
    id: 82,
    name: 'Wi-Fi роутер ALTEL 5G H155-380',
    price: 32000.0,
    description: `Тип: Wi-Fi роутер
Максимальная скорость беспроводного соединения: 1024.0 Мбит/с
Стандарты Wi-Fi: Wi-Fi 6 (802.11ax)
Количество LAN портов: 2
Диапазоны частот: 2.4 ГГц, ,5 ГГц`,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h43/hce/84100622680094.png?format=preview-large',
    url: 'https://kaspi.kz/shop/p/wi-fi-router-altel-5g-h155-380-113639162/?c=750000000',
    likes: 0,
    category: 'Компьютеры'
  },
  {
    id: 83,
    name: 'Wi-Fi роутер Xiaomi Mi Wi-Fi Router 4A Gigabit Edition',
    price: 11345.0,
    description: `Тип: Wi-Fi роутер
Максимальная скорость беспроводного соединения: 1167.0 Мбит/с
Стандарты Wi-Fi: Wi-Fi 4 (802.11n), ,Wi-Fi 5 (802.11ac)
Количество LAN портов: 2
Диапазоны частот: 2.4 ГГц, ,5 ГГц`,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h9e/ha1/63832974196766.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/wi-fi-router-xiaomi-mi-wi-fi-router-4a-gigabit-edition-100044713/?c=750000000',
    likes: 0,
    category: 'Компьютеры'
  },
  {
    id: 84,
    name: 'Wi-Fi роутер TP-LINK Archer C80',
    price: 25832.0,
    description: `Тип: Wi-Fi роутер
Максимальная скорость беспроводного соединения: 1900.0 Мбит/с
Стандарты Wi-Fi: Wi-Fi 4 (802.11n), ,Wi-Fi 5 (802.11ac)
Количество LAN портов: 4
Диапазоны частот: 2.4 ГГц, ,5 ГГц`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h13/h0f/63885265829918.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/wi-fi-router-tp-link-archer-c80-100663389/?c=750000000',
    likes: 0,
    category: 'Компьютеры'
  },
  {
    id: 85,
    name: 'Бумажные салфетки Карина DOSTYQ 200 шт',
    price: 346.0,
    description: `Количество в пачке, шт: 200
Тип: бумажные салфетки
Упаковка: пакет
Материал: бумага
Цвет: белый`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h4f/ha5/85102499397662.png?format=preview-large',
    url: 'https://kaspi.kz/shop/p/bumazhnye-salfetki-karina-dostyq-200-sht-110230386/?c=750000000',
    likes: 0,
    category: 'Товары для дома'
  },
  {
    id: 86,
    name: 'Papia туалетная бумага 3-слойный 32 шт, первичная целлюлоза',
    price: 4790.0,
    description: `Тип: туалетная бумага
Вид: рулонный
Количество в упаковке: 32
Материал: первичная целлюлоза`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h0c/h5c/64378069090334.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/papia-tualetnaja-bumaga-3-sloinyi-32-sht-pervichnaja-tselljuloza-102650292/?c=750000000',
    likes: 0,
    category: 'Товары для дома'
  },
  {
    id: 87,
    name: 'Мелочи жизни Пчелки крупнопористые 5 шт',
    price: 579.0,
    description: `Материал: поролон
Тип: губка
Назначение: для пола, ,для посуды, ,для сантехники`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h0f/h08/64074314645534.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/melochi-zhizni-pchelki-krupnoporistye-5-sht-101607499/?c=750000000',
    likes: 0,
    category: 'Товары для дома'
  },
  {
    id: 88,
    name: 'Карина туалетная бумага двух-слойный 8 шт, первичная целлюлоза',
    price: 1110.0,
    description: `Тип: туалетная бумага
Вид: рулонный
Количество в упаковке: 8
Материал: первичная целлюлоза`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/hbf/h4b/64319883477022.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/karina-tualetnaja-bumaga-dvuh-sloinyi-8-sht-pervichnaja-tselljuloza-101671250/?c=750000000',
    likes: 0,
    category: 'Товары для дома'
  },
  {
    id: 89,
    name: 'Карина туалетная бумага 2-слойный 12 шт, вторичная целлюлоза',
    price: 1662.0,
    description: `Тип: туалетная бумага
Вид: рулонный
Количество в упаковке: 12
Материал: вторичная целлюлоза`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h66/h78/64534893395998.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/karina-tualetnaja-bumaga-2-sloinyi-12-sht-vtorichnaja-tselljuloza-104962569/?c=750000000',
    likes: 0,
    category: 'Товары для дома'
  },
  {
    id: 90,
    name: 'Бумажные полотенца Papia 181239 4 шт',
    price: 1625.0,
    description: `Количество в пачке, шт: 4
Тип: бумажные полотенца
Упаковка: пакет
Материал: бумага
Цвет: белый`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/hdb/hb9/84610968682526.png?format=preview-large',
    url: 'https://kaspi.kz/shop/p/bumazhnye-polotentsa-papia-181239-4-sht-101752032/?c=750000000',
    likes: 0,
    category: 'Товары для дома'
  },
  {
    id: 91,
    name: 'SPLAT зубная паста Отбеливание Плюс 100 мл',
    price: 950.0,
    description: `Тип: зубная паста
Вкус: мятный, ,нейтральный
Объем, мл/Вес, г: 100 мл`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/ha5/hdf/63847123779614.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/splat-zubnaja-pasta-otbelivanie-pljus-100-ml-100194785/?c=750000000',
    likes: 0,
    category: 'Красота и здоровье'
  },
  {
    id: 92,
    name: 'SPLAT зубная паста Биокальций 100 мл',
    price: 950.0,
    description: `Тип: зубная паста
Вкус: нейтральный
Объем, мл/Вес, г: 100 мл`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/hbb/hd5/63847124205598.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/splat-zubnaja-pasta-biokal-tsii-100-ml-100194771/?c=750000000',
    likes: 0,
    category: 'Красота и здоровье'
  },
  {
    id: 93,
    name: 'Bella ватные палочки Cotton 160 шт',
    price: 369.0,
    description: `Тип: ватные палочки
Для детей: Нет`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h73/hf8/84637755080734.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/bella-vatnye-palochki-cotton-160-sht-100224758/?c=750000000',
    likes: 0,
    category: 'Красота и здоровье'
  },
  {
    id: 94,
    name: 'Bella прокладки ежедневные Panty Soft 60 шт',
    price: 985.0,
    description: `Тип: прокладки ежедневные
Количество в упаковке: 60
Число капель: 2
Страна производства: Польша`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h09/hdd/84933684002846.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/bella-prokladki-ezhednevnye-panty-soft-60-sht-100901970/?c=750000000',
    likes: 0,
    category: 'Красота и здоровье'
  },
  {
    id: 95,
    name: 'Bella ватные диски Cotton 120 шт',
    price: 469.0,
    description: `Тип: ватные диски
Для детей: Нет
Количество: 120
Тип кожи: для всех типов кожи
Страна производства: Польша`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h15/hce/63887012495390.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/bella-vatnye-diski-cotton-120-sht-100224746/?c=750000000',
    likes: 0,
    category: 'Красота и здоровье'
  },
  {
    id: 96,
    name: 'Kotex Ultra Normal прокладки 10 шт',
    price: 674.0,
    description: `Тип: прокладки
Количество в упаковке: 10
Число капель: 4
Страна производства: Россия`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h6e/hf6/83144442642462.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/kotex-ultra-normal-prokladki-10-sht-100931867/?c=750000000',
    likes: 0,
    category: 'Красота и здоровье'
  },
  {
    id: 97,
    name: 'ФрутоНяня Яблоко-Банан-Клубника 90 г',
    price: 377.0,
    description: `Тип: многокомпонентное
Добавки: йогурт
Компоненты: фрукты
Минимальный возраст: 7 месяцев`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h36/hf0/64024145166366.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/frutonjanja-jabloko-banan-klubnika-90-g-101048221/?c=750000000',
    likes: 0,
    category: 'Детские товары'
  },
  {
    id: 98,
    name: 'Агуша Яблоко-клубника-малина 90 г',
    price: 355.0,
    description: `Тип: многокомпонентное
Добавки: без добавки
Компоненты: фрукты
Минимальный возраст: 6 месяцев`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h53/hc1/63957671575582.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/agusha-jabloko-klubnika-malina-90-g-100623509/?c=750000000',
    likes: 0,
    category: 'Детские товары'
  },
  {
    id: 99,
    name: 'ФрутоНяня Яблоко-банан-творог 6 мес+ 90 г',
    price: 239.0,
    description: `Тип: многокомпонентное
Добавки: творог
Компоненты: фрукты
Минимальный возраст: 6 месяцев`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/hac/h4f/84933630459934.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/frutonjanja-jabloko-banan-tvorog-6-mes-90-g-100975502/?c=750000000',
    likes: 0,
    category: 'Детские товары'
  },
  {
    id: 100,
    name: 'ФрутоНяня Яблоко-малина-творог 90 г',
    price: 375.0,
    description: `Тип: многокомпонентное
Добавки: творог
Компоненты: фрукты
Минимальный возраст: 6 месяцев`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h1b/h02/64234829545502.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/frutonjanja-jabloko-malina-tvorog-90-g-101049014/?c=750000000',
    likes: 0,
    category: 'Детские товары'
  },
  {
    id: 101,
    name: 'Агуша Яблоко 90 г',
    price: 390.0,
    description: `Тип: однокомпонентное
Добавки: без добавки
Компоненты: фрукты
Минимальный возраст: 4 месяца`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h35/h62/63957235138590.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/agusha-jabloko-90-g-100621391/?c=750000000',
    likes: 0,
    category: 'Детские товары'
  },
  {
    id: 102,
    name: 'Агуша Яблоко-малина-шиповник 90 г',
    price: 355.0,
    description: `Тип: многокомпонентное
Компоненты: фрукты
Минимальный возраст: 5 месяцев`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h94/h56/63957144797214.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/agusha-jabloko-malina-shipovnik-90-g-100623523/?c=750000000',
    likes: 0,
    category: 'Детские товары'
  },
  {
    id: 103,
    name: 'Цитрамон П таблетки 240 мг 10 шт',
    price: 147.0,
    description: `Назначение: воспаления
Антибиотик: Нет
Рецептурный препарат: Нет
Действующее вещество: ацетилсалициловая кислота
Условия отпуска: без рецепта
Способ применения: пероральный
Лекарственная форма: таблетки
Возрастные ограничения: с 18 лет
Дозировка: 240 мг
Страна производитель: Россия`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h46/hc1/63963912962078.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/tsitramon-p-tabletki-240-mg-10-sht-100979731/?c=750000000',
    likes: 0,
    category: 'Аптека'
  },
  {
    id: 104,
    name: '21st Century минерал Calcium Magnesium Zinc + D3 90 таблеток',
    price: 3773.0,
    description: `Тип: минерально-витаминный комплекс
Назначение: для укрепления костей
Для кого: универсальные
Регистрационный статус: не является лекарственным средством
Область применения: витамин D3
Страна производитель: США
Количество штук в упаковке: 90`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h7b/h32/64006498877470.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/21st-century-mineral-calcium-magnesium-zinc-d3-90-tabletok-100505310/?c=750000000',
    likes: 0,
    category: 'Аптека'
  },
  {
    id: 105,
    name: 'California Gold Nutrition Омега 3, 100 капсул Omega-3 Premium Fish Oil',
    price: 3698.0,
    description: `Тип: витамин
Назначение: для улучшения состояния кожи
Для кого: универсальные
Регистрационный статус: не является лекарственным средством
Область применения: кожа волосы ногти
Страна производитель: США
Количество штук в упаковке: 100
Форма выпуска: капсулы`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h0f/hd1/63863964336158.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/california-gold-nutrition-omega-3-100-kapsul-omega-3-premium-fish-oil-100638544/?c=750000000',
    likes: 0,
    category: 'Аптека'
  },
  {
    id: 106,
    name: 'Пластырь 10 шт стерильно',
    price: 144.0,
    description: `Тип: пластырь
Количество в упаковке: 10
Стерильность: стерильно
Страна производитель: Пакистан`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h18/hf1/64236580372510.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/plastyr-10-sht-steril-no-102531160/?c=750000000',
    likes: 0,
    category: 'Аптека'
  },
  {
    id: 107,
    name: 'Мукалтин таблетки 50 мг 10 шт',
    price: 205.0,
    description: `Назначение: отхаркивающие, ,препараты от кашля
Антибиотик: Нет
Рецептурный препарат: Нет
Действующее вещество: экстракт из корней алтея лекарственного
Условия отпуска: без рецепта
Способ применения: пероральный
Лекарственная форма: таблетки
Возрастные ограничения: с 6 лет`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/hd3/h1c/83678055694366.png?format=preview-large',
    url: 'https://kaspi.kz/shop/p/mukaltin-tabletki-50-mg-10-sht-100990373/?c=750000000',
    likes: 0,
    category: 'Аптека'
  },
  {
    id: 108,
    name: 'Терафлю порошок 325 мг 10 шт',
    price: 2093.0,
    description: `Назначение: жаропонижающие
Антибиотик: Нет
Рецептурный препарат: Нет
Действующее вещество: парацетамол
Условия отпуска: без рецепта
Способ применения: пероральный
Лекарственная форма: порошок
Возрастные ограничения: с 18 лет
Дозировка: 325 мг
Страна производитель: Швейцария`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/heb/hf3/64143706423326.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/teraflju-poroshok-325-mg-10-sht-101114328/?c=750000000',
    likes: 0,
    category: 'Аптека'
  },
  {
    id: 109,
    name: 'Автомобильная визитка AVTOCHEHLY.KZ 2107221439 черный',
    price: 237.0,
    description: `Способ крепления: двухсторонний скотч
Место установки: приборная панель
Материал: пластик
Цвет: черный`,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/ha2/h5a/64527256748062.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/avtomobil-naja-vizitka-avtochehly-kz-2107221439-chernyi-105726714/?c=750000000',
    likes: 0,
    category: 'Автотовары'
  },
  {
    id: 110,
    name: 'FOXSUR зарядное устройство FBC122408D',
    price: 8690.0,
    description: `Тип: зарядное устройство
Напряжение АКБ: 12/24 В
Максимальный ток пуска: 8.0 А
Особенности: автоматическая зарядка, ,автоматическое отключение зарядки, ,защита от перегрева, ,защита от перегрузок и короткого замыкания, ,ЖК-экран`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h45/h59/65076168294430.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/foxsur-zarjadnoe-ustroistvo-fbc122408d-105391486/?c=750000000',
    likes: 0,
    category: 'Автотовары'
  },
  {
    id: 111,
    name: 'Автомобильная визитка Perfeo 105987 черный',
    price: 199.0,
    description: `Способ крепления: двухсторонний скотч
Место установки: приборная панель
Материал: пластик
Цвет: черный`,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h45/h85/64439780671518.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/avtomobil-naja-vizitka-perfeo-105987-chernyi-104530784/?c=750000000',
    likes: 0,
    category: 'Автотовары'
  },
  {
    id: 112,
    name: 'RoHS ароматизатор жидкий 690574 Silver 5 мл',
    price: 1544.0,
    description: `Вид: жидкий
Тип: ароматизатор
Размещение: приборная панель, ,универсальный
Аромат: специальный, ,природный, ,фруктовый, ,цветочный, ,цитрусовый, ,древесный`,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h8d/h0a/65044617953310.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/rohs-aromatizator-zhidkii-690574-silver-5-ml-105666568/?c=750000000',
    likes: 0,
    category: 'Автотовары'
  },
  {
    id: 113,
    name: 'FOXSUR зарядное устройство FBC1205D-12V',
    price: 4696.0,
    description: `Тип: зарядное устройство
Напряжение АКБ: 12 В
Максимальная емкость АКБ: 100.0 Ач
Минимальный ток заряда: 1.0 А
Максимальный ток заряда: 5.0 А
Особенности: автоматическая зарядка, ,встроенный амперметр, ,автоматическое отключение зарядки, ,защита от перегрева, ,защита от перегрузок и короткого замыкания, ,ЖК-экран, ,защита от неправильного подключения, ,защита от короткого замыкания, ,защита от перегрузки`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/hb7/he9/64517079728158.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/foxsur-zarjadnoe-ustroistvo-fbc1205d-12v-105870726/?c=750000000',
    likes: 0,
    category: 'Автотовары'
  },
  {
    id: 114,
    name: 'SX салфетка 137753 1 шт',
    price: 316.0,
    description: `Тип: салфетка
Материал: микрофибра
Назначение: впитывание влаги, ,очистка поверхности
Место применения: колесные диски, ,кузов, ,стекла, ,фары, ,салон
Количество в упаковке: 1`,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h38/h6f/64512767328286.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/sx-salfetka-137753-1-sht-105882014/?c=750000000',
    likes: 0,
    category: 'Автотовары'
  },
  {
    id: 115,
    name: 'Набор гантелей разборная 615689 2 шт 20 кг',
    price: 9200.0,
    description: `Тип: набор гантелей
Конструкция: разборная
Максимальный вес гантели: 10.0 кг
Фиксаторы дисков: гайка`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h64/ha1/84053922709534.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/nabor-gantelei-razbornaja-615689-2-sht-20-kg-113564088/?c=750000000',
    likes: 0,
    category: 'Спорт, туризм'
  },
  {
    id: 116,
    name: 'Maxler 100% Golden Creatine 300 г',
    price: 11940.0,
    description: `Тип: креатин
Форма выпуска: порошок
Упаковка: банка`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h63/h50/63758370701342.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/maxler-100-golden-creatine-300-g-29502177/?c=750000000',
    likes: 0,
    category: 'Спорт, туризм'
  },
  {
    id: 117,
    name: '270620 черный',
    price: 598.0,
    description: `Тип: складной нож
Материал лезвия: нержавеющая сталь
Инструменты (функции): нож
Длина клинка: 70.0 мм
Длина рукояти: 8.0 мм`,
    rating: 4.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h89/he3/64484477239326.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/270620-chernyi-106285688/?c=750000000',
    likes: 0,
    category: 'Спорт, туризм'
  },
  {
    id: 118,
    name: 'Qazprotein Creatine Monohydrate 300 г',
    price: 7940.0,
    description: `Форма выпуска: порошок
Тип: креатин
Упаковка: банка`,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h44/h4f/84531796934686.png?format=preview-large',
    url: 'https://kaspi.kz/shop/p/qazprotein-creatine-monohydrate-300-g-100388127/?c=750000000',
    likes: 0,
    category: 'Спорт, туризм'
  },
  {
    id: 119,
    name: 'Yoga Mat А910-020 183x61x0.6 синий',
    price: 2490.0,
    description: `Назначение: для фитнеса, ,для йоги, ,для тренажеров
Длина: 183.0 см
Материал: TPE`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h50/h3c/64325304090654.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/yoga-mat-a910-020-183x61x0-6-sinii-101663624/?c=750000000',
    likes: 0,
    category: 'Спорт, туризм'
  },
  {
    id: 120,
    name: 'KARBI 100804 черный',
    price: 1862.0,
    description: `Назначение: ручной
Источник света: светодиоды
Материал корпуса: алюминий`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/he5/hd4/64833713930270.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/karbi-100804-chernyi-103644870/?c=750000000',
    likes: 0,
    category: 'Спорт, туризм'
  },
  {
    id: 121,
    name: 'Dossol переходник MerKan B.M.A 1 шт',
    price: 196.0,
    description: `Тип: переходник
Напряжение: 250.0 В
Сила тока: 16.0 А
Количество гнезд: 1
Страна-производитель: Китай`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h2d/h31/64216255954974.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/dossol-perehodnik-merkan-b-m-a-1-sht-102863205/?c=750000000',
    likes: 0,
    category: 'Строительство и ремонт'
  },
  {
    id: 122,
    name: 'Набор инструментов автомобильный 46 в 1 Pride tools CR-V 46',
    price: 2060.0,
    description: `Тип: набор инструментов
Назначение: автомобильный
Количество предметов: 46
Инструменты в комплекте: трещотка, ,рукоять для бит, ,торцевые ключи
Оснастка в комплекте: биты, ,головки со вставками
Аксессуары в комплекте: удлинитель для головок
Упаковка: кейс`,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h56/h52/64365861535774.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/nabor-instrumentov-avtomobil-nyi-46-v-1-pride-tools-cr-v-46-104733089/?c=750000000',
    likes: 0,
    category: 'Строительство и ремонт'
  },
  {
    id: 123,
    name: 'Шуруповерт 48V',
    price: 17467.0,
    description: `Тип патрона: быстрозажимной
Тип инструмента: шуруповерт
Количество скоростей работы: 2
Питание: от аккумулятора
Аккумулятор и зарядное устройство в комплекте: Да
Комплектация: кейс, ,зарядное устройство, ,два аккумулятора, ,сменные головки`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h0a/ha2/69931731419166.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/shurupovert-48v-109294768/?c=750000000',
    likes: 0,
    category: 'Строительство и ремонт'
  },
  {
    id: 124,
    name: 'НИКА стремянка СМ5, 327 см',
    price: 10357.0,
    description: `Тип: стремянка
Макс. рабочая высота (с работником): 327.0 см
Максимальная нагрузка: 150.0 кг
Складной механизм: Да
Материал: сталь
Особенности: с органайзером`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/he1/h76/63840279920670.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/nika-stremjanka-sm5-327-sm-50500000/?c=750000000',
    likes: 0,
    category: 'Строительство и ремонт'
  },
  {
    id: 125,
    name: 'SHARKS шуруповерт 715',
    price: 11490.0,
    description: `Тип патрона: быстрозажимной
Тип инструмента: шуруповерт
Количество скоростей работы: 2
Питание: от аккумулятора
Аккумулятор и зарядное устройство в комплекте: Да
Комплектация: кейс, ,зарядное устройство, ,держатель бит, ,два аккумулятора, ,набор бит, ,набор сверл, ,быстрозажимной патрон`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/hb2/h51/64064369557534.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/sharks-shurupovert-715-101693227/?c=750000000',
    likes: 0,
    category: 'Строительство и ремонт'
  },
  {
    id: 126,
    name: 'Набор автомобильный 142 в 1 PRO FORCE 142',
    price: 34582.0,
    description: `Тип: набор инструментов
Назначение: автомобильный
Количество предметов: 142
Инструменты в комплекте: трещотка, ,ключи имбусовые (шестигранные), ,рукоять для бит, ,вороток для головок, ,ключи гаечные, ,молоток, ,пассатижи, ,отвёртки, ,плоскогубцы, ,ключи комбинированные
Оснастка в комплекте: биты, ,торцевые головки
Аксессуары в комплекте: удлинитель для головок, ,шарнир карданный для головок, ,кейс, ,держатель для бит, ,переходник для головок, ,удлинитель для бит`,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h50/haa/64072666185758.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/nabor-avtomobil-nyi-142-v-1-pro-force-142-101844407/?c=750000000',
    likes: 0,
    category: 'Строительство и ремонт'
  },
  {
    id: 127,
    name: 'Боксеры Nanjiren мультиколор',
    price: 3240.0,
    description: ``,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h2b/h73/84902075662366.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/boksery-nanjiren-mul-tikolor-11118494b/?c=750000000',
    likes: 0,
    category: 'Одежда'
  },
  {
    id: 128,
    name: 'Корсет синий',
    price: 4497.0,
    description: `Модель: корсет
Для беременных: Нет
Воротника/вырез: с открытыми плечами
Состав: шерсть, ,полиэстер, ,шелк`,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h40/hb1/85255622393886.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/etno-korset-987451-sinii-10932313b/?c=750000000',
    likes: 0,
    category: 'Одежда'
  },
  {
    id: 129,
    name: 'Намазник Muslima style зеленый',
    price: 4973.0,
    description: `Модель: намазник
Состав: хлопок`,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/hcb/h45/84042329784350.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/namaznik-muslima-style-zelenyi-11053252b/?c=750000000',
    likes: 0,
    category: 'Одежда'
  },
  {
    id: 130,
    name: 'IQ Socks 1233210 5 пар белый',
    price: 872.0,
    description: `Модель: носки
Комплект: Да
Состав: хлопок
Узор: однотонный
Назначение: повседневные, ,бег
Примечание: чулочно-носочные изделия обмену и возврату не подлежат`,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h9c/h8b/84370839994398.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/iq-socks-1233210-5-par-belyi-104285966/?c=750000000',
    likes: 0,
    category: 'Одежда'
  },
  {
    id: 131,
    name: 'Слипы Koza Underwear мультиколор',
    price: 3495.0,
    description: ``,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h0b/ha3/66010070548510.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/slipy-koza-underwear-mul-tikolor-11169619b/?c=750000000',
    likes: 0,
    category: 'Одежда'
  },
  {
    id: 132,
    name: 'Комплект Antec черный',
    price: 10900.0,
    description: `Модель: комплект
Вид спорта: универсальный
Состав: полиэстер, ,эластан`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/hb1/h57/82999734861854.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/komplekt-antec-rash-921-rashgard-5-v-1-chernyi-11391205b/?c=750000000',
    likes: 0,
    category: 'Одежда'
  },
  {
    id: 133,
    name: 'Дамира Өмірзаққызы Ибрагим: Адамзаттың асыл тәжі',
    price: 3700.0,
    description: `ISBN: 978-601-7941-03-1
Возраст: 10+
Язык издания: казахский
Переплет: твердый переплет
Жанр: казахская классика`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h71/ha4/85122679570462.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/damira-m-rza-yzy-ibragim-adamzatty-asyl-t-zh--116495534/?c=750000000',
    likes: 0,
    category: 'Досуг, книги'
  },
  {
    id: 134,
    name: 'Жолдыбайұлы Қ.: Кемел адам',
    price: 5899.0,
    description: `ISBN: 978-601-7629-44-1
Возраст: 16+
Язык издания: казахский
Переплет: твердый переплет
Жанр: психология популярная`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h28/hc3/67252819197982.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/zholdybai-ly-kemel-adam-103430816/?c=750000000',
    likes: 0,
    category: 'Досуг, книги'
  },
  {
    id: 135,
    name: 'Mold Store Молд Шкатулка силиконовая силикон',
    price: 3498.0,
    description: `Тематика: геометрические фигуры
Назначение: гипс, ,эпоксидная смола
Размеры: 6x4x8,2 см`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h37/h22/84810882154526.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/mold-store-mold-shkatulka-silikonovaja-silikon-106173727/?c=750000000',
    likes: 0,
    category: 'Досуг, книги'
  },
  {
    id: 136,
    name: 'Перизат Мырзахмет: Өмірдің аты М',
    price: 4998.0,
    description: `ISBN: 978-601-7677-32-9
Возраст: 16+
Язык издания: казахский
Переплет: мягкий переплет
Жанр: биографии и мемуары`,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h2d/hb2/84916462878750.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/perizat-myrzahmet-m-rd-aty-m-108340964/?c=750000000',
    likes: 0,
    category: 'Досуг, книги'
  },
  {
    id: 137,
    name: 'Джейн Остин: Тәкаппар ғашықтар',
    price: 5999.0,
    description: `ISBN: 9786018063497
Возраст: 16+
Язык издания: казахский
Переплет: твердый переплет
Жанр: современная мировая проза`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h92/h9f/84916462157854.png?format=preview-large',
    url: 'https://kaspi.kz/shop/p/dzhein-ostin-t-kappar-ashy-tar-105934631/?c=750000000',
    likes: 0,
    category: 'Досуг, книги'
  },
  {
    id: 138,
    name: 'Отпечаток рук для влюбленных 147890',
    price: 2869.0,
    description: `Назначение: для всей семьи
Комплектация: холст, 3 краски (черный, золотой, серебро), кисточка
Размеры холста: 30х24 см
Количество красок: 3`,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h53/h3b/85121626767390.png?format=preview-large',
    url: 'https://kaspi.kz/shop/p/otpechatok-ruk-dlja-vljublennyh-147890-107987498/?c=750000000',
    likes: 0,
    category: 'Досуг, книги'
  },
  {
    id: 139,
    name: 'Стул N-12, 81x50x25 см, белый',
    price: 7389.0,
    description: `Тип: стул
Материал: пластик
Обивка: отсутствует
Жесткость сиденья: высокая
Высота: 81.0 см
Ширина: 50.0 см
Глубина: 25.0 см
Цвет: белый
Страна: Китай`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h59/h3b/63900105277470.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/stul-n-12-81x50x25-sm-belyi-100189414/?c=750000000',
    likes: 0,
    category: 'Мебель'
  },
  {
    id: 140,
    name: 'ЗМИ Вешалка стойка, напольная металл, 63x177 см, Луч 5 черная',
    price: 6934.0,
    description: `Конструкция: стойка, ,напольная
Материал: металл
Количество крючков: 5
Ширина: 63.0 см
Высота: 177.0 см
Цвет: черный`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/he5/h41/64340225916958.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/zmi-veshalka-stoika-napol-naja-metall-63x177-sm-luch-5-chernaja--102471194/?c=750000000',
    likes: 0,
    category: 'Мебель'
  },
  {
    id: 141,
    name: 'Табурет ЗМИ Пенек, 47x46x46 см, серый',
    price: 3115.0,
    description: `Тип: табурет
Материал: металл
Обивка: экокожа
Жесткость сиденья: средняя
Высота: 47.0 см
Ширина: 46.0 см
Глубина: 46.0 см
Цвет: серый
Страна: Россия`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/ha4/haf/63948533432350.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/taburet-zmi-penek-47x46x46-sm-seryi-102981664/?c=750000000',
    likes: 0,
    category: 'Мебель'
  },
  {
    id: 142,
    name: 'Mizam 8902061 диван, обивка ткань, 70x210x75 см, серый',
    price: 57450.0,
    description: `Механизм трансформации: еврокнижка
Обивка: ткань
Комплектация: диван
Высота: 70.0 см
Длина: 210.0 см
Глубина: 75.0 см
Цвет: серый
Страна: Казахстан`,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/he7/h17/64383593971742.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/mizam-8902061-divan-obivka-tkan-70x210x75-sm-seryi-104172973/?c=750000000',
    likes: 0,
    category: 'Мебель'
  },
  {
    id: 143,
    name: 'MSQ premium 02 диван, обивка текстиль, 80x210x75 см, синий',
    price: 52202.0,
    description: `Механизм трансформации: еврокнижка
Обивка: текстиль
Комплектация: диван
Высота: 80.0 см
Длина: 210.0 см
Глубина: 75.0 см
Цвет: синий
Страна: Казахстан`,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/hdf/h51/64448519307294.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/msq-premium-02-divan-obivka-tekstil-80x210x75-sm-sinii-104375942/?c=750000000',
    likes: 0,
    category: 'Мебель'
  },
  {
    id: 144,
    name: 'IMPERIAL Алёна, 120.2x190.5х46.6 см, белый, коричневый',
    price: 49979.0,
    description: `Тип установки: напольный
Материал: ЛДСП
Ширина, см: 120.2
Глубина, см: 46.6
Высота, см: 190.5
Примечание: товар может поставляться в разобранном виде, по поводу сборки уточняйте у продавца
Цвет: белый, ,коричневый
Страна: Россия`,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h7a/hf4/84709365612574.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/imperial-aljona-120-2x190-5h46-6-sm-belyi-korichnevyi-104713427/?c=750000000',
    likes: 0,
    category: 'Мебель'
  },
  {
    id: 145,
    name: 'Сумка багет Amadi 451363 полиуретан, экокожа черный',
    price: 3996.0,
    description: `Тип сумки: сумка багет
Способ ношения: на плече, ,на руке
Материал верха: полиуретан, ,экокожа
Застежка: молния, ,защелка
Для кого: для женщин
Цвет: черный`,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h08/hbe/66762532749342.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/sumka-baget-amadi-451363-poliuretan-ekokozha-chernyi-107989303/?c=750000000',
    likes: 0,
    category: 'Аксессуары'
  },
  {
    id: 146,
    name: 'Барсетка Fashion 557 нейлон черный',
    price: 738.0,
    description: `Тип сумки: барсетка
Способ ношения: на плече, ,через плечо
Материал верха: нейлон
Застежка: молния
Цвет: черный
Для кого: для женщин, ,для мужчин`,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/heb/hf4/64141700825118.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/barsetka-fashion-557-neilon-chernyi-102376597/?c=750000000',
    likes: 0,
    category: 'Аксессуары'
  },
  {
    id: 147,
    name: 'Сумка кросс-боди adn&aru 7770787 экокожа черный',
    price: 1903.0,
    description: `Тип сумки: сумка кросс-боди
Способ ношения: на плече, ,через плечо, ,на руке
Материал верха: экокожа`,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h8d/hd1/79378895896606.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/sumka-kross-bodi-adn-aru-7770787-ekokozha-chernyi-107650763/?c=750000000',
    likes: 0,
    category: 'Аксессуары'
  },
  {
    id: 148,
    name: 'Сумка багет Fashion&Bag RF-07 искусственная кожа черный',
    price: 3190.0,
    description: `Тип сумки: сумка багет
Способ ношения: через плечо, ,на руке
Материал верха: искусственная кожа
Застежка: молния
Для кого: для женщин
Цвет: черный`,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/hbf/h5d/69370978304030.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/sumka-baget-fashion-bag-rf-07-iskusstvennaja-kozha-chernyi-107961860/?c=750000000',
    likes: 0,
    category: 'Аксессуары'
  },
  {
    id: 149,
    name: 'Барсетка nahb6061 полиэстер черный',
    price: 1952.0,
    description: `Тип сумки: барсетка
Способ ношения: на плече, ,через плечо
Материал верха: полиэстер
Застежка: защелка
Цвет: черный
Для кого: для женщин, ,для мужчин`,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h20/h6c/84971817107486.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/barsetka-nahb6061-poliester-chernyi-108728538/?c=750000000',
    likes: 0,
    category: 'Аксессуары'
  },
  {
    id: 150,
    name: 'Сумка кросс-боди Queen handbag 143605559 искусственная кожа, металл, экокожа черный',
    price: 5171.0,
    description: `Тип сумки: сумка кросс-боди
Способ ношения: на плече, ,через плечо, ,на руке, ,в руке`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/hc9/hca/69701062230046.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/sumka-kross-bodi-queen-handbag-143605559-iskusstvennaja-kozha-metall-ekokozha-chernyi-109204987/?c=750000000',
    likes: 0,
    category: 'Аксессуары'
  },
  {
    id: 151,
    name: 'Клубника в шоколаде 25 шт',
    price: 5988.0,
    description: `Повод: универсальный
Назначение: универсальное
Состав композиции: клубника в шоколаде
Упаковка: коробка`,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/hc2/h17/85298005475358.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/klubnika-v-shokolade-25-sht-106219875/?c=750000000',
    likes: 0,
    category: 'Подарки, товары для праздников'
  },
  {
    id: 152,
    name: 'Кафф Fashion Jewelry N бижутерный сплав, бисер',
    price: 1990.0,
    description: `Вид изделия: кафф
Материал: бижутерный сплав
Вставка: бисер
Застежка: гвоздик
Цвет материала: золотистый
Цвет вставки: белый
Примечание: значение веса оттенка на фото и характеристики являются примерными усредненными и могут отличаться от фактических
Для кого: для женщин, ,для детей`,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h4d/hce/64477705502750.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/kaff-fashion-jewelry-n-bizhuternyi-splav-biser-106419414/?c=750000000',
    likes: 0,
    category: 'Подарки, товары для праздников'
  },
  {
    id: 153,
    name: 'Набор Fashion Jewelry N бижутерный сплав, стекло',
    price: 698.0,
    description: `Вид изделия: набор
Материал: бижутерный сплав
Вставка: стекло
Застежка: гвоздик
Цвет материала: мультиколор
Цвет вставки: черный, ,белый, ,зеленый
Примечание: значение веса оттенка на фото и характеристики являются примерными усредненными и могут отличаться от фактических
Для кого: для женщин`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/hb4/h8c/66909111484446.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/nabor-fashion-jewelry-n-bizhuternyi-splav-steklo-108048604/?c=750000000',
    likes: 0,
    category: 'Подарки, товары для праздников'
  },
  {
    id: 154,
    name: '02 мужской набор',
    price: 1999.0,
    description: `Назначение: для мужчины
Тип: мужской набор
Тематика: походы и пикник
Упаковка: коробка
Количество предметов: 3`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h53/h0e/68047450472478.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/02-muzhskoi-nabor-108511550/?c=750000000',
    likes: 0,
    category: 'Подарки, товары для праздников'
  },
  {
    id: 155,
    name: 'Серьги бижутерный сплав, искусственный жемчуг',
    price: 488.0,
    description: `Вид изделия: серьги
Материал: бижутерный сплав
Вставка: искусственный жемчуг
Застежка: гвоздик
Цвет материала: золотистый
Цвет вставки: белый
Примечание: значение веса оттенка на фото и характеристики являются примерными усредненными и могут отличаться от фактических
Для кого: для женщин, ,для детей`,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/hee/hf8/80122203996190.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/ser-gi-bizhuternyi-splav-iskusstvennyi-zhemchug-109905470/?c=750000000',
    likes: 0,
    category: 'Подарки, товары для праздников'
  },
  {
    id: 156,
    name: 'UNO 42003',
    price: 340.0,
    description: `Тип: карточная
Пол: универсальная
Количество игроков: 2, ,10
Минимальный возраст: 7 лет`,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h30/he1/63838700634142.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/uno-42003-10101521/?c=750000000',
    likes: 0,
    category: 'Подарки, товары для праздников'
  },
  {
    id: 157,
    name: 'Серьги бижутерный сплав, без вставок',
    price: 994.0,
    description: `Вид изделия: серьги
Материал: бижутерный сплав
Вставка: без вставок
Застежка: гвоздик
Цвет материала: мультиколор
Цвет вставки: отсутствует
Примечание: значение веса оттенка на фото и характеристики являются примерными усредненными и могут отличаться от фактических`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/hb7/h46/81270775021598.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/ser-gi-bizhuternyi-splav-bez-vstavok-110853997/?c=750000000',
    likes: 0,
    category: 'Украшения'
  },
  {
    id: 158,
    name: 'Кафф Fashion Jewelry N бижутерный сплав, бисер',
    price: 1990.0,
    description: `Вид изделия: кафф
Материал: бижутерный сплав
Вставка: бисер
Застежка: гвоздик
Цвет материала: золотистый
Цвет вставки: белый
Примечание: значение веса оттенка на фото и характеристики являются примерными усредненными и могут отличаться от фактических
Для кого: для женщин, ,для детей`,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h4d/hce/64477705502750.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/kaff-fashion-jewelry-n-bizhuternyi-splav-biser-106419414/?c=750000000',
    likes: 0,
    category: 'Украшения'
  },
  {
    id: 159,
    name: 'Набор Fashion Jewelry N бижутерный сплав, стекло',
    price: 698.0,
    description: `Вид изделия: набор
Материал: бижутерный сплав
Вставка: стекло
Застежка: гвоздик
Цвет материала: мультиколор
Цвет вставки: черный, ,белый, ,зеленый
Примечание: значение веса оттенка на фото и характеристики являются примерными усредненными и могут отличаться от фактических
Для кого: для женщин`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/hb4/h8c/66909111484446.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/nabor-fashion-jewelry-n-bizhuternyi-splav-steklo-108048604/?c=750000000',
    likes: 0,
    category: 'Украшения'
  },
  {
    id: 160,
    name: 'Серьги Fashion Jewelry N бижутерный сплав, титан, стразы, искусственный жемчуг',
    price: 1500.0,
    description: `Вид изделия: серьги
Материал: бижутерный сплав, ,титан
Вставка: стразы, ,искусственный жемчуг
Застежка: гвоздик`,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h25/hce/69489076142110.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/ser-gi-fashion-jewelry-n-bizhuternyi-splav-titan-strazy-iskusstvennyi-zhemchug-109101372/?c=750000000',
    likes: 0,
    category: 'Украшения'
  },
  {
    id: 161,
    name: 'Серьги бижутерный сплав, искусственный жемчуг',
    price: 488.0,
    description: `Вид изделия: серьги
Материал: бижутерный сплав
Вставка: искусственный жемчуг
Застежка: гвоздик
Цвет материала: золотистый
Цвет вставки: белый
Примечание: значение веса оттенка на фото и характеристики являются примерными усредненными и могут отличаться от фактических`,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/hee/hf8/80122203996190.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/ser-gi-bizhuternyi-splav-iskusstvennyi-zhemchug-109905470/?c=750000000',
    likes: 0,
    category: 'Украшения'
  },
  {
    id: 162,
    name: 'Серьги бижутерный сплав, искусственный жемчуг',
    price: 879.0,
    description: `Вид изделия: серьги
Материал: бижутерный сплав
Вставка: искусственный жемчуг
Застежка: гвоздик
Цвет материала: золотистый
Цвет вставки: белый
Примечание: значение веса оттенка на фото и характеристики являются примерными усредненными и могут отличаться от фактических`,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h60/hb8/81270774562846.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/ser-gi-bizhuternyi-splav-iskusstvennyi-zhemchug-110853992/?c=750000000',
    likes: 0,
    category: 'Украшения'
  },
  {
    id: 163,
    name: 'Darling кусочки в соусе говядина 75 г 1 шт',
    price: 149.0,
    description: ``,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h39/h18/84798257594398.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/darling-kusochki-v-souse-govjadina-75-g-1-sht-110583732/?c=750000000',
    likes: 0,
    category: 'Товары для животных'
  },
  {
    id: 164,
    name: 'Felix кусочки в желе лосось 75 г 1 шт',
    price: 115.0,
    description: `Порода: для любой породы
Текстура: кусочки в желе`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h1f/h07/80548097851422.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/felix-kusochki-v-zhele-losos-75-g-1-sht-107945462/?c=750000000',
    likes: 0,
    category: 'Товары для животных'
  },
  {
    id: 165,
    name: 'Felix кусочки в желе говядина 75 г 1 шт',
    price: 115.0,
    description: ``,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h3b/h01/84564384645150.png?format=preview-large',
    url: 'https://kaspi.kz/shop/p/felix-kusochki-v-zhele-govjadina-75-g-1-sht-107965425/?c=750000000',
    likes: 0,
    category: 'Товары для животных'
  },
  {
    id: 166,
    name: 'Darling кусочки в соусе лосось 75 г 1 шт',
    price: 149.0,
    description: ``,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/hf2/h66/84798115971102.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/darling-kusochki-v-souse-losos-75-g-1-sht-110583736/?c=750000000',
    likes: 0,
    category: 'Товары для животных'
  },
  {
    id: 167,
    name: 'Darling кусочки в соусе курица 75 г 1 шт',
    price: 150.0,
    description: ``,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/hb3/h03/84798116298782.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/darling-kusochki-v-souse-kuritsa-75-g-1-sht-110583756/?c=750000000',
    likes: 0,
    category: 'Товары для животных'
  },
  {
    id: 168,
    name: 'Felix кусочки в желе кролик 75 г 1 шт',
    price: 115.0,
    description: ``,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/ha7/he9/80547767648286.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/felix-kusochki-v-zhele-krolik-75-g-1-sht-100218713/?c=750000000',
    likes: 0,
    category: 'Товары для животных'
  },
  {
    id: 169,
    name: 'SV4 бумага, A4, 500 листов, матовое покрытие',
    price: 1650.0,
    description: `Тип: бумага
Тип бумаги: форматная
Назначение: лазерный принтер, ,струйный принтер, ,для рукописных работ
Формат: A4
Фасовка: лист
Количество листов: 500
Покрытие: матовое`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h49/hd2/68782824521758.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/sv4-bumaga-a4-500-listov-matovoe-pokrytie-108810207/?c=750000000',
    likes: 0,
    category: 'Канцелярские товары'
  },
  {
    id: 170,
    name: 'Плёнка для ламинирования А4 100мкм 100шт',
    price: 2882.0,
    description: `Тип: пакетная пленка
Формат: А4
Тип ламинирования: горячее
Покрытие: глянцевое
Антистатический эффект: Нет
Количество в упаковке: 100`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h7c/h2b/64616166195230.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/pljonka-dlja-laminirovanija-a4-100mkm-100sht-107232597/?c=750000000',
    likes: 0,
    category: 'Канцелярские товары'
  },
  {
    id: 171,
    name: 'Ручка шариковая Obama 2810 12 шт, цвет чернил синий',
    price: 301.0,
    description: `Тип ручки: шариковая
Конструкция: неавтоматическая
Цвет чернил: синий
Толщина линии: 1.0 мм
Форма корпуса: круглый
Набор: Нет`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/hc0/hae/64377261031454.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/ruchka-sharikovaja-obama-2810-12-sht-tsvet-chernil-sinii-107217516/?c=750000000',
    likes: 0,
    category: 'Канцелярские товары'
  },
  {
    id: 172,
    name: 'Липучка 51840, ширина 15 мм, 100 пар, белый, прозрачный',
    price: 492.0,
    description: `Тип: канцелярская лента
Ширина: 15.0 мм
Набор: Да
Количество в упаковке: 200`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h79/hdb/64393305358366.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/lipuchka-51840-shirina-15-mm-100-par-belyi-prozrachnyi-107218270/?c=750000000',
    likes: 0,
    category: 'Канцелярские товары'
  },
  {
    id: 173,
    name: 'SvetoCopy Classic бумага, A4, 500 листов, матовое покрытие',
    price: 1800.0,
    description: `Тип: бумага
Тип бумаги: копировальная
Назначение: лазерный принтер, ,струйный принтер
Формат: A4
Фасовка: лист
Количество листов: 500`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h71/h48/63982573649950.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/svetocopy-classic-bumaga-a4-500-listov-matovoe-pokrytie-100843701/?c=750000000',
    likes: 0,
    category: 'Канцелярские товары'
  },
  {
    id: 174,
    name: 'Ручка шариковая Gem GEM 303 12 шт, 0.5 мм, цвет чернил синий',
    price: 711.0,
    description: `Тип ручки: шариковая
Конструкция: неавтоматическая
Цвет чернил: синий
Толщина линии: 0.5 мм
Форма корпуса: круглый
Набор: Да`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h0f/h37/80941620527134.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/ruchka-sharikovaja-gem-gem-303-12-sht-0-5-mm-tsvet-chernil-sinii-105944594/?c=750000000',
    likes: 0,
    category: 'Канцелярские товары'
  },
  {
    id: 175,
    name: 'Кроссовки EuroTrend черный',
    price: 4199.0,
    description: `Модель: кроссовки
Материал верха: текстиль`,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h27/hde/80620062081054.png?format=preview-large',
    url: 'https://kaspi.kz/shop/p/eurotrend-chernyi-10886987b/?c=750000000',
    likes: 0,
    category: 'Обувь'
  },
  {
    id: 176,
    name: 'Кеды DD&OO белый',
    price: 7489.0,
    description: `Модель: кеды
Материал верха: экокожа
Сезон: демисезон
Цвет: белый
Особенности размера: маломерит на 1 размер`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h1a/h30/84930766372894.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/dd-oo-belyi-10790995b/?c=750000000',
    likes: 0,
    category: 'Обувь'
  },
  {
    id: 177,
    name: 'Кроссовки DIAN черный',
    price: 11000.0,
    description: `Модель: кроссовки
Материал верха: искусственная кожа, ,текстиль`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/he6/hd7/84944741531678.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/dian-chernyi-11861085b/?c=750000000',
    likes: 0,
    category: 'Обувь'
  },
  {
    id: 178,
    name: 'Чешки Leosport черный',
    price: 1195.0,
    description: `Модель: чешки
Материал верха: текстиль, ,хлопок
Сезон: круглогодичный
Цвет: черный`,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h09/hbb/80748384616478.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/cheshki-leosport-lbl-chernyi-10133014b/?c=750000000',
    likes: 0,
    category: 'Обувь'
  },
  {
    id: 179,
    name: 'Кроссовки EuroTrend белый',
    price: 4199.0,
    description: `Модель: кроссовки
Материал верха: текстиль`,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h26/h4c/80930064072734.png?format=preview-large',
    url: 'https://kaspi.kz/shop/p/eurotrend-belyi-10808248b/?c=750000000',
    likes: 0,
    category: 'Обувь'
  },
  {
    id: 180,
    name: 'Кроссовки Quanzhou Jinqiu Sports серый',
    price: 4000.0,
    description: `Модель: кроссовки
Материал верха: текстиль
Сезон: демисезон, ,лето
Цвет: серый`,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/hd3/hc8/81097939845150.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/quanzhou-jinqiu-sports-6842-seryi-10777687b/?c=750000000',
    likes: 0,
    category: 'Обувь'
  },
  {
    id: 181,
    name: 'Apple iPhone 15 Pro Max 256Gb серый',
    price: 629559.0,
    description: `Технология NFC: Да
Цвет: серый
Тип экрана: OLED, Super Retina XDR display`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848181790.png?format=preview-large',
    url: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000',
    likes: 0,
    category: 'Телефоны и гаджеты'
  },
  {
    id: 182,
    name: 'Apple 20W USB-C Power Adapter белый',
    price: 2273.0,
    description: `Тип: сетевая зарядка
Количество подключаемых устройств: 1
Быстрая зарядка: Да
Разъем подключения: USB Type-C`,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h95/h0e/63961934823454.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/apple-20w-usb-c-power-adapter-belyi-100984093/?c=750000000',
    likes: 0,
    category: 'Телефоны и гаджеты'
  },
  {
    id: 183,
    name: 'Apple iPhone 13 128Gb Midnight черный',
    price: 291224.0,
    description: `Технология NFC: Да
Цвет: черный
Тип экрана: OLED, Super Retina XDR
Диагональ: 6.1 дюйм`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000',
    likes: 0,
    category: 'Телефоны и гаджеты'
  },
  {
    id: 184,
    name: 'Apple iPhone 15 128Gb черный',
    price: 387790.0,
    description: `Технология NFC: Да
Цвет: черный
Тип экрана: OLED, Super Retina XDR display`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/he2/h1d/83559338442782.png?format=preview-large',
    url: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000',
    likes: 0,
    category: 'Телефоны и гаджеты'
  },
  {
    id: 185,
    name: 'Apple iPhone 15 Pro 256Gb серый',
    price: 579999.0,
    description: `Технология NFC: Да
Цвет: серый
Тип экрана: OLED, Super Retina XDR display`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/hae/h00/83559620739102.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-256gb-seryi-113138213/?c=750000000',
    likes: 0,
    category: 'Телефоны и гаджеты'
  },
  {
    id: 186,
    name: 'Apple iPhone 11 128Gb Slim Box черный',
    price: 237251.0,
    description: `Технология NFC: Да
Цвет: черный
Тип экрана: сенсорный мультитач цветной IPS, Liquid Retina HD`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/hd8/hac/63897052413982.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-chernyi-100692388/?c=750000000',
    likes: 0,
    category: 'Телефоны и гаджеты'
  },
  {
    id: 187,
    name: 'Generic SF-400',
    price: 860.0,
    description: `Тип: электронные
Предел взвешивания: 10.0 кг
Точность измерения: 1.0 г
Счетчик калорий: Да
Цвет: белый`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h47/ha1/64094073815070.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/generic-sf-400-102531445/?c=750000000',
    likes: 0,
    category: 'Бытовая техника'
  },
  {
    id: 188,
    name: 'Электрочайник BEREKE BR-810 серый',
    price: 1900.0,
    description: `Фильтр от накипи: Нет
Тип: электрочайник
Объем: 2.0 л
Мощность: 1500.0 Вт
Материал корпуса: нержавеющая сталь
Цвет: серый`,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h08/hde/80282292781086.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/elektrochainik-bereke-br-810-seryi-109981423/?c=750000000',
    likes: 0,
    category: 'Бытовая техника'
  },
  {
    id: 189,
    name: 'Deerma DX700 белый',
    price: 17313.0,
    description: `Тип: вертикальный
Уборка: сухая
Тип пылесборника: циклонный фильтр
Потребляемая мощность: 600.0 Вт
Источник питания: сеть
Цвет: белый`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/hdb/h2f/63803859566622.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/deerma-dx700-belyi-3701383/?c=750000000',
    likes: 0,
    category: 'Бытовая техника'
  },
  {
    id: 190,
    name: 'SM-7700 серебристый',
    price: 9990.0,
    description: `Тип: стационарный
Мощность: 1000.0 Вт
Управление: механическое
Количество скоростей: 3
Измельчитель: Да
Цвет: серебристый`,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h78/he6/81315957440542.png?format=preview-large',
    url: 'https://kaspi.kz/shop/p/sm-7700-serebristyi-110902818/?c=750000000',
    likes: 0,
    category: 'Бытовая техника'
  },
  {
    id: 191,
    name: 'Samsung VCC4520S3R/XEV красный',
    price: 32159.0,
    description: `Тип: традиционный
Уборка: сухая
Тип пылесборника: циклонный фильтр
Потребляемая мощность: 1600.0 Вт
Источник питания: сеть
Цвет: красный`,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/heb/h01/63769265045534.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/samsung-vcc4520s3r-xev-krasnyi-3700926/?c=750000000',
    likes: 0,
    category: 'Бытовая техника'
  },
  {
    id: 192,
    name: 'Погружной Slaouwo HB-2075 белый',
    price: 8398.0,
    description: `Тип: погружной
Мощность: 800.0 Вт
Управление: электронное
Количество скоростей: 6
Измельчитель: Да
Цвет: белый`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/hfe/ha1/67141660606494.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/pogruzhnoi-slaouwo-hb-2075-belyi-108151055/?c=750000000',
    likes: 0,
    category: 'Бытовая техника'
  },
  {
    id: 193,
    name: 'TWS F9-5 черные',
    price: 1968.0,
    description: `Тип: гарнитура
Вид: внутриканальные
Подключение: беспроводное
Тип акустического оформления: полуоткрытые
Тип крепления: без крепления`,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/hf8/hcc/64254215946270.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/tws-f9-5-chernye-101769530/?c=750000000',
    likes: 0,
    category: 'ТВ, Аудио, Видео'
  },
  {
    id: 194,
    name: 'Apple AirPods 3 белый',
    price: 82998.0,
    description: `Тип: гарнитура
Вид: внутриканальные
Подключение: беспроводное
Тип акустического оформления: открытые
Тип крепления: без крепления
Система активного шумоподавления: Нет
Микрофон: Да`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/hda/hc7/64341967994910.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/apple-airpods-3-belyi-102667744/?c=750000000',
    likes: 0,
    category: 'ТВ, Аудио, Видео'
  },
  {
    id: 195,
    name: 'Apple AirPods 3 with Lightning Charging Case белый',
    price: 83882.0,
    description: `Тип: гарнитура
Вид: внутриканальные
Подключение: беспроводное
Тип акустического оформления: открытые
Тип крепления: без крепления
Система активного шумоподавления: Нет
Микрофон: Да`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h31/hd7/64362668556318.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/apple-airpods-3-with-lightning-charging-case-belyi-106667987/?c=750000000',
    likes: 0,
    category: 'ТВ, Аудио, Видео'
  },
  {
    id: 196,
    name: 'Apple AirPods Pro 2nd generation with Wireless MagSafe Charging Case белый',
    price: 108699.0,
    description: `Тип: наушники
Вид: внутриканальные
Подключение: беспроводное
Тип акустического оформления: закрытые`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/?c=750000000',
    likes: 0,
    category: 'ТВ, Аудио, Видео'
  },
  {
    id: 197,
    name: 'Apple AirPods 2nd generation белый',
    price: 50958.0,
    description: `Тип: гарнитура
Вид: внутриканальные
Подключение: беспроводное
Тип акустического оформления: открытые
Тип крепления: без крепления
Система активного шумоподавления: Нет
Микрофон: Да`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h12/hc8/84594232688670.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/apple-airpods-2nd-generation-belyi-114927908/?c=750000000',
    likes: 0,
    category: 'ТВ, Аудио, Видео'
  },
  {
    id: 198,
    name: 'Apple AirPods with Charging Case белый',
    price: 49901.0,
    description: `Тип: гарнитура
Вид: внутриканальные
Подключение: беспроводное
Тип акустического оформления: открытые
Тип крепления: без крепления
Система активного шумоподавления: Нет
Микрофон: Да`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/hbc/h5a/63761265426462.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/apple-airpods-with-charging-case-belyi-4804056/?c=750000000',
    likes: 0,
    category: 'ТВ, Аудио, Видео'
  },
  {
    id: 199,
    name: 'LS Pro черный',
    price: 1099.0,
    description: `Тип сенсора: оптическая светодиодная
Тип подключения: беспроводная
Интерфейс: Bluetooth, ,радиоканал
Дизайн: для правой и левой руки
Игровая: Нет
Разрешение оптического сенсора: 1600.0 dpi`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h2f/h61/82393746636830.png?format=preview-large',
    url: 'https://kaspi.kz/shop/p/ls-pro-chernyi-107622516/?c=750000000',
    likes: 0,
    category: 'Компьютеры'
  },
  {
    id: 200,
    name: 'Logitech G102 Lightsync черный',
    price: 9709.0,
    description: `Тип сенсора: оптическая светодиодная
Тип подключения: проводная
Интерфейс: USB
Дизайн: для правой руки
Игровая: Да
Разрешение оптического сенсора: 8000.0 dpi
Количество программируемых клавиш: 6`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/hb2/hc2/64119540187166.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/logitech-g102-lightsync-chernyi-100956618/?c=750000000',
    likes: 0,
    category: 'Компьютеры'
  },
  {
    id: 201,
    name: 'Wi-Fi роутер TELE2 5G H155-380',
    price: 32897.0,
    description: `Тип: Wi-Fi роутер
Максимальная скорость беспроводного соединения: 1024.0 Мбит/с
Стандарты Wi-Fi: Wi-Fi 5 (802.11ac)
Количество LAN портов: 2
Диапазоны частот: 2.4 ГГц, ,5 ГГц`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h52/h70/84057077645342.png?format=preview-large',
    url: 'https://kaspi.kz/shop/p/wi-fi-router-tele2-5g-h155-380-113565384/?c=750000000',
    likes: 0,
    category: 'Компьютеры'
  },
  {
    id: 202,
    name: 'Wi-Fi роутер ALTEL 5G H155-380',
    price: 32000.0,
    description: `Тип: Wi-Fi роутер
Максимальная скорость беспроводного соединения: 1024.0 Мбит/с
Стандарты Wi-Fi: Wi-Fi 6 (802.11ax)
Количество LAN портов: 2
Диапазоны частот: 2.4 ГГц, ,5 ГГц`,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h43/hce/84100622680094.png?format=preview-large',
    url: 'https://kaspi.kz/shop/p/wi-fi-router-altel-5g-h155-380-113639162/?c=750000000',
    likes: 0,
    category: 'Компьютеры'
  },
  {
    id: 203,
    name: 'Wi-Fi роутер Xiaomi Mi Wi-Fi Router 4A Gigabit Edition',
    price: 11345.0,
    description: `Тип: Wi-Fi роутер
Максимальная скорость беспроводного соединения: 1167.0 Мбит/с
Стандарты Wi-Fi: Wi-Fi 4 (802.11n), ,Wi-Fi 5 (802.11ac)
Количество LAN портов: 2
Диапазоны частот: 2.4 ГГц, ,5 ГГц`,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h9e/ha1/63832974196766.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/wi-fi-router-xiaomi-mi-wi-fi-router-4a-gigabit-edition-100044713/?c=750000000',
    likes: 0,
    category: 'Компьютеры'
  },
  {
    id: 204,
    name: 'Wi-Fi роутер TP-LINK Archer C80',
    price: 25832.0,
    description: `Тип: Wi-Fi роутер
Максимальная скорость беспроводного соединения: 1900.0 Мбит/с
Стандарты Wi-Fi: Wi-Fi 4 (802.11n), ,Wi-Fi 5 (802.11ac)
Количество LAN портов: 4
Диапазоны частот: 2.4 ГГц, ,5 ГГц`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h13/h0f/63885265829918.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/wi-fi-router-tp-link-archer-c80-100663389/?c=750000000',
    likes: 0,
    category: 'Компьютеры'
  },
  {
    id: 205,
    name: 'Бумажные салфетки Карина DOSTYQ 200 шт',
    price: 346.0,
    description: `Количество в пачке, шт: 200
Тип: бумажные салфетки
Упаковка: пакет
Материал: бумага
Цвет: белый`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h4f/ha5/85102499397662.png?format=preview-large',
    url: 'https://kaspi.kz/shop/p/bumazhnye-salfetki-karina-dostyq-200-sht-110230386/?c=750000000',
    likes: 0,
    category: 'Товары для дома'
  },
  {
    id: 206,
    name: 'Papia туалетная бумага 3-слойный 32 шт, первичная целлюлоза',
    price: 4790.0,
    description: `Тип: туалетная бумага
Вид: рулонный
Количество в упаковке: 32
Материал: первичная целлюлоза`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h0c/h5c/64378069090334.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/papia-tualetnaja-bumaga-3-sloinyi-32-sht-pervichnaja-tselljuloza-102650292/?c=750000000',
    likes: 0,
    category: 'Товары для дома'
  },
  {
    id: 207,
    name: 'Мелочи жизни Пчелки крупнопористые 5 шт',
    price: 579.0,
    description: `Материал: поролон
Тип: губка
Назначение: для пола, ,для посуды, ,для сантехники`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h0f/h08/64074314645534.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/melochi-zhizni-pchelki-krupnoporistye-5-sht-101607499/?c=750000000',
    likes: 0,
    category: 'Товары для дома'
  },
  {
    id: 208,
    name: 'Карина туалетная бумага двух-слойный 8 шт, первичная целлюлоза',
    price: 1110.0,
    description: `Тип: туалетная бумага
Вид: рулонный
Количество в упаковке: 8
Материал: первичная целлюлоза`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/hbf/h4b/64319883477022.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/karina-tualetnaja-bumaga-dvuh-sloinyi-8-sht-pervichnaja-tselljuloza-101671250/?c=750000000',
    likes: 0,
    category: 'Товары для дома'
  },
  {
    id: 209,
    name: 'Карина туалетная бумага 2-слойный 12 шт, вторичная целлюлоза',
    price: 1662.0,
    description: `Тип: туалетная бумага
Вид: рулонный
Количество в упаковке: 12
Материал: вторичная целлюлоза`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h66/h78/64534893395998.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/karina-tualetnaja-bumaga-2-sloinyi-12-sht-vtorichnaja-tselljuloza-104962569/?c=750000000',
    likes: 0,
    category: 'Товары для дома'
  },
  {
    id: 210,
    name: 'Бумажные полотенца Papia 181239 4 шт',
    price: 1625.0,
    description: `Количество в пачке, шт: 4
Тип: бумажные полотенца
Упаковка: пакет
Материал: бумага
Цвет: белый`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/hdb/hb9/84610968682526.png?format=preview-large',
    url: 'https://kaspi.kz/shop/p/bumazhnye-polotentsa-papia-181239-4-sht-101752032/?c=750000000',
    likes: 0,
    category: 'Товары для дома'
  },
  {
    id: 211,
    name: 'SPLAT зубная паста Отбеливание Плюс 100 мл',
    price: 950.0,
    description: `Тип: зубная паста
Вкус: мятный, ,нейтральный
Объем, мл/Вес, г: 100 мл`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/ha5/hdf/63847123779614.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/splat-zubnaja-pasta-otbelivanie-pljus-100-ml-100194785/?c=750000000',
    likes: 0,
    category: 'Красота и здоровье'
  },
  {
    id: 212,
    name: 'SPLAT зубная паста Биокальций 100 мл',
    price: 950.0,
    description: `Тип: зубная паста
Вкус: нейтральный
Объем, мл/Вес, г: 100 мл`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/hbb/hd5/63847124205598.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/splat-zubnaja-pasta-biokal-tsii-100-ml-100194771/?c=750000000',
    likes: 0,
    category: 'Красота и здоровье'
  },
  {
    id: 213,
    name: 'Bella ватные палочки Cotton 160 шт',
    price: 369.0,
    description: `Тип: ватные палочки
Для детей: Нет
Количество: 160
Тип кожи: для всех типов кожи
Страна производства: Польша`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h73/hf8/84637755080734.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/bella-vatnye-palochki-cotton-160-sht-100224758/?c=750000000',
    likes: 0,
    category: 'Красота и здоровье'
  },
  {
    id: 214,
    name: 'Bella прокладки ежедневные Panty Soft 60 шт',
    price: 985.0,
    description: `Тип: прокладки ежедневные
Количество в упаковке: 60
Число капель: 2
Страна производства: Польша`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h09/hdd/84933684002846.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/bella-prokladki-ezhednevnye-panty-soft-60-sht-100901970/?c=750000000',
    likes: 0,
    category: 'Красота и здоровье'
  },
  {
    id: 215,
    name: 'Bella ватные диски Cotton 120 шт',
    price: 469.0,
    description: `Тип: ватные диски
Для детей: Нет`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h15/hce/63887012495390.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/bella-vatnye-diski-cotton-120-sht-100224746/?c=750000000',
    likes: 0,
    category: 'Красота и здоровье'
  },
  {
    id: 216,
    name: 'Kotex Ultra Normal прокладки 10 шт',
    price: 674.0,
    description: `Тип: прокладки
Количество в упаковке: 10
Число капель: 4
Страна производства: Россия`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h6e/hf6/83144442642462.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/kotex-ultra-normal-prokladki-10-sht-100931867/?c=750000000',
    likes: 0,
    category: 'Красота и здоровье'
  },
  {
    id: 217,
    name: 'ФрутоНяня Яблоко-Банан-Клубника 90 г',
    price: 377.0,
    description: `Тип: многокомпонентное
Добавки: йогурт
Компоненты: фрукты
Минимальный возраст: 7 месяцев`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h36/hf0/64024145166366.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/frutonjanja-jabloko-banan-klubnika-90-g-101048221/?c=750000000',
    likes: 0,
    category: 'Детские товары'
  },
  {
    id: 218,
    name: 'Агуша Яблоко-клубника-малина 90 г',
    price: 355.0,
    description: `Тип: многокомпонентное
Добавки: без добавки
Компоненты: фрукты
Минимальный возраст: 6 месяцев`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h53/hc1/63957671575582.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/agusha-jabloko-klubnika-malina-90-g-100623509/?c=750000000',
    likes: 0,
    category: 'Детские товары'
  },
  {
    id: 219,
    name: 'ФрутоНяня Яблоко-банан-творог 6 мес+ 90 г',
    price: 239.0,
    description: `Тип: многокомпонентное
Добавки: творог
Компоненты: фрукты
Минимальный возраст: 6 месяцев`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/hac/h4f/84933630459934.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/frutonjanja-jabloko-banan-tvorog-6-mes-90-g-100975502/?c=750000000',
    likes: 0,
    category: 'Детские товары'
  },
  {
    id: 220,
    name: 'ФрутоНяня Яблоко-малина-творог 90 г',
    price: 375.0,
    description: `Тип: многокомпонентное
Добавки: творог
Компоненты: фрукты
Минимальный возраст: 6 месяцев`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h1b/h02/64234829545502.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/frutonjanja-jabloko-malina-tvorog-90-g-101049014/?c=750000000',
    likes: 0,
    category: 'Детские товары'
  },
  {
    id: 221,
    name: 'Агуша Яблоко 90 г',
    price: 390.0,
    description: `Тип: однокомпонентное
Добавки: без добавки
Компоненты: фрукты
Минимальный возраст: 4 месяца`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h35/h62/63957235138590.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/agusha-jabloko-90-g-100621391/?c=750000000',
    likes: 0,
    category: 'Детские товары'
  },
  {
    id: 222,
    name: 'Агуша Яблоко-малина-шиповник 90 г',
    price: 355.0,
    description: `Тип: многокомпонентное
Компоненты: фрукты
Минимальный возраст: 5 месяцев`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h94/h56/63957144797214.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/agusha-jabloko-malina-shipovnik-90-g-100623523/?c=750000000',
    likes: 0,
    category: 'Детские товары'
  },
  {
    id: 223,
    name: 'Цитрамон П таблетки 240 мг 10 шт',
    price: 147.0,
    description: `Назначение: воспаления
Антибиотик: Нет
Рецептурный препарат: Нет
Действующее вещество: ацетилсалициловая кислота
Условия отпуска: без рецепта
Способ применения: пероральный
Лекарственная форма: таблетки
Возрастные ограничения: с 18 лет
Дозировка: 240 мг
Страна производитель: Россия`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h46/hc1/63963912962078.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/tsitramon-p-tabletki-240-mg-10-sht-100979731/?c=750000000',
    likes: 0,
    category: 'Аптека'
  },
  {
    id: 224,
    name: '21st Century минерал Calcium Magnesium Zinc + D3 90 таблеток',
    price: 3773.0,
    description: `Тип: минерально-витаминный комплекс
Назначение: для укрепления костей
Для кого: универсальные
Регистрационный статус: не является лекарственным средством
Область применения: витамин D3
Страна производитель: США
Количество штук в упаковке: 90
Форма выпуска: таблетки`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h7b/h32/64006498877470.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/21st-century-mineral-calcium-magnesium-zinc-d3-90-tabletok-100505310/?c=750000000',
    likes: 0,
    category: 'Аптека'
  },
  {
    id: 225,
    name: 'California Gold Nutrition Омега 3, 100 капсул Omega-3 Premium Fish Oil',
    price: 3698.0,
    description: `Тип: витамин
Назначение: для улучшения состояния кожи
Для кого: универсальные
Регистрационный статус: не является лекарственным средством
Область применения: кожа волосы ногти
Страна производитель: США
Количество штук в упаковке: 100
Форма выпуска: капсулы`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h0f/hd1/63863964336158.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/california-gold-nutrition-omega-3-100-kapsul-omega-3-premium-fish-oil-100638544/?c=750000000',
    likes: 0,
    category: 'Аптека'
  },
  {
    id: 226,
    name: 'Пластырь 10 шт стерильно',
    price: 144.0,
    description: `Тип: пластырь
Количество в упаковке: 10
Стерильность: стерильно
Страна производитель: Пакистан`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h18/hf1/64236580372510.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/plastyr-10-sht-steril-no-102531160/?c=750000000',
    likes: 0,
    category: 'Аптека'
  },
  {
    id: 227,
    name: 'Мукалтин таблетки 50 мг 10 шт',
    price: 205.0,
    description: `Назначение: отхаркивающие, ,препараты от кашля
Антибиотик: Нет
Рецептурный препарат: Нет
Действующее вещество: экстракт из корней алтея лекарственного
Условия отпуска: без рецепта
Способ применения: пероральный
Лекарственная форма: таблетки
Возрастные ограничения: с 6 лет`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/hd3/h1c/83678055694366.png?format=preview-large',
    url: 'https://kaspi.kz/shop/p/mukaltin-tabletki-50-mg-10-sht-100990373/?c=750000000',
    likes: 0,
    category: 'Аптека'
  },
  {
    id: 228,
    name: 'Терафлю порошок 325 мг 10 шт',
    price: 2093.0,
    description: `Назначение: жаропонижающие
Антибиотик: Нет
Рецептурный препарат: Нет
Действующее вещество: парацетамол
Условия отпуска: без рецепта
Способ применения: пероральный
Лекарственная форма: порошок
Возрастные ограничения: с 18 лет
Дозировка: 325 мг
Страна производитель: Швейцария`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/heb/hf3/64143706423326.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/teraflju-poroshok-325-mg-10-sht-101114328/?c=750000000',
    likes: 0,
    category: 'Аптека'
  },
  {
    id: 229,
    name: 'Автомобильная визитка AVTOCHEHLY.KZ 2107221439 черный',
    price: 237.0,
    description: `Способ крепления: двухсторонний скотч
Место установки: приборная панель
Материал: пластик
Цвет: черный`,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/ha2/h5a/64527256748062.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/avtomobil-naja-vizitka-avtochehly-kz-2107221439-chernyi-105726714/?c=750000000',
    likes: 0,
    category: 'Автотовары'
  },
  {
    id: 230,
    name: 'FOXSUR зарядное устройство FBC122408D',
    price: 8689.0,
    description: `Тип: зарядное устройство
Напряжение АКБ: 12/24 В
Максимальный ток пуска: 8.0 А
Особенности: автоматическая зарядка, ,автоматическое отключение зарядки, ,защита от перегрева, ,защита от перегрузок и короткого замыкания, ,ЖК-экран`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h45/h59/65076168294430.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/foxsur-zarjadnoe-ustroistvo-fbc122408d-105391486/?c=750000000',
    likes: 0,
    category: 'Автотовары'
  },
  {
    id: 231,
    name: 'Автомобильная визитка Perfeo 105987 черный',
    price: 199.0,
    description: `Способ крепления: двухсторонний скотч
Место установки: приборная панель
Материал: пластик
Цвет: черный`,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h45/h85/64439780671518.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/avtomobil-naja-vizitka-perfeo-105987-chernyi-104530784/?c=750000000',
    likes: 0,
    category: 'Автотовары'
  },
  {
    id: 232,
    name: 'RoHS ароматизатор жидкий 690574 Silver 5 мл',
    price: 1544.0,
    description: `Вид: жидкий
Тип: ароматизатор
Размещение: приборная панель, ,универсальный
Аромат: специальный, ,природный, ,фруктовый, ,цветочный, ,цитрусовый, ,древесный`,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h8d/h0a/65044617953310.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/rohs-aromatizator-zhidkii-690574-silver-5-ml-105666568/?c=750000000',
    likes: 0,
    category: 'Автотовары'
  },
  {
    id: 233,
    name: 'FOXSUR зарядное устройство FBC1205D-12V',
    price: 4696.0,
    description: `Тип: зарядное устройство
Напряжение АКБ: 12 В
Максимальная емкость АКБ: 100.0 Ач
Минимальный ток заряда: 1.0 А
Максимальный ток заряда: 5.0 А
Особенности: автоматическая зарядка, ,встроенный амперметр, ,автоматическое отключение зарядки, ,защита от перегрева, ,защита от перегрузок и короткого замыкания, ,ЖК-экран, ,защита от неправильного подключения, ,защита от короткого замыкания, ,защита от перегрузки`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/hb7/he9/64517079728158.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/foxsur-zarjadnoe-ustroistvo-fbc1205d-12v-105870726/?c=750000000',
    likes: 0,
    category: 'Автотовары'
  },
  {
    id: 234,
    name: 'SX салфетка 137753 1 шт',
    price: 316.0,
    description: `Тип: салфетка
Материал: микрофибра
Назначение: впитывание влаги, ,очистка поверхности
Место применения: колесные диски, ,кузов, ,стекла, ,фары, ,салон
Количество в упаковке: 1`,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h38/h6f/64512767328286.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/sx-salfetka-137753-1-sht-105882014/?c=750000000',
    likes: 0,
    category: 'Автотовары'
  },
  {
    id: 235,
    name: 'Набор гантелей разборная 615689 2 шт 20 кг',
    price: 9200.0,
    description: `Тип: набор гантелей
Конструкция: разборная
Максимальный вес гантели: 10.0 кг
Фиксаторы дисков: гайка`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h64/ha1/84053922709534.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/nabor-gantelei-razbornaja-615689-2-sht-20-kg-113564088/?c=750000000',
    likes: 0,
    category: 'Спорт, туризм'
  },
  {
    id: 236,
    name: 'Maxler 100% Golden Creatine 300 г',
    price: 11940.0,
    description: `Тип: креатин
Форма выпуска: порошок
Упаковка: банка`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h63/h50/63758370701342.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/maxler-100-golden-creatine-300-g-29502177/?c=750000000',
    likes: 0,
    category: 'Спорт, туризм'
  },
  {
    id: 237,
    name: '270620 черный',
    price: 598.0,
    description: `Тип: складной нож
Материал лезвия: нержавеющая сталь
Инструменты (функции): нож
Длина клинка: 70.0 мм
Длина рукояти: 8.0 мм`,
    rating: 4.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h89/he3/64484477239326.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/270620-chernyi-106285688/?c=750000000',
    likes: 0,
    category: 'Спорт, туризм'
  },
  {
    id: 238,
    name: 'Qazprotein Creatine Monohydrate 300 г',
    price: 7940.0,
    description: `Форма выпуска: порошок
Тип: креатин
Упаковка: банка`,
    rating: 4.5,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h44/h4f/84531796934686.png?format=preview-large',
    url: 'https://kaspi.kz/shop/p/qazprotein-creatine-monohydrate-300-g-100388127/?c=750000000',
    likes: 0,
    category: 'Спорт, туризм'
  },
  {
    id: 239,
    name: 'Yoga Mat А910-020 183x61x0.6 синий',
    price: 2490.0,
    description: `Назначение: для фитнеса, ,для йоги, ,для тренажеров
Длина: 183.0 см
Материал: TPE`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h50/h3c/64325304090654.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/yoga-mat-a910-020-183x61x0-6-sinii-101663624/?c=750000000',
    likes: 0,
    category: 'Спорт, туризм'
  },
  {
    id: 240,
    name: 'KARBI 100804 черный',
    price: 1862.0,
    description: `Назначение: ручной
Источник света: светодиоды
Материал корпуса: алюминий`,
    rating: 5.0,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/he5/hd4/64833713930270.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/karbi-100804-chernyi-103644870/?c=750000000',
    likes: 0,
    category: 'Спорт, туризм'
  },
];

