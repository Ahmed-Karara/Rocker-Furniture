function dropdown() {
  var menu = document.getElementById("menu");
  if (menu.style.left == "0%") {
    menu.style.left = "-50%";
  } else {
    menu.style.left = "0%";
    menu.style.transition = "all 0.5s";
  }
}

function dropmenu() {
  var body = document.querySelector("body");
  var menu = document.getElementById("menu");
  if (body.style.width <= "880px") {
    dropdown();
  }
  if (body.style.width > "880px" && menu.style.transform == "scaleY(0)") {
    menu.style.transform = "scaleY(1)";
    menu.style.opacity = "1";
  }
}
