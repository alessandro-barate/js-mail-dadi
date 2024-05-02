"use strict";

const userChoiceId = document.getElementById("user-choice");
const userChoice = userChoiceId.innerHTML;
const pcChoiceId = document.getElementById("pc-choice");
const pcChoice = pcChoiceId.innerHTML;
const gameResultId = document.getElementById("result");
let gameResult = gameResultId.innerHTML;
let tie = "Pari - non ha vinto nessuno";
let userWin = "Ha vinto il giocatore";
let pcWin = "Ha vinto il computer";

const userNumber = Math.floor(Math.random() * 6) + 1;
console.log(userNumber);
const pcNumber = Math.floor(Math.random() * 6) + 1;
console.log(pcNumber);

const numbersList = [1, 2, 3, 4, 5, 6];
console.log(numbersList);

for (let counter = 0; counter < numbersList.length; counter++) {
  if (userNumber == numbersList[counter] && pcNumber == numbersList[counter]) {
    gameResultId.innerHTML = tie;
    console.log("Pari");
  } else if (
    userNumber == numbersList[counter] &&
    pcNumber < numbersList[counter]
  ) {
    gameResultId.innerHTML = userWin;
    console.log("Vince il giocatore");
  } else if (
    userNumber == numbersList[counter] &&
    pcNumber > numbersList[counter]
  ) {
    gameResultId.innerHTML = pcWin;
    console.log("Vince il computer");
  }
}
