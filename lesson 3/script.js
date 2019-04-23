let money, time;

function start() {
  money = +prompt("Ваш бюджет на месяц?", "");
  time = prompt("Введите дату в формате YYYY-MM-DD", "");

  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?", "");
  }
}
start();

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true
};

function chooseExpenses() {
  for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько это обойдется?", "");
    if ( (typeof(a))=== "string" && (typeof(a)) != null && (typeof(b)) != null
     && a!= "" && b != "" && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    } else {
        i = i - 1;
    } 
  }
}
chooseExpenses();

function detectDayBudget () {
  appData.moneyPerDay = (appData.budget / 30).toFixed();
}

detectDayBudget();

alert("Ежедневный бюджет: " + appData.moneyPerDay);
// уровень достатка

function detectLevel() {
  if(appData.moneyPerDay < 100) {
  console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
  console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
  console.log("Высокий уровень достатка");
} else {
  console.log("Произошла ошибка");
}
}

detectLevel();

function checkSavings() {
  if (appData.savings == true) {
    let save = +prompt("Какова сумма накоплений?", ""),
        percent = +prompt("Под какой процент?", "");

    appData.monthIncome = save/100/12*percent;
    alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
  }
}

checkSavings();



function chooseOptExspenses() {
  for(let j = 1; j <= 3; j++) {
    let expens = prompt("Статья необязательных расходов", "");
    if (typeof (expens) === "string" && 
    typeof (expens) != "" && 
    typeof (expens) != null) { 
      console.log("done");
      appData.optionalExpenses[j] = expens;
    } else {
      j--;
    }
  }
}

chooseOptExspenses();