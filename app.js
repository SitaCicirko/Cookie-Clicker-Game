const cookieButton = document.getElementById("cookieButton");
const makeCookies = document.getElementById("cookieCount");
const deleteCookies = document.getElementById("deleteCookies");
const loadCookies = document.getElementById("loadCookies");

let cookieCount = 0;

cookieButton.addEventListener("click", function () {
  cookieCount++;
  makeCookies.innerHTML = "Cookies: " + cookieCount;

  const stringCookies = JSON.stringify(cookieCount);
  localStorage.setItem("cookies", stringCookies);
});

loadCookies.addEventListener("click", function () {
  const savedCookies = localStorage.getItem("cookies");

  if (savedCookies) {
    cookieCount = parseInt(savedCookies);
    makeCookies.textContent = "Cookies: " + savedCookies;
  } else {
    makeCookies.innerHTML = "Cookies: 0";
  }
});

deleteCookies.addEventListener("click", function () {
  localStorage.removeItem("cookies");
  cookieCount = 0;
  makeCookies.innerHTML = "Cookies: " + cookieCount;
});
