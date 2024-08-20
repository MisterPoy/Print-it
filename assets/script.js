const slides = [
	{	image:"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{	image:"./assets/images/slideshow/slide2.jpg",
		tagLine:"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{	image:"./assets/images/slideshow/slide3.jpg",
		tagLine:"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{	image:"./assets/images/slideshow/slide4.png",
		tagLine:"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let index = 0;
let arrowLeft = document.querySelector("#banner .arrow_left");
let arrowRight = document.querySelector("#banner .arrow_right");
let imageSlidehow = document.querySelector(".banner-img");
let slidehowTexte = document.querySelector("#banner p");

let dots = document.querySelector(".dots");


for	(let i = 0; i <= 3; i++) {
	let dot = document.createElement("div");
	dots.appendChild(dot);
	dot.classList.add ("dot");
	console.log("vérif");
	if (index == i) {
		dot.classList.add("dot_selected");
	}
	}

	
const arrayDots = document.querySelectorAll([".dots .dot"]);



arrowRight.addEventListener("click", function () {
	arrayDots[index].classList.remove("dot_selected");
	index++;	
	if (index >= slides.length) {
		index = 0;
	}
	arrayDots[index].classList.add("dot_selected");
	imageSlidehow.src = slides[index].image;
	slidehowTexte.innerHTML = slides[index].tagLine;
	console.log("J'ai cliquer sur la flèche de droite");
});


arrowLeft.addEventListener("click", function () {
	arrayDots[index].classList.remove("dot_selected");
	index--;
	if (index < 0) {
		index = slides.length -1;
	}
	arrayDots[index].classList.add("dot_selected");
	imageSlidehow.src = slides[index].image;
	slidehowTexte.innerHTML = slides[index].tagLine;
	console.log("J'ai cliquer sur la flèche de gauche");
});
