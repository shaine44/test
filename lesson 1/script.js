let money = prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");

console.log(money);
console.log(time);

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};

let question1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    question2 = prompt("Введите сумму которые хотите отложить?", ""),
    question3 = prompt("Введите сумму на прочие расходы", ""),
    question4 = prompt("Введите сумму которую хотите подарить?", "");

appData.expenses[question1] = question2;
appData.expenses[question3] = question4;

console.log(appData);
alert(appData.budget / 30);

