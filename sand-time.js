function ticker() {
  counter--;
  document.getElementById("time").innerHTML += counter + " ";
  if (counter <= 0) {
    clearInterval(t);
    alert("Час закінчився");
  }
}
const sand = +prompt("Введіть кількість: ");
let d = new Date();
document.getElementById("time").innerHTML += sand + " ";
let counter = sand;
const t = setInterval(ticker, 1000);

function stop() {
  document.getElementById("time").innerHTML += sand;
  ticker();
  clearInterval(t);
}
setTimeout(stop, 100000);
