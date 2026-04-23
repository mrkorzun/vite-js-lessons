// ==== TASK 1: Tech Store "Search & Sort" ====
//

// Дані для перевірки:
const gadgets = [
  {
    id: 1,
    name: 'iPhone 15',
    price: 35000,
    category: 'smartphones',
    tags: ['new', 'in-stock'],
  },
  {
    id: 2,
    name: 'Samsung S23',
    price: 30000,
    category: 'smartphones',
    tags: ['sale', 'in-stock'],
  },
  {
    id: 3,
    name: 'MacBook Pro',
    price: 70000,
    category: 'laptops',
    tags: ['in-stock'],
  },
  {
    id: 4,
    name: 'Asus ZenBook',
    price: 45000,
    category: 'laptops',
    tags: ['out-of-stock'],
  },
  {
    id: 5,
    name: 'iPad Air',
    price: 25000,
    category: 'tablets',
    tags: ['in-stock'],
  },
  {
    id: 6,
    name: 'Simens',
    price: 19000,
    category: 'smartphones',
    tags: ['old', 'out-of-stock'],
  },
];
// Уяви, що ти розробляєш частину функціонала для інтернет-магазину гаджетів.
// Користувач вибирає категорію товарів і хоче бачити їх у порядку спадання ціни.

// ТЗ:
// 1. Напиши функцію getAvailableProducts(products, categoryName), яка:
//    - фільтрує масив, залишаючи товари лише заданої категорії (category)
//    - за допомогою includes перевіряє, чи є товар у наявності (поле tags містить рядок "in-stock")
// 2. Напиши функцію sortProductsByPrice(products), яка:
//    - повертає новий масив, відсортований від найдорожчого до найдешевшого
//
// У розв'язку обов'язково використай: filter, includes, toSorted.
//

// const getAvailableProducts = (products, categoryName, tag) => {
//   return products.filter(
//     product => product.category === categoryName && product.tags.includes(tag)
//   );
// };

// const sortProductsByPrice = products =>
//   products.toSorted((a, b) => b.price - a.price);

// // Очікуваний результат для (gadgets, "smartphones"):
// // Масив з iPhone 15 та Samsung S23, відсортований за ціною.

// // 1. Перевірка фільтрації та наявності (смартфони в наявності)
// console.log('--- Тест 1 (Smartphones in-stock) ---');
// const inStock = getAvailableProducts(gadgets, 'smartphones', 'new');
// console.log(inStock);
// // Очікуємо: iPhone 15 та Samsung S23 (Asus та інші не мають потрапити)

// // 2. Перевірка сортування за ціною (від найдорожчого)
// console.log('--- Тест 2 (Sorting by Price) ---');
// console.log(sortProductsByPrice(inStock));
// // Очікуємо: iPhone 15 (35000) має бути ПЕРШИМ, Samsung (30000) - ДРУГИМ

// ==== TASK 2: Tech Store "Revenue Calculator" ====
//
// Магазину потрібно знати, яку суму він отримає, якщо продасть усі товари
// певної категорії, які є в наявності.
//
// ТЗ:
// 1. Створи функцію calculateCategoryRevenue(products, categoryName), яка:
//    - Використовує твою попередню логіку для вибору товарів (категорія + "in-stock")
//    - За допомогою reduce рахує загальну суму цін (price) цих товарів.
//

// 2. Створи функцію getPremiumLabels(products, categoryName), яка:
//    - Вибирає доступні товари категорії.
//    - За допомогою map повертає масив рядків у форматі: "PREMIUM: [Назва товару] - [Ціна]грн"

// const calculateCategoryRevenue = (products, categoryName) =>
//   products
//     .filter(
//       product =>
//         product.category === categoryName && product.tags.includes('in-stock')
//     )
//     .map(product => product.price)
//     .reduce((total, price) => total + price, 0);

// const getPremiumLabels = (products, categoryName) =>
//   products
//     .filter(
//       product =>
//         product.category === categoryName && product.tags.includes('in-stock')
//     )
//     .map(product => `PREMIUM: ${product.name} - ${product.price} грн`);

// // Очікувані перевірки:
// // 1. Загальний баланс смартфонів у наявності
// console.log(calculateCategoryRevenue(gadgets, 'smartphones'));
// // Має бути: 65000 (35000 + 30000)

// // 2. Список преміум-товарів для ноутбуків
// console.log(getPremiumLabels(gadgets, 'laptops'));
// // Має бути: ["PREMIUM: MacBook Pro - 70000грн"] (бо Asus не в наявності)

// ==== TASK 3: The Final Boss (Context & Reusability) ====
//
// Тепер ми переходимо до теми, яка часто зустрічається в 06 модулі, але ми почнемо
// "пристрілюватися" вже зараз. Це контекст (this).
//
// Уяви, що в нас є об'єкт "Магазин", який має свій брендбук (формат банера).
// Нам потрібно, щоб метод формування преміум-ярлика міг використовувати дані магазину.
//
// ТЗ:
// 1. Створи об'єкт brandStore.
// 2. Додай йому властивість prefix: "SUPER-TECH".
// 3. Додай йому метод formatLabel(product), який повертає рядок:
//    "[this.prefix]: [product.name] лише за [product.price]!"
// 4. Напиши функцію generateStoreBanners(products, categoryName, formattingCallback).
//    Ця функція має:
//    - Відфільтрувати товари (категорія + "in-stock")
//    - Використати .map(), але замість того, щоб писати логіку формування рядка всередині,
//      вона має викликати formattingCallback для кожного товару.
//
// Важливий момент:
// Коли ти будеш передавати brandStore.formatLabel як callback у map, контекст this може "загубитися".
// Тобі треба буде його "прив'язати".
//
// Дані для перевірки:
// const brandStore = {
//   prefix: 'SUPER-TECH',
//   formatLabel(product) {
//     return `${this.prefix}: ${product.name} лише за ${product.price}!`;
//   },
// };

// const generateStoreBanners = (products, categoryName, сallback) =>
//   products
//     .filter(
//       product =>
//         product.category === categoryName && product.tags.includes('in-stock')
//     )
//     .map(product => сallback(product));

// // Твій виклик має виглядати приблизно так:
// console.log(
//   generateStoreBanners(
//     gadgets,
//     'smartphones',
//     brandStore.formatLabel.bind(brandStore)
//   )
// );
