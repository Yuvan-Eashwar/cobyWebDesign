// UI vars
const UInavIcon = document.querySelector(".icon");
const UInav = document.querySelector(".responsive");
const UIbody = document.querySelector("body");

// Clicking HamBurger Event
UInavIcon.addEventListener("click", showBar);
UIbody.addEventListener("click", normalBar);
UIbody.addEventListener("mouseover", normalBar);

// showBar()
function showBar() {
  UInav.className += " activate";
}

function normalBar() {}
