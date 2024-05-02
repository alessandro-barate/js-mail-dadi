"use strict";

const searchButton = document.getElementById("search-button");

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
  const inputMail = document.getElementById("mail-input").value;
  for (let index = 0; index < mailAddresses.length; index++) {
    if (inputMail == mailAddresses[index]) {
      console.log("Mail presente");
    }
  }
});
