"use strict";

const searchButton = document.getElementById("search-button");
const resetButton = document.getElementById("reset");

let searchResult = document.getElementById("search-result");
let currentText = searchResult.innerHTML;

const mailAddresses = [
  "ale.barat@gmail.com",
  "alebarat@gmail.com",
  "ab@gmail.com",
  "aleb@gmail.com",
  "alessandrobarate@gmail.com",
  "alessandrob@gmail.com",
  "abarate@gmail.com",
];

console.log(mailAddresses);

let canAccess = false;

searchButton.addEventListener("click", function () {
  let inputMail = document.getElementById("mail-input").value;

  for (let index = 0; index < mailAddresses.length; index++) {
    if (inputMail == mailAddresses[index]) {
      canAccess = true;
      console.log("Mail trovata!");
      const successSearch = "La tua mail è nella lista";
      searchResult.innerHTML = successSearch;
      break;
    }

    if (inputMail != mailAddresses[index]) {
      console.log("Mail non trovata!");
      const failureSearch = "La tua mail non è nella lista";
      searchResult.innerHTML = failureSearch;
    } //TOFIX: Se aggiungo questo mi stampa sempre il messaggio di
    //failure a meno che la mail da cercare sia l'ultima
    //dell'array */
  }
});

// Bottone di reset per cancellare la mail scritta nel campo di input
resetButton.addEventListener("click", function () {
  document.getElementById("mail-input").value = "";
  searchResult.innerHTML = "";
});
