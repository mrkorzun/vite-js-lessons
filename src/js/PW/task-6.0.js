// ==== Task 1 ====

// Функція getFileName(file) приймає один параметр

// file - рядок з іменем файлу.
// Ім'я файлу може бути з розширенням, наприклад: styles.css, app.js або без, наприклад: styles, app.

// Використовуючи методи indexOf та slice, доповни код функції таким чином, щоб:

// Вона перевіряла наявність розширення в імені файлу (назва розширення відокремлюється від імені файла крапкою)
// Якщо ім'я файлу не містить розширення, то функція повертала новий підрядок, що містить ім'я файлу без змін
// В іншому разі функція повертала підрядок з іменем файлу, але без розширення
/*
function getFileName(file) {
  // const index = file.indexOf('.');
  //   if (index === -1) {
  //     return file;
  //   } else {
  //     return file.slice(0, index);
  //   }

  // second variant
  const index = file.indexOf('.');
  return index === -1 ? file : file.slice(0, index);
}

console.log(getFileName('styles.css')); // повертає "styles"
console.log(getFileName('app.js')); // повертає "app"
console.log(getFileName('app')); // повертає "app"
console.log(getFileName('index.js')); // повертає "index"
console.log(getFileName('index.html')); // повертає "index"
console.log(getFileName('index.css')); // повертає "index"
console.log(getFileName('index')); // повертає "index"
*/
// ==== Task 2 ====
// Функція getOrderQuantity(order) приймає один параметр order
// - масив рядків, які описують продукти в замовленні клієнта.
// Доповни код функції таким чином, щоб вона повертала число, що дорівнює кількості елементів масиву.
/*
function getOrderQuantity(order) {
  return order.length;
}
getOrderQuantity(['apple', 'peach', 'pear', 'banana']);
getOrderQuantity(['apple', 'banana']);
getOrderQuantity(['apple', 'banana', 'pear']);
*/

// ==== Task 3 ====
// Функція getLastElementMeta(array) приймає один параметр array - масив довільних значень.
// Доповни код функції таким чином, щоб вона повертала новий масив з двох елементів:

// перший елемент - це індекс останнього елементу у масиві array
// другий елемент - це значення останнього елементу у масиві array
/*
function getLastElementMeta(array) {
  const lastIndex = array.length - 1; // сначала находим индекс масива
  const lastElement = array[lastIndex]; // ищем элемент масыва

  return [lastIndex, lastElement]; // выводим индекс и элемент масыва вместе
}

console.log(getLastElementMeta(['apple', 'peach', 'pear', 'banana']));
console.log(getLastElementMeta(['apple', 'peach', 'pear']));
console.log(getLastElementMeta(['apple', 'peach']));
console.log(getLastElementMeta(['apple']));
*/

// Функція getExtremeElements(array) приймає один параметр array - масив елементів довільної довжини.
// Доповни код функції таким чином, щоб вона
// повертала масив з двох елементів - першого і останнього елементів параметра array.
/*
function getExtremeElements(array) {
  // const lastIndex = array.length - 1;

  return [array[0], array[array.length - 1]];
}

console.log(getExtremeElements([1, 2, 3, 4, 5])); // [1, 5]
console.log(getExtremeElements(['Earth', 'Mars', 'Venus'])); //повертає ["Earth", "Venus"]
console.log(getExtremeElements(['apple', 'peach', 'pear', 'banana'])); //повертає ["apple", "banana"]
*/
