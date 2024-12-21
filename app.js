const cookieButton = document.getElementById("cookieButton");
const makeCookies = document.getElementById("cookieCount");

let cookieCount = 0;

cookieButton.addEventListener("click", function () {
  cookieCount++;
  makeCookies.innerHTML = "Cookies: " + cookieCount;
});
