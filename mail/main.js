"use strict";

const searchButton = document.getElementById("search-button");
const resetButton = document.getElementById("reset");

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

searchButton.addEventListener("click", function () {
  let inputMail = document.getElementById("mail-input").value;
  let searchResult = document.getElementById("search-result");
  let currentText = searchResult.innerHTML;
  for (let index = 0; index < mailAddresses.length; index++) {
    if (inputMail == mailAddresses[index]) {
      console.log("Mail trovata!");
      const successSearch = "La tua mail è nella lista";
      searchResult.innerHTML = successSearch;
    }

    if (inputMail !== mailAddresses[index]) {
      console.log("Mail non trovata!");
      const failureSearch = "La tua mail non è nella lista";
      searchResult.innerHTML = failureSearch;
    }
  }
});

// Bottone di reset per cancellare la mai scritta nel campo di input
resetButton.addEventListener("click", function () {
  document.getElementById("mail-input").value = "";
});
