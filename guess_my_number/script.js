"use strict";

let secrecNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const setMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const setScore = function (score) {
  document.querySelector(".score").textContent = score;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // console.log(guess, typeof guess);

  //   when there is no input
  if (!guess) {
    setMessage("❗ No Number!");

    // when player wins
  } else if (guess === secrecNumber) {
    setMessage("🎉 Corrext Number!");
    document.querySelector(".number").textContent = secrecNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // when guess is not correct
  } else if (guess !== secrecNumber) {
    if (score > 1) {
      setMessage(guess > secrecNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      setScore(score);
    } else {
      setScore(0);
      setMessage("💥 You lose the game!");
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secrecNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  setMessage("Start guessing...");
  setScore(score);
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".nubmer").style.width = "15rem";
});
