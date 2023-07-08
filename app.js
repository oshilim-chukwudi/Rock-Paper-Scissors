const computerchoiceDisplay = document.getElementById("Computer-choice");
const userchoiceDisplay = document.getElementById("Your-choice");
const ResultDisplay = document.getElementById("Result");
const possiblechoices = document.querySelectorAll("button");

let userchoice;
let computerchoice;
possiblechoices.forEach((possiblechoice) =>
  possiblechoice.addEventListener("click", (e) => {
    userchoice = e.target.id;
    userchoiceDisplay.innerHTML = userchoice;

    generatecomputerchoice();
    getResult();
  })
);

function generatecomputerchoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  console.log(randomNumber);

  if (randomNumber === 1) {
    computerchoice = "Rock";
  }
  if (randomNumber === 2) {
    computerchoice = "Scissors";
  }
  if (randomNumber === 3) {
    computerchoice = "Paper";
  }
  computerchoiceDisplay.innerHTML = computerchoice;
}

function getResult() {
  if (computerchoice === userchoice) {
    Result = "its a Draw";
  }
  if (computerchoice === "Rock" && userchoice === "paper") {
    Result = "You Won!";
  }
  if (computerchoice === "Rock" && userchoice === "Scissors") {
    Result = "You lost!";
  }
  if (computerchoice === "Paper" && userchoice === "Scissors") {
    Result = "You Won!";
  }
  if (computerchoice === "Paper" && userchoice === "Rock") {
    Result = "You Lost!";
  }
  if (computerchoice === "Scissors" && userchoice === "Rock") {
    Result = "You Won!";
  }
  if (computerchoice === "Scissors" && userchoice === "Paper") {
    Result = "You Won!";
  }
  ResultDisplay.innerHTML = Result;
}
