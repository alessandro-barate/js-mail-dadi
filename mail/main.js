"use strict";

const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", function () {
  const inputMail = document.getElementById("mail-input").value;
  //console.log(inputMail);
});

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

if (mailAddresses === inputMail) {
  console.log("Mail presente");
}
