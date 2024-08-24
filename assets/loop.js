////// ****** LOOP ****** //////

for	(let i = 0; i <= 3; i++) {
	let dot = document.createElement("div");
	dots.appendChild(dot);
	dot.classList.add ("dot");
	if (index == i) {
		dot.classList.add("dot_selected");
	}
	}
const arrayDots = document.querySelectorAll([".dots .dot"]);
