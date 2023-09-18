const num1 = document.querySelector(".num1");
const num2 = document.querySelector(".num2");
const num3 = document.querySelector(".num3");
const num4 = document.querySelector(".num4");
const num5 = document.querySelector(".num5");
const num6 = document.querySelector(".num6");
const num7 = document.querySelector(".num7");

const btnStart = document.querySelector(".btn-start");

let lotto = [];

function start() {
  while (lotto.length < 7) {
    let randomNum = parseInt(Math.random() * 45 + 1);

    if (lotto.indexOf(randomNum) == -1) {
      lotto.push(randomNum);
    }
  }
  lotto.sort((a, b) => a - b);

  num1.innerText = lotto[0];
  num2.innerText = lotto[1];
  num3.innerText = lotto[2];
  num4.innerText = lotto[3];
  num5.innerText = lotto[4];
  num6.innerText = lotto[5];
  num7.innerText = lotto[6];
}

btnStart.addEventListener("click", start);
