const button0 = document.getElementById("0");
const button1 = document.getElementById("1");
const button2 = document.getElementById("2");
const button3 = document.getElementById("3");
const button4 = document.getElementById("4");
const button5 = document.getElementById("5");
const button6 = document.getElementById("6");
const button7 = document.getElementById("7");
const button8 = document.getElementById("8");
const winnerText = document.getElementById("demo");
const restartButton = document.getElementById("restart");
const playerTurn = document.getElementById("player");
let sign = "X";
const data = [
  "null",
  "null",
  "null",
  "null",
  "null",
  "null",
  "null",
  "null",
  "null",
];

const swapSign = () => {
  if (sign === "X") {
    return "O";
  } else {
    return "X";
  }
};

const checkWinner = () => {
  if (
    ((data[0] === data[1] && data[1] === data[2]) ||
      (data[0] === data[3] && data[3] === data[6]) ||
      (data[0] === data[4] && data[4] === data[8])) &&
    data[0] !== "null"
  ) {
    return true;
  } else if (
    (data[1] === data[4] && data[4] === data[7] && data[1] !== "null") ||
    (data[2] === data[5] && data[5] === data[8] && data[2] !== "null") ||
    (data[2] === data[4] && data[4] === data[6] && data[2] !== "null")
  ) {
    return true;
  } else if (
    (data[3] === data[4] && data[4] === data[5] && data[3] !== "null") ||
    (data[6] === data[7] && data[7] === data[8] && data[6] !== "null")
  ) {
    return true;
  }
  return false;
};

const reset = () => {
  for (let i = 0; i < 9; i++) {
    document.getElementById(`${i}`).innerHTML = "";
    data[i] = "null";
  }
  winnerText.innerHTML = "";
  playerTurn.innerHTML = "X will play first.";
  if (
    restartButton.className === "btn btn-success" ||
    restartButton.className === "btn btn-danger"
  ) {
    restartButton.className = "btn btn-info";
    restartButton.innerHTML = "Restart";
  }
  sign = "X";
};

const printSign = (e) => {
  let idx = e.target.id;
  //   console.log(idx);
  if (data[idx] !== "null" || winnerText.innerHTML !== "") {
    return;
  }
  document.getElementById(`${idx}`).innerHTML = sign;
  data[idx] = sign;
  // console.log(data);
  if (checkWinner()) {
    winnerText.innerHTML = `${sign} WON THE GAME!`;
    winnerText.style.marginLeft = "310px";
    playerTurn.innerHTML = "";
    restartButton.className = "btn btn-success";
    restartButton.innerHTML = "Play Again";
    return;
  }
  sign = swapSign();
  playerTurn.innerHTML = `It's ${sign}'s turn.`;
  if (!data.includes("null")) {
    winnerText.innerHTML = "IT'S A TIE!";
    playerTurn.innerHTML = "";
    winnerText.style.marginLeft = "310px";
    restartButton.className = "btn btn-danger";
    restartButton.innerHTML = "Try Again";
  }
};

button0.addEventListener("click", printSign);
button1.addEventListener("click", printSign);
button2.addEventListener("click", printSign);
button3.addEventListener("click", printSign);
button4.addEventListener("click", printSign);
button5.addEventListener("click", printSign);
button6.addEventListener("click", printSign);
button7.addEventListener("click", printSign);
button8.addEventListener("click", printSign);
restartButton.addEventListener("click", reset);
