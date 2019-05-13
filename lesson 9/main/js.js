let age = document.getElementById('age');


function showUser(surname, name) {
  console.log(this.name);
  alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}

showUser.apply(age, ["Путин", "John"]);