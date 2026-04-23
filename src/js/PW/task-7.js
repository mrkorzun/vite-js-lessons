// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic',

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

// indexOf - only one item
// length - all elements
/*
const styles = ['jazz', 'blues'];
styles.push('rock-n-roll'); // add
const findIndex = styles.indexOf('blues'); // find index

if (findIndex !== -1) {
  //   styles[findIndex] = 'classic';
  styles.splice(findIndex, 1, 'classic'); // find, delete and write 'classic'
}

function logItems(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1} - ${array[i]}`);
  }
}

logItems(styles);
*/

// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".
/*
const logins = ['Peter', 'John', 'Igor', 'Sasha'];

function checkLogin(array) {
  const userName = prompt('Введите имя:');
  if (array.includes(userName)) {
    return `Welcome, ${userName}!`;
  }
  return 'User not found';
}
alert(checkLogin(logins));
*/

// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.
/*
function calculateAverage(...numbers) {
 // все буде складатися в array все що после ... 
  let totalSum = 0;
  let count = 0;
  for (const number of numbers) {
    // перебор 
    if (typeof number === 'number') {
      // проверка числа 
      totalSum += number;
      count++;
    }
  }
  // если пусто то выведем сообщение 
  if (totalSum !== 0 && count !== 0) {
    return totalSum / count;
  }

  return 'Невозможная операция - на 0 делить нельзя';
}

console.log(calculateAverage(5, 10, 15, 'Hello'));
*/

// Напишіть функцію, яка сумуватиме сусідні числа
// і пушитиме їх в новий масив.

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// уточнення: складати необхідно перше число з другим, потім друге - з третім,
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].
/*
const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

function sumNeighbors(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    newArr.push(arr[i] + arr[i + 1]);
  }
  return newArr;
}

console.log(sumNeighbors(someArr));
*/

// ====== TASK 1 ======

// Функція getLength(array) очікує один параметр array - масив довільних значень.
// Доповни код функції так, щоб вона перетворювала масив у рядок, без роздільників,
// і повертала кількість символів в отриманому рядку.
/*
function getLength(array) {
  const words = array.join('');
  return words.length;
}

console.log(getLength(['Mango', 'hurries', 'to', 'the', 'train'])); // 22
console.log(getLength(['M', 'a', 'n', 'g', 'o'])); // 5
*/

// ====== TASK 2 ======
// Сервісу гравірування прикрас потрібна функція,
// яка б автоматично рахувала ціну гравірування, залежно від кількості слів і ціни за слово.

// Оголошена функція calculateEngravingPrice(message, pricePerWord).
// Ця функція приймає першим параметром рядок, що складається зі слів,
// розділених лише пробілами (параметр message) та другим параметром - число,
// що містить ціну гравірування за одне слово (параметр pricePerWord).

// Доповни тіло функції так, щоб вона повертала загальну вартість гравірування усіх слів в рядку.
/*
function calculateEngravingPrice(message, pricePerWord) {
  message = message.split(' ');
  return message.length * pricePerWord;
}

console.log(calculateEngravingPrice('JavaScript is in my blood', 10)); // 50
console.log(calculateEngravingPrice('JavaScript is in my blood', 20)); // 100
console.log(calculateEngravingPrice('Web-development is creative work', 40)); // 160
*/

// ====== TASK 3 ======
// Функція getSlice(array, value) приймає два параметра:

// array - масив довільних елементів
// value - значення елемента масиву для пошуку
// Доповни код функції getSlice(array, value) так,
// щоб вона виконувала пошук значення value у масиві array і повертала:

// порожній масив, якщо в array немає елемента зі значенням value
// підмасив, що починається з початку array і до елемента зі значенням value включно,
// якщо такий елемент є в array
/*
function getSlice(array, value) {
  const idxWords = array.indexOf(value);

  if (idxWords === -1) {
    return [];
  }
  return array.slice(0, idxWords + 1);
}
console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Poly')); // ["Mango", "Poly"]
console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Ajax')); // ["Mango", "Poly", "Ajax"]
console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Mango')); // ["Mango"]
console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Jacob')); // []
console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Casey')); // []
*/

// ====== TASK 3 ======
// Функція createArrayOfNumbers(min, max) приймає два параметра:

// min - ціле число, з якого починаються обчислення
// max - ціле число, до якого включно триватимуть обчислення
// Доповни код функції createArrayOfNumbers(min, max) таким чином,
// щоб вона повертала масив усіх цілих чисел від значення min до max включно.
/*
function createArrayOfNumbers(min, max) {
  const numbers = [];
  for (let i = min; i <= max; i++) {
    numbers.push(i);
  }
  return numbers;
}
console.log(createArrayOfNumbers(1, 3)); // [1, 2, 3]
console.log(createArrayOfNumbers(14, 17)); // [14, 15, 16, 17]
console.log(createArrayOfNumbers(29, 34)); // [29, 30, 31, 32, 33, 34]
*/

// ====== TASK 4 ======
// Функція calculateTotalPrice(order) приймає один параметр order - масив чисел.
// Доповни функцію так, щоб вона повертала загальну суму елементів з масиву order.
/*
function calculateTotalPrice(order) {
  let totalSum = 0;
  for (let i = 0; i < order.length; i++) {
    totalSum += order[i];
  }
  return totalSum;
}

console.log(calculateTotalPrice([12, 85, 37, 4])); // 138
console.log(calculateTotalPrice([164, 48, 291])); // 503
*/

// Функція getEvenNumbers(start, end) має два параметри start та end, які є цілими числами.
// Доповни код функції так, щоб вона повертала масив усіх парних чисел від start до end.
// Якщо жодного парного числа немає, то масив має бути пустим.
// Парним вважається число, яке ділиться на 2 без остачі (10 % 2 === 0).
// Використовуй цикл for.
/*
function getEvenNumbers(start, end) {
  const result = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      result.push(i);
    }
  }
  return result;
}

console.log(getEvenNumbers(2, 5)); // [2, 4]
console.log(getEvenNumbers(3, 11)); // [4, 6, 8, 10]
*/
