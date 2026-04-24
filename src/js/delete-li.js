// ==== TASK 2 ====
// Видалення елементів списку
// Контекст:
// У списку нотаток кожен елемент має кнопку видалення.
// Оскільки елементів може ставати більше,
// обробник потрібно повісити не на кожну кнопку окремо,
// а на батьківський список.

// Базовий HTML:
// <ul class="notes">
//   <li class="note-item">
//     <span>Buy milk</span>
//     <button class="delete-btn" type="button">Delete</button>
//   </li>
//   <li class="note-item">
//     <span>Read book</span>
//     <button class="delete-btn" type="button">Delete</button>
//   </li>
// </ul>
// Розширене ТЗ:
// • Повісь один слухач події click на .notes.
// • Якщо клік відбувся саме по .delete-btn,
// потрібно видалити відповідний .note-item.
// • Для пошуку потрібного елемента використовуй closest.
// • Інші елементи списку не повинні реагувати на клік.
// • Не вішай окремі слухачі на кожну кнопку.

const notes = document.querySelector('.notes');

notes.addEventListener('click', event => {
  // console.log('click'); // проверка слухача
  // как мне "обмежити" клики на странице?
  // если одна кнопка в разметке
  // if (event.target.nodeName !== 'BUTTON') {
  //   return;
  // }
  // console.log(event.target.nodeName);
  // вот как: нужно сделать if{} и если это не наш тег то выходим из функции
  // если несколько то лучше вторую ифку с classList.contains("class")
  if (!event.target.classList.contains('delete-btn')) {
    return;
  }
  console;
  // пошук вверх closest
  event.target.closest('.note-item').remove();
  // теперь удаляем найденную лишку от кнопки
});
