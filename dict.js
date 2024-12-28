const words = {
  apple: "яблуко",
  house: "будинок",
  mouse: "миша",
};
let mistakes = 0;
let correctAnswers = 0;

const n = prompt("Input count of seccions");
label: for (let i = 0; i < n; i++) {
  for (const key in words) {
    alert(key);
    let input = prompt("Input translation of word" + key);
    if (input == "!" || input == "") {
      alert("!!!");
      break label;
    }
    if (input == words[key]) {
      alert(":)");
      correctAnswers++;
    } else {
      alert(":(");
      mistakes++;
    }
  }
  alert(`correct answers: ${correctAnswers} mistakes: ${mistakes}`);
}
