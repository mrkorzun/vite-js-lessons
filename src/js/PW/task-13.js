// Магазин нараховує бонуси: звичайний клієнт отримує 5% від суми покупок, преміум — 10%.
// Клас сам знає формулу через this.

// Дані
// Дмитро: витратив 5000, не преміум
// Олена: витратив 5000, преміум

class customer {
  constructor(name, totalSpent, isPremium) {
    ((this.name = name),
      (this.totalSpent = totalSpent),
      (this.isPremium = isPremium));
  }
  getBonus() {
    const rate = this.isPremium ? 0.1 : 0.05;
    return this.totalSpent * rate;
  }
  getSummary() {
    return `${this.name}: бонус ${this.getBonus()} грн`;
  }
}

const c1 = new customer('Дмитро', 5000, false);
const c2 = new customer('Олена', 5000, true);

// Перевірка
console.log(c1.getSummary());
// "Дмитро: бонус 250 грн"
console.log(c2.getSummary());
// "Олена: бонус 500 грн"

// ==== TASK 2 ====
// Клас BankAccount зберігає баланс у приватному полі.
// Ззовні до нього не можна дістатися напряму — тільки через методи.
// Депозит спрацьовує лише для позитивних сум, зняття — тільки якщо грошей достатньо.

class BankAccount {
  #balance = '1000';
  constructor(balance) {
    this.#balance = balance;
  }
  get balance() {
    return this.#balance;
  }

  deposit(amount) {
    if (amount <= 0) return;
    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      return `Now enough many on your balance`;
    }
    if (amount < 0) {
      return 'Not correct!';
    }
    this.#balance -= amount;
  }
}

const acc = new BankAccount(1000);
// console.log(acc);

// Дані
// Початковий баланс: 1000 грн
// Операції: поповнити 500, зняти 200, зняти 2000 (недостатньо), зняти -50 (невалідно)
// Перевірка
console.log(acc.balance); // 1000
acc.deposit(500);
console.log(acc.balance); // 1500
acc.withdraw(200);
console.log(acc.balance); // 1300
console.log(acc.withdraw(2000)); // нічого не відбувається
console.log(acc.balance); // 1300
console.log(acc.withdraw(-50)); // нічого не відбувається
console.log(acc.balance); // 1300

// ==== TASK 3 ====
// Клас ProductCard має метод handleBuy.
// Його зберігають у змінну і викликають пізніше як звичайну функцію — this губиться.
// Зафіксуй контекст так, щоб метод завжди знав про свій товар.

// Дані
// Назва: "iPhone 15", ціна: 42000 грн
// Перевірка
// handler();
// "Додано до кошика: iPhone 15 за 42000 грн"

// ==== TASK 4 ====
// Розроби клас Calculator, який дозволяє виконувати арифметичні
//  операції над числом за допомогою методів класу, підтримуючи
// ланцюжковий виклик (method chaining).
//
// Вимоги до класу Calculator
// - Метод number(value)
// Встановлює початкове значення для наступних обчислень.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод getResult, Повертає поточний результат усіх операцій.
// Не змінює значення, просто повертає його.

// - метод add - Додає value до поточного значення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод subtract - Віднімає value від поточного значення. Повертає this.

// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод multiply -Множить поточне значення на value. Повертає this.

// Об'єкт класу може проводити послідовні операції у вигляді ланцюжка

// Приклад використання:
class Calculator {
  number(value) {
    this.value = value;
    return this;
  }
  add(value) {
    this.value += value;
    return this;
  }
  subtract(value) {
    this.value -= value;
    return this;
  }
  multiply(value) {
    this.value *= value;
    return this;
  }
  divide(value) {
    if (value === 0) {
      console.log(`Hеможливe ділення`);
      return this;
    }
    this.value /= value;
    return this;
  }
  getResult(value) {
    return this;
  }
}
const calc = new Calculator();

const result = calc
  .number(10) // Встановлюємо початкове значення 10
  .add(5) // Додаємо 5 (10 + 5 = 15)
  .subtract(3) // Віднімаємо 3 (15 - 3 = 12)
  .multiply(4) // Множимо на 4 (12 * 4 = 48)
  .divide(2) // Ділимо на 2 (48 / 2 = 24)
  .getResult(); // Отримуємо результат: 24

console.log(calc); // 24
