// Змінна num може набувати 4 значення: '1', '2', '3' або '4'
// (запитуй це значення у користувача через prompt).
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.

// const num = +prompt('Введи число вiд 0-4');
// let result = '';

// switch (num) {
//   case 1:
//     result = 'зима';
//     break;

//   case 2:
//     result = 'весна';
//     break;

//   case 3:
//     result = 'лiто';
//     break;

//   case 4:
//     result = 'осiнь';
//     break;

//   default:
//     result = 'Вибачте, але ви маєте ввести значення від 1 до 4 включно';
//     break;
// }
// console.log(result);

// ======== Task =============

// Напишіть функцію greet(name),
//     яка приймає ім'я і повертає рядок
// «Hello, [ім'я]!». Викличте її з різними іменами.

// let userName = prompt('Write your name');
// function greet(name) {
//   return `Hello ${name}`;
// }

// alert(greet(userName));

// ======== Задача 1. =============

// Напиши функцію getFullName,
// яка приймає два параметри firstName і lastName
// і повертає повне ім'я через пробіл. Викличи з різними іменами.

/*
let firstUserName = prompt('Your Fisrt Name pls');
let lastUserName = prompt('Your last Name pls');

function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}.`;
}

console.log(firstUserName, lastUserName);

*/

// ======== Задача 2. =============

// Напиши функцію describeCity,
// яка приймає city і country
// і повертає рядок "Місто [city] знаходиться в [country]".
// Викличи з 3 різними містами.

/*
function describeCity(city, country) {
  return `Місто ${city}, знаходиться в ${country}`;
}
console.log(describeCity('Kharkiv', 'Ukraine'));
console.log(describeCity('Barcelona', 'Spain'));
console.log(describeCity('Dubai', 'UAE'));
*/

// ======== Задача 3. =============

// Напиши функцію repeat,
// яка приймає слово word і число times
// і повертає рядок
// де слово повторюється вказану кількість разів через пробіл.
//  Наприклад repeat("привіт", 3) → "привіт привіт привіт".
/*
function repeat(word, times) {
  let wordWithSpace = word + ' ';
  let result = wordWithSpace.repeat(times);
  return result;
}

console.log(repeat('Romario', 3));
console.log(repeat('Alex', 3));
console.log(repeat('Maryna', 3));
*/
// ======== Задача 4. =============

// Напиши функцію introduce,
// яка приймає name і age
// і повертає рядок "Мене звати [name], мені [age] років".
// Викличи зі своїми даними.

/*
let userName = prompt('What is your name stranger?');
let userAge = prompt('How old are you?');
function introduce(name, age) {
  return `Мене звати ${name}, мені ${age} років`;
}
alert(introduce(userName, userAge));
*/

// ======== Задача 5. =============

// Напиши функцію calcArea,
// яка приймає width і height
// і повертає площу прямокутника.
// Виведи результат з поясненням: "Площа прямокутника: [результат]".
/*
function calcArea(width, height) {
  let result = Math.round(width * height);
  return `Площа прямокутника: ${result}`;
}
console.log(calcArea(4.9, 3.2));
*/

// ======== Задача 6. =============

// Напиши функцію calcTip,
// яка приймає суму рахунку bill і відсоток чайових tip
// і повертає суму чайових.
// Виведи результат у рядку:
// "Чайові: [результат] грн". Викличи з bill = 350 і tip = 10.

// ======== Задача 7. =============

// Напиши функцію isLongWord,
// яка приймає слово word і повертає true
// якщо слово довше 6 символів,
// і false якщо ні.
// Викличи з кількома різними словами.

// ======== Задача 8. =============

// Напиши функцію carInfo,
// яка приймає brand, model і year
// і повертає рядок
// "Автомобіль: [brand] [model], рік: [year]".
// Викличи через prompt три рази для кожного параметра
// і виведи результат через alert.

// ======== Задача 9. =============

// Напиши функцію convertToUSD,
// яка приймає суму в гривнях uah і курс долара rate
// і повертає суму в доларах, округлену до 2 знаків після коми.
// Виведи результат у рядку: "$[результат]".

// ======== Задача 10. =============

// Напиши функцію whoIsOlder,
// яка приймає два імені та два віки (name1, age1, name2, age2)
// і повертає рядок з іменем старшої людини.
// Наприклад: "Старша: Олена".

// ======== Задача 11 =============
// Функція isNumberInRange(start, end, number) перевіряє,
// чи входить число у проміжок.
// Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:

// number - число, входження якого перевіряється
// start - початок числового проміжку
// end - кінець числового проміжку
// Використовуючи оператор &&, доповни функцію isNumberInRange
// таким чином, щоб вона повертала результат
// входження number у числовий проміжок від start до end включно.
// Тобто число повинно бути одночасно і більшим або дорівнювати start,
// і меншим або дорівнювати end.
// Результатом виклику функції має бути буль true або false.

/*
function isNumberInRange(start, end, number) {
  return number >= start && number <= end;
}
console.log(isNumberInRange(10, 30, 17));
console.log(isNumberInRange(10, 30, 5));
console.log(isNumberInRange(20, 50, 24));
console.log(isNumberInRange(20, 50, 76));
*/
