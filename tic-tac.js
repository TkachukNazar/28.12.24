let tick = true;
let counter = 0;
let d = new Date();

function ticker(count) {
  if (tick) {
    document.write("Тік ");
    tick = false;
  } else {
    document.write("Так ");
    tick = true;
  }
  let d1 = new Date();
  let dif = (d1.getTime() - d.getTime()) / 1000;
  if (dif >= count) {
    clearInterval(t);
  }
}
const c = +prompt("Введіть кількість секунд: ");
const t = setInterval(ticker, 1000, c);

function stop() {
  ticker();
  clearInterval(t);
}
setTimeout(stop, 10000);
