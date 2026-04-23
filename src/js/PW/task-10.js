// ==== TASK 1 ====
// Додати поле тільки якщо є ключ

// Створи новий масив:

// якщо є age → додати isAdult: true
// якщо нема → не додавати поле
// TODO
// перевір "age" in user
// створити новий об’єкт через spread
// додати поле умовно
/*
const users = [
  { name: 'Anna', age: 20 },
  { name: 'Ivan' },
  { name: 'Olga', age: 25 },
  { name: 'Nina', age: 15 },
];

const newUsers = [];

for (const user of users) {
  if ('age' in user) {
    if (user.age >= 18) {
      newUsers.push({ ...user, isAdult: true });
    } else {
      newUsers.push({ ...user, isAdult: false });
    }
  } else {
    newUsers.push({ ...user });
  }
}
console.table(newUsers);
*/

// ==== TASK 2 ====
// Додати метод getAddress(), який повертає:
// "Kyiv, Ukraine"
/*
const user = {
  name: 'Anna',
  address: {
    city: 'Kyiv',
    country: 'Ukraine',
  },
};
*/

// ==== TASK 3 ====
//TODO:===============================
// Кошик: додати товар, порахувати суму, знайти товар

// getItems(); // має повертати масив товарів
// addItem(product); // має додавати новий товар у items
// getTotalPrice(); // має повертати загальну суму з урахуванням price * quantity
// findItem(productName); // має повертати об’єкт товару з таким ім’ям або null, якщо товар не знайдено

// TODO
// усюди використовуй this.items
// у getTotalPrice() перебери масив і склади підсумок
// у findItem() перебери масив і знайди товар по name
// у addItem() додай новий об’єкт у масив
// Потрібно
// Додати в об’єкт cart методи:
/*
const cart = {
  owner: 'Anna',
  items: [
    { name: 'phone', price: 12000, quantity: 1 },
    { name: 'case', price: 500, quantity: 2 },
  ],
  getItems() {
    return this.items;
  },
  addItem(product) {
    this.items.push(product);
  },
  getTotalPrice() {
    let total = 0;
    for (const item of this.items) {
      total += item.price * item.quantity;
    }
    return total;
  },
  findItem(productName) {
    for (const item of this.items) {
      if (item.name === productName) {
        return item;
      }
    }
    return null;
  },
};

// Перевірка
console.log(cart.getItems());
cart.addItem({ name: 'charger', price: 800, quantity: 1 });
console.log(cart.getItems());
console.log(cart.getTotalPrice());
console.log(cart.findItem('phone'));
console.log(cart.findItem('tablet'));
*/

// ==== TASK 3 ====
// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень
// (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат
// (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'
/*
const calculator = {
  read(a, b) {
    this.a = a;
    this.b = b;
  },
  exist() {
    if (this.a !== undefined && this.b !== undefined) {
      return true;
    }
    return false;
  },
  sum() {
    if (this.exist()) {
      return this.a + this.b;
    }
  },
  mult() {
    if (this.exist()) {
      return this.a * this.b;
    }
    return 'No such propeties';
  },
};

calculator.read(5, 5);
console.log(calculator.exist());
console.log(calculator.sum());
console.log(calculator.mult());
console.log(calculator);
*/

// ==== TASK 4 ====

// Функція getProductPrice(productName)
// приймає один параметр productName - назва продукту.

// Функція містить масив об'єктів products з такими властивостями,
// як name — ім'я товару, price — ціна і quantity — кількість.

// Доповни код функції так,
// щоб вона шукала об'єкт продукту з певним ім'ям (властивість name)
// в масиві products і повертала його ціну (властивість price).
// Якщо продукт з такою назвою не знайдений, функція повинна повертати null.
/*
function getProductPrice(productName) {
  const products = [
    { name: 'Radar', price: 1300, quantity: 4 },
    { name: 'Scanner', price: 2700, quantity: 3 },
    { name: 'Droid', price: 400, quantity: 7 },
    { name: 'Grip', price: 1200, quantity: 9 },
  ];
  console.table(products);

  for (const product of products) {
    if (product['name'] === productName) {
      // return `${product['name']} - price: ${product['price']}`;
      return product['price'];
    }
  }
  return null;
}
console.log(getProductPrice('Radar')); // повертає 1300.
console.log(getProductPrice('Grip')); // повертає 1200.
console.log(getProductPrice('Scanner')); // повертає 2700.
console.log(getProductPrice('Droid')); // повертає 400.
console.log(getProductPrice('Engine')); // повертає null.
*/

// ==== TASK: Find User Email ====
// Ты разрабатываешь систему авторизации.
// Функция getUserEmail(username) принимает имя пользователя.
// Внутри функции есть массив объектов users.
// Каждый пользователь имеет свойства: username, email, role.
//
// Дополни функцию так, чтобы она:
// 1. Искала пользователя по username
// 2. Возвращала его email
// 3. Если пользователь не найден — возвращала null
/*
function getUserEmail(username) {
  const users = [
    { username: 'john_doe', email: 'john@gmail.com', role: 'admin' },
    { username: 'jane_smith', email: 'jane@gmail.com', role: 'editor' },
    { username: 'bob_martin', email: 'bob@gmail.com', role: 'viewer' },
    { username: 'alice_dev', email: 'alice@gmail.com', role: 'editor' },
  ];

  // твой код здесь
  for (const user of users) {
    if (user['username'] === username) {
      return user['email'];
    }
  }
  return null;
}

console.log(getUserEmail('john_doe')); // john@gmail.com
console.log(getUserEmail('alice_dev')); // alice@gmail.com
console.log(getUserEmail('hacker')); // null
*/

// ==== TASK: Online Store Cart ====
// Ты разрабатываешь корзину интернет-магазина.
// Функция getProductInfo(productId) принимает id продукта.
// Внутри функции есть массив объектов cart.
// Каждый продукт имеет свойства: id, name, price, quantity.
//
// Дополни функцию так, чтобы она:
// 1. Искала продукт по id
// 2. Возвращала строку: "Назва: {name}, Ціна: {price}, Кількість: {quantity}"
// 3. Если продукт не найден — возвращала "Продукт не знайдено"
/*
function getProductInfo(productId) {
  const cart = [
    { id: 1, name: 'Laptop', price: 999, quantity: 1 },
    { id: 2, name: 'Mouse', price: 25, quantity: 2 },
    { id: 3, name: 'Keyboard', price: 75, quantity: 1 },
    { id: 4, name: 'Monitor', price: 350, quantity: 2 },
  ];

  // твой код здесь
  for (const product of cart) {
    if (product['id'] === productId) {
      return `Назва: ${product['name']}, Ціна: ${product['price']}, Кількість: ${product['quantity']}`;
    }
  }
  return `Продукт не знайдено`;
}

console.log(getProductInfo(1)); // "Назва: Laptop, Ціна: 999, Кількість: 1"
console.log(getProductInfo(3)); // "Назва: Keyboard, Ціна: 75, Кількість: 1"
console.log(getProductInfo(9)); // "Продукт не знайдено"
*/

// Напиши функцію getAllPropValues(propName),
// яка приймає один параметр propName - ім'я (ключ) властивості.
// Функція повинна повернути масив усіх значень властивості
// з таким ім'ям з кожного об'єкта в масиві products.
// Якщо в об'єктах відсутні властивості з таким ім'ям,
// функція повинна повернути порожній масив.
/*
function getAllPropValues(propName) {
  const products = [
    { name: 'Radar', price: 1300, quantity: 4 },
    { name: 'Scanner', price: 2700, quantity: 3 },
    { name: 'Droid', price: 400, quantity: 7 },
    { name: 'Grip', price: 1200, quantity: 9 },
  ];
  const result = [];

  for (const product of products) {
    if (product[propName] !== undefined) {
      result.push(product[propName]);
    }
  }
  return result;
}

console.table(getAllPropValues('name')); // повертає ["Radar", "Scanner", "Droid", "Grip"]
console.table(getAllPropValues('quantity')); // повертає [4, 3, 7, 9]
console.table(getAllPropValues('price')); // повертає [1300, 2700, 400, 1200]
console.table(getAllPropValues('category')); // повертає []
*/

// ==== TASK 2====
// Функція calculateTotalPrice(productName) приймає один параметр
// productName — назва товару.
//
// Функція містить масив об'єктів products з такими властивостями:
// name — ім'я товару
// price — ціна
// quantity — кількість
//
// Доповни код функції так, щоб вона повертала загальну вартість
// (ціна * кількість) товару з таким ім'ям з масиву products.
//
// Якщо продукту з такою назвою немає,
// функція повинна повертати рядок:
// "Product <productName> not found!"
/*
function calculateTotalPrice(productName) {
  const products = [
    { name: 'Radar', price: 1300, quantity: 4 },
    { name: 'Scanner', price: 2700, quantity: 3 },
    { name: 'Droid', price: 400, quantity: 7 },
    { name: 'Grip', price: 1200, quantity: 9 },
  ];

  // твой код здесь
  for (const product of products) {
    if (productName === product['name']) {
      return product['price'] * product['quantity'];
    }
  }
  return `Product ${productName} not found!`;
}

console.log(calculateTotalPrice('Blaster')); // "Product Blaster not found!"
console.log(calculateTotalPrice('Radar')); // 5200
console.log(calculateTotalPrice('Droid')); // 2800
console.log(calculateTotalPrice('Grip')); // 10800
console.log(calculateTotalPrice('Scanner')); // 8100
*/

// ==== TASK: Potion Shop "At The Old Toad" ====
// Оголоси об'єкт atTheOldToad з наступними властивостями:
//
// potions — порожній масив для зберігання зіль
//
// getPotions() — метод, який повертає рядок:
// "List of all available potions"
//
// addPotion(potionName) — метод, який повертає рядок:
// "Adding <potionName>"

const atTheOldToad = {
  // твой код здесь
  potions: [],
  getPotions() {
    return 'List of all available potions';
  },
  addPotion(potionName) {
    return `Adding ${potionName}`;
  },
};

console.log(atTheOldToad.potions); // []
console.log(atTheOldToad.getPotions()); // "List of all available potions"
console.log(atTheOldToad.addPotion('Invisibility')); // "Adding Invisibility"
console.log(atTheOldToad.addPotion('Power potion')); // "Adding Power potion"
console.table(atTheOldToad.potions);
