////// ****** FUNCTIONS ****** //////

function moveRight(){
    arrowRight.addEventListener("click", function() {
        arrayDots[index].classList.remove("dot_selected");
        index++;	        
        if (index >= slides.length) {
            index = 0;
        }
        arrayDots[index].classList.add("dot_selected");
        imageSlidehow.src = slides[index].image;
        slidehowTexte.innerHTML = slides[index].tagLine;
    });
}
    
function moveLeft (){
    arrowLeft.addEventListener("click", function () {
        arrayDots[index].classList.remove("dot_selected");
        index--;
        if (index < 0) {
            index = slides.length -1;
        }
        arrayDots[index].classList.add("dot_selected");
        imageSlidehow.src = slides[index].image;
        slidehowTexte.innerHTML = slides[index].tagLine;
    });
}
    
function moveCarousel (){
    moveLeft();
    moveRight();
}