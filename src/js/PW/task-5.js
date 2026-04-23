//  Task 1
//Використайте цикл while, щоб вивести в console всі числа від 0 до 20 включно.
/*
let i = 0;

while (i <= 20) {
  console.log(i);
  i++;
}
*/

// Task 2
// Напишіть функцію getNumbers(min, max), що приймає 2 параметри -
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.
/*
const min = Number(prompt('Введите цифру:'));
const max = Number(prompt(`Введите цифру больше ${min}:`));

function getNumbers(min, max) {
  let sum = 0;

  for (let i = max; i >= min; i--) {
    console.log(i);
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}
console.log('Сума парних чисел:', getNumbers(min, max));
*/

// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.
/*
function min(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Not a number!';
  }
  return a > b ? b : a;
}
console.log(min(50, 20));
*/
