// ==== task 1
console.log(true || false);
console.log(true && false);

// ===== task 2

// Функція checkAccess(subType) перевіряє,
// чи може користувач отримати доступ до контенту.
// Перевірка відбувається за типом передплати.
// Використовуючи оператор "АБО", доповни код функції так,
// щоб якщо значення параметра subType дорівнює рядкам "pro" або "vip",
// то функція повертала true і користувач отримував доступ.
// В іншому випадку повертала false.
/*
function checkAccess(subType) {
  return subType === 'pro' || subType === 'vip';
}
console.log(checkAccess('pro'));
console.log(checkAccess('starter'));
console.log(checkAccess('vip'));
console.log(checkAccess('free'));
*/

// ==== task3

// Функція toggleModalVisibility(isVisible) перемикає стан відображення модального вікна.
// У параметрі isVisible вона очікує буль true або false.
// Доповни код функції так, щоб вона повертала протилежне значення цього параметра.
/*
function toggleModalVisibility(isVisible) {
  return !isVisible;
}
console.log(toggleModalVisibility(true));
console.log(toggleModalVisibility(false));
*/

// ==== task 4
// Функція getSubstring(string, length) приймає рядок і повертає новий підрядок (його часткову копію).
// Вона оголошує два параметри, значення яких будуть задаватися під час її виклику:

// string - оригінальний рядок
// length - довжина нового підрядка
// Доповни код функції так, щоб вона повертала новий підрядок, який починається від початку string і має довжину length.
/*
function getSubstring(string, length) {
  return string.slice(0, length);
}
console.log(getSubstring('Hello world', 3));
console.log(getSubstring('Hello world', 11));
console.log(getSubstring('Hello world', 8));
*/

// ==== task 5
// Функція normalizeInput(input, to) оголошує два параметри:

// input - рядок, який потрібно привести до певного регістру
// to - рядок с двома можливими значеннями: "upper" або "lower",
// що вказують до якого регістру потрібно привести значення input
// Доповни код функції таким чином, щоб:

// Якщо значення параметра to — це рядок "upper",
// то функція повертала копію рядка input, але у верхньому регістрі
// В іншому разі, функція повертала копію рядка inputу нижньому регістрі
/*
//~ Varian1
function normalizeInput(input, to) {
  if (to === 'upper') {
    return input.toUpperCase();
  } else {
    return input.toLowerCase();
  }
}
*/
/*
//~ Varian2
function normalizeInput(input, to) {
  return to === 'upper' ? input.toUpperCase() : input.toLowerCase();
}

console.log(normalizeInput("This ISN'T SpaM", 'upper'));
console.log(normalizeInput("This ISN'T SpaM", 'lower'));
*/

// ==== task 6

// Функція checkForName(fullName, firstName) приймає два параметри
// та повертає буль true або false - результат перевірки
// входження підрядка firstName у рядок fullName.

// fullName - рядок, що містить повне ім'я
// firstName - рядок, що містить ім'я для перевірки його входження в повне ім'я
// Доповни тіло функції таким чином,
// щоб вона повертала результат перевірки входження імені (параметр firstName),
// у повне ім'я (параметр fullName).
// Врахуй, що регістр символів в параметрах fullName і firstName наперед не відомий.
// Перед перевіркою входження не забудь прирівняти їх до однакового регістру.
/*
function checkForName(fullName, firstName) {
  let checkCaseFullName = fullName.toLowerCase();
  let checkCasefirstName = firstName.toLowerCase();

  return checkCaseFullName.includes(checkCasefirstName);
}
console.log(checkForName('Jason Neis', 'Jason'));
console.log(checkForName('Jason Neis', 'jAsOn'));
console.log(checkForName('Caty Stars', 'cAtY'));
console.log(checkForName('Caty Stars', 'Andromeda'));
*/

// ==== task 7

// Функція checkFileExtension(fileName, ext) приймає два параметри:

// fileName - рядок, що зберігає ім'я файлу з розширенням, наприклад, styles.css, hello.js тощо.
// ext - рядок, що зберігає розширення, наприклад, .css, .js тощо
// Доповни код функції так, щоб:

// Якщо ім'я файлу fileName закінчується розширенням, зазначеним у параметрі ext,
// то функція повертала рядок "File extension matches"
// В іншому разі, функція повертала рядок
/*
function checkFileExtension(fileName, ext) {
  return fileName.endsWith(ext)
    ? 'File extension matches'
    : 'File extension does not match';
}
console.log(checkFileExtension('styles.css', '.css')); // повертає "File extension matches"
console.log(checkFileExtension('styles.css', '.js')); // "File extension does not match"
*/

/*
TODO: Пошук у рядку методом includes()
TODO:
TODO: Напиши функцію isStrIncludesForbiddenWords(string, blacklistedWord1, blacklistedWord2),
TODO: яка буде перевіряти чи є у рядку заборонені слова.
TODO: Параметри функції:
TODO: string - рядок;
TODO: blacklistedWord1 - перше заборонене слово;
TODO: blacklistedWord2 - друге заборонене слово.
TODO: Функція має повернути true або false.
*/

function isStrIncludesForbiddenWords(str, blacklistedWord1, blacklistedWord2) {
  str = str.toLowerCase();
  blacklistedWord1 = blacklistedWord1.toLowerCase();
  blacklistedWord2 = blacklistedWord2.toLowerCase();

  return str.includes(blacklistedWord1) || str.includes(blacklistedWord2);
}

const string1 =
  "Hello, I'm Prince Abdul, this is not spam, I'm offering you a million!";
const string2 = "Biggest SALE this week, don't miss out!";
const string3 = '#fatlivesmatter advertising campaign';

console.log(isStrIncludesForbiddenWords(string1, 'spam', 'sale'));
console.log(isStrIncludesForbiddenWords(string2, 'spam', 'sale'));
console.log(isStrIncludesForbiddenWords(string3, 'spam', 'sale'));
