let res = document.getElementById("res");
let resFirst = document.getElementById("resFirst");
let resSecond = document.getElementById("resSecond");
let resWiner = document.getElementById("resWiner");
let rollButton = document.getElementById("rollButton");
let resTurn = document.getElementById("resTurn");
let tur = document.getElementById("turn");
let fcolor = document.getElementById("fcolor");
let scolor = document.getElementById("scolor");

let firstPlayer = 0;
let secondPlayer = 0;
let turnScore = 0;
let turn = 1;

function RollDice() {
  if (turn == 1) {
    var number = Math.ceil(Math.random() * 6);
    turnScore += number;
    res.innerHTML = number;
    if (number == 1) {
      turn = 2;
      turnScore = 0;
      console.log("Second Player Turn");
      tur.innerHTML = turn;
      scolor.style.background = "red";
      fcolor.style.background = "blue";
      return;
    }
    resTurn.innerHTML = turnScore;
    console.log("For first: " + number);
  }
  if (turn == 2) {
    var number = Math.ceil(Math.random() * 6);
    turnScore += number;
    res.innerHTML = number;
    if (number == 1) {
      turn = 1;
      turnScore = 0;
      console.log("First Player Turn");
      tur.innerHTML = turn;
      fcolor.style.background = "red";
      scolor.style.background = "blue";
      return;
    }
    resTurn.innerHTML = turnScore;
    console.log("For second: " + number);
  }
}

function NewGame() {
  firstPlayer = 0;
  secondPlayer = 0;
  turnScore = 0;
  turn = 1;
  number = "x";
  res.innerHTML = number;
  resFirst.innerHTML = firstPlayer;
  resSecond.innerHTML = secondPlayer;
  resTurn.innerHTML = turnScore;
  resWiner.innerHTML = "";
  rollButton.disabled = false;
  fcolor.style.background = "red";
  scolor.style.background = "blue";
}

function Hold() {
  if (turn == 1) {
    firstPlayer += turnScore;
    resFirst.innerHTML = firstPlayer;
    turnScore = 0;
    turn = 2;
    console.log("Second turn");
    tur.innerHTML = turn;
    scolor.style.background = "red";
    fcolor.style.background = "blue";
    if (firstPlayer >= 100) {
      resWiner.innerHTML = "First Player Win";
      rollButton.disabled = true;
      fcolor.style.background = "yellow";
      return;
    }
    return;
  }
  if (turn == 2) {
    secondPlayer += turnScore;
    resSecond.innerHTML = secondPlayer;
    turnScore = 0;
    turn = 1;
    console.log("First turn");
    tur.innerHTML = turn;
    fcolor.style.background = "red";
    scolor.style.background = "blue";
    if (secondPlayer >= 100) {
      resWiner.innerHTML = "Second Player Win";
      rollButton.disabled = true;
      scolor.style.background = "yellow";
      return;
    }
    return;
  }
}
