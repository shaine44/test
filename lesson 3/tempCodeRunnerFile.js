function chooseOptExspenses() {
  for(let j = 1; j <= 3; j++) {
    let expens = +prompt("Статья необязательных расходов", "");
    if ((typeof (expens)) === "string" && 
    (typeof (expens)) != "" && 
    (typeof (expens)) != null) {
      console.log("done");
      appData.optionalExpenses[j] = expens;
    }
  }
}

chooseOptExspenses();