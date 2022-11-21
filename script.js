function dropdown() {
	var body = document.querySelector("body");
	var menu = document.getElementById("menu");
	if (menu.style.transform == "scaleY(1)") {
		menu.style.transform = "scaleY(0)";
		menu.style.opacity = "0";
	} else {
		menu.style.transform = "scaleY(1)";
		menu.style.transition = "all 0.5s";
		menu.style.opacity = "1";
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
