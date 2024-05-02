"use strict";

// Leggo dall'HTML gli ID che mi servono
const userChoiceId = document.getElementById("user-choice");
let userChoice = userChoiceId.innerHTML;
const pcChoiceId = document.getElementById("pc-choice");
let pcChoice = pcChoiceId.innerHTML;
const gameResultId = document.getElementById("result");
let gameResult = gameResultId.innerHTML;

// Variabili con testo sul vincitore
let tie = "Pari - non ha vinto nessuno";
let userWin = "Ha vinto il giocatore";
let pcWin = "Ha vinto il computer";

// Variabili dei 2 numeri random con stampa in console
const userNumber = Math.floor(Math.random() * 6) + 1;
console.log(userNumber);
const pcNumber = Math.floor(Math.random() * 6) + 1;
console.log(pcNumber);

// I valori degli ID dell'HTML vengono sovrascritti da quelli dei numero random
userChoiceId.innerHTML = userNumber;
pcChoiceId.innerHTML = pcNumber;

// Array con numeri da 1 a 6 con stampa in console
const numbersList = [1, 2, 3, 4, 5, 6];
console.log(numbersList);

/* Ciclo per generare un contatore da 0 a 5 per paragonare i due numeri
  con stampa in console e nell'HTML */
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
