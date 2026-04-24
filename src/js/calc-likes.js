// Лічильник кліків для кнопки Like
// Контекст: На сторінці товару є кнопка лайку.
// Замовник хоче, щоб користувач одразу бачив,
// скільки разів на неї натиснули в межах поточного відкриття сторінки.

// Базовий HTML:
{
  /* <section class="task like-task">
  <h2>Лічильник лайків</h2>
  <button class="btn" type="button">Like</button>
  <p class="result">Likes: <span class="count">0</span></p>
</section> */
}

// Розширене ТЗ:
// • Після кожного кліку на кнопку значення всередині <span class="count"> має збільшуватись на 1.
// • Початково на сторінці повинно відображатись число 0.
// • Число змінюється лише в межах цього відкриття сторінки; після перезавантаження можна починати з нуля.
// • Жодних додаткових повідомлень виводити не потрібно — змінюється тільки число.

const refs = {
  likeBtn: document.querySelector('.btn'),
  likesCount: document.querySelector('.count'),
};

refs.likeBtn.addEventListener('click', () => {
  refs.likesCount.textContent++;
});
