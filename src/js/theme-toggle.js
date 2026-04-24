// ==== TASK 4 ====
// Перемикач теми сторінки
// Контекст: Користувач хоче перемикатися між звичайною та темною темою.
// Замовник просить реалізувати це через один клас на елементі body.

// Базовий HTML:
{
  /* <section class="task theme-task">
  <h2>Theme switcher</h2>
  <button class="theme" type="button">
    Змінити тему
  </button>
  <p>Цей текст потрібен, щоб бачити зміну теми сторінки.</p>
</section>; */
}

// Розширене ТЗ:
// • Після першого кліку на кнопку до елемента body має додаватися клас dark.
// • Після наступного кліку цей клас має видалятися.
// • Припускається, що стилі теми вже описані в CSS або будуть додані окремо;
// задача стосується саме логіки перемикання.
// • Логіка повинна впливати на всю сторінку, а не лише на кнопку або окремий блок.

const refs = {
  themeBtn: document.querySelector('.theme'),
  // body: document.querySelector('body'),
};

refs.themeBtn.addEventListener('click', onThemeBtnClick);

function onThemeBtnClick(event) {
  document.body.classList.toggle('dark');
}
