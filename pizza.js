"use strict";
let pizzas = [
  ["піца з грибами", 70],
  ["піца з куркою і ананасом", 80],
  ["піца пепероні", 90],
  ["піца чотири сири", 70],
];
function orderingPizza(pizza, size) {
  let str = "";
  if (pizzas[pizza] != undefined) {
    str += `Ваше замовлення: ${pizzas[pizza][0]} - ${size}шт`;
    str += `: ${pizzas[pizza][1] * size} грн\n`;
  }
  alert(str);
}
let orderPizzas = [];
let namePizza = "";
let size;
let order = "";
let s = `Введіть замовлення (через пробіл
    Вид піци:
    1: "піца з грибами",
    2: "піца з куркою і ананасом",
    3: "піца пепероні",
    4: "піца чотири сири")
    Кількість`;
order = prompt(s);
while (Object.values(pizzas)[order.split(" ")[0] - 1] == undefined) {
  alert("Відбулася помилка, повторіть замовлення");
  order = prompt(s);
}
order = order.trim();
if (order.length == 1) {
  namePizza = order;
  size = 1;
} else {
  orderPizzas.push(order);
  let splitted = order.split(" ");
  namePizza = splitted[0];
  size = splitted[1];
}
orderingPizza(namePizza - 1, size);
