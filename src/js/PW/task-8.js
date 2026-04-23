// ===== TASK 1 =====
// Функція checkStorage(storage, item) приймає два параметри:

// storage - масив рядків, що описує доступні товари на складі
// item - рядок з назвою товара, наявність якого потрібно перевірити
// Доповни код функції таким чином, щоб вона перевіряла, чи присутній такий товар в масиві storage і повертала:

// рядок "<item> is available to order!", де item - це назва товара, якщо товар було знайдено
// рядок "Sorry! We are out of stock!", якщо такого товара немає в масиві
// Зроби так, щоб пошук за ім'ям товару був незалежний від регістру,
// тобто наприклад "plum" і "pLuM" мають бути знайдені у масиві ["apple", "plum", "pear"].
/*
function checkStorage(storage, item) {
  item = item.toLowerCase();
  if (storage.includes(item)) {
    return `${item} is available to order!`;
  } else {
    return 'Sorry! We are out of stock!';
  }
}
console.log(checkStorage(['apple', 'plum', 'pear'], 'plum')); // "plum is available to order!"
console.log(checkStorage(['apple', 'plum', 'pear'], 'pLuM')); // "plum is available to order!"
console.log(checkStorage(['apple', 'plum', 'pear'], 'pear')); // "pear is available to order!"
console.log(checkStorage(['apple', 'plum', 'pear'], 'orange')); // "Sorry! We are out of stock!"
console.log(checkStorage(['apple', 'plum', 'pear'], 'carrot')); // "Sorry! We are out of stock!"
*/

// ===== TASK 2 =====
// Перед розв'язанням цієї задачі варто зазначити, що таке спільні елементи.
// Спільними елементами масивів називають ті елементи, які присутні у всіх масивах.

// Наприклад, у двох масивах [1, 3, 5] і [0, 8, 5, 3]
// спільними будуть числа 3 і 5, оскільки вони присутні в обох вхідних масивах.
// А числа 0, 1 і 8 присутні тільки в одному з масивів.

// Функція getCommonElements(array1, array2),
// приймає два масиви (array1 та array2) довільної довжини в якості параметрів.

// Доповни код функції:

// Створи порожній масив для зберігання нового масиву.
// Використай цикл for для ітерації кожного елемента у array1.
// У тілі циклу перевір, чи поточний елемент існує у array2 за допомогою методу includes.
// Якщо він існує, то додай елемент до нового масиву.
// Поверни наповнений масив спільних елементів як результат роботи функції.
/*
function getCommonElements(array1, array2) {
  const array3 = [];
  for (let i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i])) {
      array3.push(array1[i]);
    }
  }
  return array3;
}
console.log(getCommonElements([1, 2, 3], [2, 4])); // [2]
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); // [1, 2]
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); // [12, 27, 3]
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); // [10, 30, 40]
console.log(getCommonElements([1, 2, 3], [10, 20, 30])); // []
*/

// ===== TASK 3 =====
// Доповни код функції calculateTotalPrice(order) так,
// щоб вона повертала загальну суму чисел в масиві order.
// Використай цикл for...of для перебору масиву.
/*
function calculateTotalPrice(order) {
  console.log(arguments);
  let result = 0;
  for (let orders of order) {
    result += orders;
  }
  return result;
}
console.log(calculateTotalPrice([12, 85, 37, 4])); // 138
console.log(calculateTotalPrice([164, 48, 291])); // 503
console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // 1116
console.log(calculateTotalPrice([])); // []
*/

// ===== TASK 4 =====
// Функція createReversedArray() може приймати довільну кількість аргументів.
// Доповни код функції так, щоб вона повертала масив усіх аргументів,
// але в масиві вони повинні йти у зворотному порядку.
// Тобто, при виклику createReversedArray(1, 2, 3),
// функція має повернути масив [3, 2, 1].
// Використовуй цикл або метод масиву toReversed(),
// який застосовується до масиву і результатом роботи повертає новий масив
// з елементами у зворотньому порядку.
/*
function createReversedArray() {
  const arr = Array.from(arguments); // переводим в масив из псевдомасива
  return arr.toReversed(); // переворачиваем
}

console.log(createReversedArray(12, 85, 37, 4)); // [4, 37, 85, 12]
console.log(createReversedArray(164, 48, 291)); // [291, 48, 164]
console.log(createReversedArray(412, 371, 94, 63, 176)); // [176, 63, 94, 371, 412]
console.log(createReversedArray()); // []
*/

// ===== TASK 5 =====
// Функція calculateTax(amount, taxRate) оголошує два параметри:

// amount - число, сума від якої потрібно обчислити податок. Обов'язковий параметр.
// taxRate - число, податкова ставка. Необов'язковий параметр. За замовчуванням його значення має бути 0.2.
// Доповни код функції так, щоб вона повертала суму податку - результат множення суми на податкову ставку.

function calculateTax(amount, taxRate = 0.2) {
  return amount * taxRate;
}

console.log(calculateTax(100, 0.1)); // 10
console.log(calculateTax(200, 0.2)); // 40
console.log(calculateTax(200, 0.3)); // 60
console.log(calculateTax(200)); // 40
