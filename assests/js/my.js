var extraMenu = document.getElementById("menuExtra"); // Extra Menu
var extraMenuIcons = document.getElementById("extraMenuIcons"); // Extra Menu icons
var extraMenuClose = document.getElementById("extraMenuCloseBtn"); // Extra Menut Close Button

//

function extraMenufunc() {
  if (window.getComputedStyle(extraMenu).display == "none") {
    extraMenu.style.display = "flex";
  }
  else if (extraMenu.style.display === "flex") {
    extraMenu.style.display = "none";
  }
}

extraMenuIcons.onclick = function () {
  extraMenufunc();
}

extraMenuClose.onclick = function () {
  extraMenu.style.display = "none";
}

