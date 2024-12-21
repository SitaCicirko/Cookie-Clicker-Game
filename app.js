const cookieButton = document.getElementById("cookieButton");
const makeCookies = document.getElementById("cookieCount");

let cookieCount = 0;
let cookiesAdded = 1;

cookieButton.addEventListener("click", function () {
  cookieCount += cookiesAdded;
  makeCookies.innerHTML = cookieCount;
});
