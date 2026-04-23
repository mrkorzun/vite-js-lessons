// Створення елементів
// Історія

// Потрібно динамічно створити список категорій без використання HTML.

// HTML
// <ul class="categories"></ul>
// Дані

const categories = ['Cars', 'Books', 'Games'];

// // ТЗ
// // для кожного елемента масиву:
// // створити <li>
// // вставити текст
// // додати всі елементи в <ul>
// // додати клас category-item кожному <li>

const refs = {
  categoriesList: document.querySelector('.categories'),
};

const createCategoriesItems = category => {
  const item = document.createElement('li');
  item.classList.add('category-item');
  item.textContent = category;
  return item;
};

const liEl = categories.map(createCategoriesItems);

refs.categoriesList.append(...liEl);

// console.log(liEl);
console.log(refs.categoriesList);

// ==== TASK 2 ====
// Додавання учасників у список
// Історія
// Команда робить маленький внутрішній інструмент для реєстрації учасників події.
// Менеджеру не потрібна складна форма — достатньо поля для імені, кнопки та списку,
// який одразу показує, кого вже додали.

// Базовий HTML
/* <div class="participants-widget">
  <input type="text" class="participant-input" placeholder="Введіть ім'я" />
  <button type="button" class="add-participant">
    Додати
  </button>
  <ul class="participants-list"></ul>
</div>; */
// Що має працювати в результаті
// • Після кліку на кнопку ім’я з інпута додається в список.
// • Якщо поле порожнє або містить лише пробіли, новий елемент не створюється.
// • Після успішного додавання інпут очищається.
// • Кожен новий учасник має додаватися окремим елементом списку.

// ==== TASK 3 ====

// У блоці відгуків є тестові картки,
// які не повинні потрапити в фінальну версію сторінки.
// Їх треба прибрати з DOM.

// HTML
// <div class="reviews">
//   <div class="review-card">Great service</div>
//   <div class="review-card test">Test review 1</div>
//   <div class="review-card">Fast delivery</div>
//   <div class="review-card test">Test review 2</div>
// </div>
// ТЗ
// знайди всі елементи з класом test
const fakeCards = document.querySelectorAll('.test');
// видали їх зі сторінки
const cards = fakeCards.forEach(card => card.remove());
// після видалення знайди всі .review-card
const realCard = document.querySelectorAll('.review-card');
// виведи в консоль, скільки реальних карток залишилос
console.log(realCard.length);

// ==== TASK 4 ====
// Історія У шапці сайту вже є меню.
// Потрібно візуально позначити поточну сторінку
// та прибрати зайву “активність” з іншого пункту.
//

/* <ul ul class="menu" >
    <li class="menu-item active">Home</li>
    <li class="menu-item">Catalog</li>
    <li class="menu-item">Contacts</li>
</ul>  */

// ТЗ знайди всі елементи меню
// прибери клас active у першого пункту
// додай клас active другому пункту
// перевір через метод класів, чи третій пункт має клас active
// виведи результат перевірки в консоль

const allItems = document.querySelectorAll('.menu-item');
allItems[0].classList.remove('active');
allItems[1].classList.add('active');
console.log(allItems[2].classList.contains('active'));
