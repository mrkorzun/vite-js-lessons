// Магазин і знижки

// Інтернет-магазин запускає акцію.
// Потрібно перерахувати ціни товарів і підготувати їх для відображення.

// Твоя задача:

// Напиши функцію getSaleProducts(products).

// Для кожного товару:

// збережи стару ціну oldPrice
// порахуй нову ціну newPrice з урахуванням discount
// додай isExpensive — true, якщо нова ціна > 10000
// Використай:
// map
// стрілочні функції
/*
const products = [
  { name: 'Phone', price: 12000, discount: 10 },
  // { name: "Phone", oldPrice: 12000, newPrice: 10800, isExpensive: true }
  { name: 'Mouse', price: 800, discount: 5 },
];

// varian 1
// const getSaleProducts = products => {
//     return products.map(({ name, price, discount }) => ({
//         name,
//         oldPrice: price,
//         newPrice: price * discount / 100,
//         isExpensive:
//   })
// };

// variant 2
function getSaleProducts(products) {
  return products.map(products => {
    console.log(this);
    const newPrice =
      products.price - (products.price * products.discount) / 100;
    const isExpensive = newPrice > 10000;
    return {
      name: products.name,
      oldPrice: products.price,
      newPrice,
      isExpensive,
    };
  });
}
*/
// console.log(getSaleProducts(products));
// [
//   { name: "Phone", oldPrice: 12000, newPrice: 10800, isExpensive: true },
//   { name: "Mouse", oldPrice: 800, newPrice: 760, isExpensive: false }
// ]
/*
function addOverNum(value, ...args) {
  let totalSum = 0;
  for (const sum of args) {
    if (totalSum < value) {
      totalSum += sum;
    }
    return totalSum;
  }
}

console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
console.log(addOverNum(15, 32, 6, 13, 19, 8));
*/

// ===== TASK 2 ======
// Каталог акційних товарів для банера
// Маркетолог хоче сформувати список товарів для акційного банера.
// Туди мають потрапити лише товари, у яких є знижка, які є в наявності,
// і які після знижки коштують не більше 2000 гривень.
// Дані
// const products = [
//   { name: 'Футболка', price: 800, discount: 10, inStock: true },
//   { name: 'Худі', price: 1800, discount: 15, inStock: true },
//   { name: 'Куртка', price: 3200, discount: 20, inStock: true },
//   { name: 'Кепка', price: 600, discount: 0, inStock: true },
//   { name: 'Сумка', price: 2200, discount: 10, inStock: false },
// ];
// ТЗ
// Створи об’єкт promoManager з методом:
//• getPromoProducts() — має:
//    1. залишити тільки товари, що є в наявності
//    2. залишити тільки товари, у яких знижка більша за 0
//    3. порахувати нову ціну після знижки
//    4. залишити тільки ті товари, у яких нова ціна не перевищує 2000
// 5. повернути новий масив об’єктів у форматі:
//     ▪ { name, newPrice }
// Заготовка
// const promoManager = {
//   products,
//   getPromoProducts() {
//     return this.products
//       .filter(product => product.inStock && product.discount > 0)
//       .map(product => {
//         const newPrice =
//           product.price - (product.price / 100) * product.discount;
//         return {
//           name: product.name,
//           newPrice,
//         };
//       })
//       .filter(product => product.newPrice <= 2000);
//     },

// ==== VAriant2 ====

// getPromoProducts() {
//     return this.products
//       .filter(products => {
//         const newPrice = products.price - (products.price * products.discount) / 100;
//         return products.inStock && newPrice < 2000 && products.discount > 0;
//       })
//       .map(product => {
//         const newPrice = product.price - (product.price * product.discount) / 100;
//         return {
//           name: product.name,
//           newPrice,
//         };
//       });
//   },

// ==== VAriant3 ====

//   getPromoProducts() {
//     return this.products
//       .filter(
//         element =>
//           element.inStock &&
//           element.discount > 0 &&
//           element.price - (element.price / 100) * element.discount < 2000
//       )
//       .map(element => {
//         return {
//           name: element.name,
//           newPrice: element.price - (element.price / 100) * element.discount,
//         };
//       });
//   },
// };

// console.table(promoManager.getPromoProducts());
// console.table(products);
// [
//   { name: "Футболка", newPrice: 720 },
//   { name: "Худі", newPrice: 1530 }
// ]1

// ===== TASK 3 =====
// Для окремого блоку на сайті замовник хоче вивести лише три найдорожчі товари,
// які реально є в наявності. У підсумку потрібні тільки назви.

// ТЗ
// Створи об’єкт topProducts з методом:
//     • getTopThreeAvailable() — має:
//         1. залишити тільки товари, які є в наявності
//         2. відсортувати їх за ціною від більшої до меншої
//         3. взяти перші три товари
//         4. повернути масив лише з назв

// const products = [
//   { name: 'A', price: 100, inStock: true },
//   { name: 'B', price: 500, inStock: true },
//   { name: 'C', price: 300, inStock: false },
//   { name: 'D', price: 800, inStock: true },
//   { name: 'E', price: 200, inStock: true },
//   { name: 'F', price: 1200, inStock: false },
//   { name: 'G', price: 950, inStock: true },
// ];

// const topProducts = {
//   products,

//   getTopThreeAvailable() {
//     return this.products
//       .filter(product => product.inStock)
//       .toSorted((a, b) => b.price - a.price)
//       .slice(0, 3)
//       .map(product => product.name);
//   },
// };
// console.table(topProducts.getTopThreeAvailable()); // ["G", "D", "B"]

// ===== TASK 4 ====
// Продажі

// 1. залишити тільки success === true
// 2. відсортувати за amount за спаданням
// 3. отримати масив імен менеджерів
// 4. порахувати загальну суму amount успішних продажів

// TODO
// зроби окремо:
// getSuccessfulManagers()
// getSuccessfulTotal()

const sales = [
  { manager: 'Ivan', amount: 500, success: true },
  { manager: 'Olha', amount: 1200, success: false },
  { manager: 'Marta', amount: 700, success: true },
  { manager: 'Taras', amount: 300, success: true },
];

const salesClone = structuredClone(sales);

const getSuccessfulManagers = sales => {
  return sales
    .filter(sale => sale.success)
    .toSorted((a, b) => b.amount - a.amount)
    .map(sale => sale.manager);
};

const getSuccessfulTotal = sales => {
  return sales
    .filter(sale => sale.success)
    .reduce((acc, sale) => acc + sale.amount, 0);
};

console.table(getSuccessfulManagers(salesClone)); // ['Marta', 'Ivan', 'Taras']
console.table(getSuccessfulTotal(salesClone)); // 1500
