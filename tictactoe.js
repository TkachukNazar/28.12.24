let noughts = 0;
let crosses = 0;
let ticTac = [
  ["", "", "", ""],
  ["", "", "", ""],
  ["", "", "", ""],
  ["", "", "", ""],
];
let rand;
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    rand = Math.floor(Math.random() * 4);
    if (rand == 1) {
      ticTac[i][j] = "x";
    } else if (rand == 2) {
      ticTac[i][j] = "0";
    } else {
      ticTac[i][j] = "";
    }
  }
}

document.write("<table>");
for (let i = 0; i < ticTac.length; i++) {
  document.write("<tr>");
  for (let j = 0; j < ticTac[i].length; j++) {
    document.write(`<td>${ticTac[i][j]}</td>`);
    if (ticTac[i][j] == "x") {
      crosses++;
    } else if (ticTac[i][j] == "0") {
      noughts++;
    }
  }
  document.write("</tr>");
}
document.write("</table>");
document.write(crosses);
document.write("<br>");
document.write(noughts);
