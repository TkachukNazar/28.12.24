let length1 = +prompt("Довжина поля: ");
while (length1 <= 0 || isNaN(length1)) {
  alert("Неправильний ввід даних");
  length1 = +prompt("Довжина поля: ");
}

let length2 = +prompt("Довжина корабля: ");
while (length2 <= 0 || isNaN(length2)) {
  alert("Неправильний ввід даних");
  length2 = +prompt("Довжина поля: ");
}

while (length1 < length2) {
  alert(
    "Неправильний ввід даних. Довжина поля повинна бути більшою за довжину корабля"
  );
  length1 = +prompt("Довжина поля: ");
  length2 = +prompt("Довжина корабля: ");
}
let randomLoc = Math.floor(Math.random() * (length1 - length2 + 1));

let ship = [];
for (let i = 0; i < length1; i++) {
  ship[i] = 0;
}
ship[randomLoc] = 1;
for (let i = 1; i < length2; i++) {
  randomLoc++;
  ship[randomLoc] = 1;
}
// alert(ship);
console.log(ship);
let arr = [];
let guess;
let hits = 0;
let guesses = 0;
let isSunk = false;

while (isSunk == false) {
  guess = +prompt(
    `Ваш постріл! (введіть число від 0 до ${length1}): (Для виходу: -1)`
  );
  if (guess < 0 || guess > length1 || isNaN(guess)) {
    if (guess == -1) {
      break;
    } else {
      alert("Введіть правильний номер!");
    }
  } else {
    guesses++;
    if (ship[guess] == -1) alert("Ви вже влучали в цей корабель");
    else if (ship[guess] == 1) {
      ship[guess] = -1;
      alert("Влучив!");
      hits++;
      alert(`Влучення: ${hits}`);
      if (hits == length2) {
        isSunk = true;
        alert("Ви потопили корабель!");
      }
    } else {
      alert("Промах!");
    }
  }
}
alert("Гру закінчено!");
