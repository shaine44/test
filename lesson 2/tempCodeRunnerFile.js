let i = 0;
while (i < 2) {
  let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
      b = prompt("Во сколько это обойдется?", "");
  
if ( (typeof(a))=== "string" && (typeof(a)) != null && (typeof(b)) != null
   && a!= "" && b != "" && a.length < 50) {
      console.log("done");
      appData.expenses[a] = b;
      break;
  } 
   i++
}

