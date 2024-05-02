"use strict";

const userNumber = Math.floor(Math.random() * 6) + 1;
console.log(userNumber);
const pcNumber = Math.floor(Math.random() * 6) + 1;
console.log(pcNumber);

const numbersList = [1, 2, 3, 4, 5, 6];
console.log(numbersList);

for (let counter = 0; counter < numbersList.length; counter++) {
  if (userNumber == numbersList[counter] && pcNumber == numbersList[counter]) {
    console.log("Pari");
  } else if (
    userNumber == numbersList[counter] &&
    pcNumber < numbersList[counter]
  ) {
    console.log("Vince il giocatore");
  } else if (
    userNumber == numbersList[counter] &&
    pcNumber > numbersList[counter]
  ) {
    console.log("Vince il computer");
  }
}
