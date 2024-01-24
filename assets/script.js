const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let bannerImg = document.querySelector(".banner-img");
let tagLine = document.querySelector("p");
let taglineSpan = document.querySelector("span");

// Recupère ma div des fleches
let maDivArrow = document.querySelectorAll(".arrow img");
console.log(maDivArrow);

// boucle de la div arrow 
for (let i = 0; i < maDivArrow.length;i++) {
	let arrow = maDivArrow[i];
	console.log(arrow);
	// precise sur quelle flèche on clique
	arrow.addEventListener("click", (event) => {
		myarrow = event.target; 
		console.log(myarrow);
		// si on clique sur la fleche droite
		if (myarrow.classList.contains("arrow_right")) {
			// on rajoute 1 a l'index
			index++;
			// si index est égal a la longeur du tableau slides on remet l'index à 0
			if (index == slides.length) {
				index = 0;
			}
			// on change l'image
			bannerImg.setAttribute("src", "./assets/images/slideshow/" + slides[index].image);
			// on change le tagline
			tagLine.innerHTML = slides[index].tagLine;
			// on change le tagline span
			taglineSpan.innerHTML = slides[index].tagLine;
			// on enleve la classe dot_selected
			dots.querySelector(".dot_selected").classList.remove("dot_selected");
			// on ajoute la classe dot_selected
			dots.children[index].classList.add("dot_selected");
		}
		// si on clique sur la fleche gauche
		if (myarrow.classList.contains("arrow_left")) {
			// on enleve 1 a l'index
			index--;
			// si l'index est inferieur à 0 on enleve 1 a l'index
			if (index < 0) {
				index = slides.length - 1;
			}
			// on change l'image
			bannerImg.setAttribute("src", "./assets/images/slideshow/" + slides[index].image);
			// on change le tagline
			tagLine.innerHTML = slides[index].tagLine;
			// on change le tagline span
			taglineSpan.innerHTML = slides[index].tagLine;
			// on enleve la classe dot_selected
			dots.querySelector(".dot_selected").classList.remove("dot_selected");
			// on ajoute la classe dot_selected
			dots.children[index].classList.add("dot_selected");
		}
	})
}

const dots = document.querySelector(".dots");
console.log(dots);
let index = 0;

//  afficher les dots 
function afficherDots() {
	// pour index égal à 0, index plus petit que la longeur du tableau, on ajoute +1 à l'index
	for (let i = 0; i < slides.length; i++) {
		// on crée un span
		let dot = document.createElement("span");
		// on ajoute la classe dot
		dot.classList.add("dot");
		// on ajoute dot au parent dots 
		dots.appendChild(dot);
		// si l'index est égal à l'index, on ajoute la classe dot_selected
		if (i == index) {
			dot.classList.add("dot_selected");
		}
	}
}
// on appel la fonction
afficherDots();





