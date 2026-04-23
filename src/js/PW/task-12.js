// ==== TASK: Streaming Platform "Evening Schedule" ====
//
// На стрімінговій платформі є блок "Вечірній розклад".
// Редактор формує список доступних трансляцій на сьогодні, але окремо потрібно:
//
// 1. Порахувати, скільки всього хвилин триватимуть лише відкриті ефіри
// 2. Підготувати короткий текст для банера
// 3. Перевірити, як той самий механізм працюватиме для іншого дня
//
// ТЗ:
// - отримати масив назв лише відкритих трансляцій
// - порахувати загальну тривалість лише відкритих трансляцій
// - сформувати рекламний рядок у форматі:
//   "Сьогодні доступно 3 відкриті трансляції на 115 хвилин"
// - один із методів коректно працював після передачі в окрему змінну
// - той самий метод для банера можна було застосувати до іншого розкладу
//   без дублювання логіки
//
// У розв'язку обов'язково використай: this, bind, call

// Дані
const todaySchedule = {
  date: '2026-04-09',
  streams: [
    { title: 'Ранкові новини', duration: 30, isOpen: true },
    { title: "Інтерв'ю з розробником гри", duration: 45, isOpen: false },
    { title: 'Огляд нових серіалів', duration: 25, isOpen: true },
    { title: 'Вечірній лайв', duration: 60, isOpen: true },
  ],
};

const tomorrowSchedule = {
  date: '2026-04-10',
  streams: [
    { title: 'Техно-підсумки тижня', duration: 40, isOpen: true },
    { title: 'Закритий Q&A', duration: 50, isOpen: false },
    { title: 'Нічний стрім', duration: 90, isOpen: true },
  ],
};

// Заготовка
const streamScheduler = {
  schedule: todaySchedule,
  // твой код здесь
  getOpenStreamTitles() {
    return this.schedule.streams
      .filter(stream => stream.isOpen)
      .map(stream => stream.title);
  },
  getOpenStreamsDuration() {
    return this.schedule.streams
      .filter(stream => stream.isOpen)
      .reduce((acc, stream) => acc + stream.duration, 0);
  },
  getPromoMessage() {
    const count = this.getOpenStreamTitles().length;
    const minutes = this.getOpenStreamsDuration();
    return `Сьогодні доступно ${count} відкриті трансляції на ${minutes} хвилин`;
  },
};

const boundPromoMessage = streamScheduler.getPromoMessage.bind(streamScheduler);
const getTomorrowPromoMessage = streamScheduler.getPromoMessage.call({
  ...streamScheduler,
  schedule: tomorrowSchedule,
});

// Перевірка
console.log(streamScheduler.getOpenStreamTitles());
// [ 'Ранкові новини', 'Огляд нових серіалів', 'Вечірній лайв' ]

console.log(streamScheduler.getOpenStreamsDuration());
// 115

console.log(streamScheduler.getPromoMessage());
// 'Сьогодні доступно 3 відкриті трансляції на 115 хвилин'

console.log(boundPromoMessage()); // твой код здесь (bind)
// 'Сьогодні доступно 3 відкриті трансляції на 115 хвилин'

// твой код здесь (call)
console.log(getTomorrowPromoMessage);
// 'Сьогодні доступно 2 відкриті трансляції на 130 хвилин'
