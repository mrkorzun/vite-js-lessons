// const firstName = prompt('Enter your first name');
// const lastName = prompt('Enter your last name');

// const message = `Hello ${firstName} ${lastName}, you are logged in`;

// alert(message);
/*
// screen-size
function getScreenType(screenWidth) {
  const sm = 320;
  const md = 768;
  const lg = 1200;

  if (screenWidth <= sm) {
    return "Mobile screen";
  } else if (screenWidth > sm && screenWidth <= md) {
    return "Tablet screen";
  } else if (screenWidth > md && screenWidth <= lg) {
    return "Desktop screen";
  } else {
    return "Godzilla screen";
  }
}

console.log(getScreenType(Number(prompt('Введите размер экрана')))); 
*/
/*
function greetName(firstName, lastName) {
  console.log(`Welcome ${firstName} ${lastName}`);
}

greetName(prompt('Write your first name:'), prompt('Write your last name:'));
*/

function calcBMI(weight, height) {
  weight = Number(weight);
  height = Number(height);

  const result = weight / height ** 2;

  return result.toFixed(1);
}

console.log(calcBMI('74', '1.75'));
