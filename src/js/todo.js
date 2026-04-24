// ==== TASK 3 ====
// Додавання задач у to-do список
// Контекст: Користувач планує день у невеликому вебзастосунку.
// Після натискання кнопки введений текст повинен перетворюватися на новий пункт списку.

// Базовий HTML:
{
  /* <section class="task todo-task">
  <h2>Мої справи</h2>
  <div class="controls">
    <input class="task-input" type="text" placeholder="Нова задача" />
    <button class="add" type="button">
      Add task
    </button>
  </div>
  <ul class="list"></ul>
</section>; */
}

// Розширене ТЗ:
// • Після кліку на кнопку потрібно створити новий елемент <li> і додати його в кінець списку .list.
// • Текст нового пункту береться з поля .task-input.
// • Якщо поле порожнє або містить лише пробіли, новий пункт не додається.
// • Після успішного додавання поле вводу має очищатися.
// • Кожне нове завдання повинно додаватися окремим рядком, а не замінювати попередні.

const refs = {
  btn: document.querySelector('.add'),
  input: document.querySelector('.task-input'),
  list: document.querySelector('.list'),
};
// console.log(refs);

refs.btn.addEventListener('click', onBtnClick);

function onBtnClick(event) {
  const inputText = refs.input.value.trim();
  if (!inputText) {
    return;
  }
  const liText = `<li>${inputText}</li>`;
  refs.list.insertAdjacentHTML('beforeend', liText);
  refs.input.value = '';
}
