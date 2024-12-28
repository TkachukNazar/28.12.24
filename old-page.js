let counter = 0;

function ticker(count) {
  counter++;
  document.getElementById("time").innerHTML += counter + " ";
  if (counter > count) {
    alert("Сторінка застаріла");
    clearInterval(t);
  }
}
let d = new Date();

document.getElementById("time").innerHTML = "Ви знаходитесь на сторінці: ";
const t = setInterval(ticker, 1000, 10);
