var clicks = 0;
var secretNumber = Math.floor(Math.random() * 21);
console.log("Secret number: " + secretNumber);
let guessDiv = document.getElementsByClassName("guess");
let guessNum = document.getElementById("guess_count");
let userNumber = document.getElementById("userNumber");
let resultText = document.getElementById("result_text");
let submitButton = document.getElementById("submit_guess");
let resetButton = document.getElementById("reset_guess");

guessNum.innerHTML = clicks;

const trial = () => {
  clicks += 1;
  guessNum.innerHTML = clicks;
  if (userNumber.value == secretNumber) {
    toSuccess();
  } else {
    newTrial();
  }
};

const newTrial = () => {
  resultText.innerHTML = "Try again!";
  userNumber.value = "";
};

const toSuccess = () => {
  guessDiv[0].style.background = "green";
  resultText.innerHTML = "Corrent Number!";
  submitButton.disabled = true;
};

const again = () => {
  secretNumber = Math.floor(Math.random() * 21);
  console.log("Secret number: " + secretNumber);

  let guessNum = document.getElementById("guess_count");
  userNumber.value = "";
  guessNum.value = "0";
  resultText.innerHTML = "Start catching...";
  guessDiv[0].style.background = "inherit";
  submitButton.disabled = false;
  clicks = 0;
  guessNum.innerHTML = clicks;
};

submitButton.addEventListener("click", trial);
resetButton.addEventListener("click", again);

if (resetButton) {
  resetButton.addEventListener("click", again);
} else {
  console.log("No resetButton");
}
