const cookieButton = document.getElementById("cookieButton");
const makeCookies = document.getElementById("cookieCount");
const deleteCookies = document.getElementById("deleteCookies");
const loadCookies = document.getElementById("loadCookies");
const startIntervalButton = document.getElementById("startInterval");

let cookieCount = 0;
let cookiesPerSecond = 10;
let intervalStarted = false;

startIntervalButton.addEventListener("click", function () {
  if (!intervalStarted) {
    intervalStarted = true;
    setInterval(() => {
      if (cookiesPerSecond > 0) {
        cookieCount += cookiesPerSecond;
        makeCookies.innerHTML = "Cookies: " + cookieCount;

        console.log("Interval running. Current cookie count:", cookieCount);

        localStorage.setItem("cookies", JSON.stringify(cookieCount));
      }
    }, 1000);
  } else {
    console.log("Interval already started!");
  }
});

cookieButton.addEventListener("click", function () {
  cookieCount++;
  makeCookies.innerHTML = "Cookies: " + cookieCount;

  const stringCookies = JSON.stringify(cookieCount);
  localStorage.setItem("cookies", stringCookies);

  console.log(cookieCount);
  console.log(stringCookies);
});

loadCookies.addEventListener("click", function () {
  const savedCookies = localStorage.getItem("cookies");

  if (savedCookies) {
    cookieCount = parseInt(savedCookies);
    makeCookies.textContent = "Cookies: " + savedCookies;
    console.log(cookieCount);
  } else {
    makeCookies.innerHTML = "Cookies: 0";
  }
});

deleteCookies.addEventListener("click", function () {
  localStorage.removeItem("cookies");
  cookieCount = 0;
  makeCookies.innerHTML = "Cookies: " + cookieCount;
  console.log(cookieCount);
});

async function getCookiesUpgrades() {
  try {
    const response = await fetch(
      "https://cookie-upgrade-api.vercel.app/api/upgrades"
    );

    const upgrades = await response.json();
    console.log("Upgrades:", upgrades);

    showUpgrades(upgrades);
  } catch (error) {
    console.error("Error fetching upgrades:", error);
  }
}

getCookiesUpgrades();

function showUpgrades(upgrades) {
  const upgradesContainer = document.getElementById("upgradesContainer");

  upgrades.forEach((upgrade) => {
    const upgradeButton = document.createElement("button");

    upgradeButton.innerText = `${upgrade.name} - Cost: ${upgrade.cost} cookies`;
    upgradeButton.addEventListener("click", () => buyUpgrade(upgrade));

    upgradesContainer.appendChild(upgradeButton);
  });
}

function buyUpgrade(upgrade) {
  if (cookieCount >= upgrade.cost) {
    cookieCount -= upgrade.cost;

    makeCookies.innerHTML = "Cookies: " + cookieCount;

    localStorage.setItem("cookies", cookieCount);
  } else {
    alert("You don't have enough cookies!");
  }
}
