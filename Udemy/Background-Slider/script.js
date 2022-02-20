const body = document.body
const slides = document.querySelectorAll(".slide") //NodeList = ähnlich zu Array
const leftBtn = document.getElementById("left")
const rightBtn = document.getElementById("right")

let activeSlide = 0;

rightBtn.addEventListener("click", () => {
    activeSlide++ //Als erstes wird Nodelist aktualisiert

    if(activeSlide > slides.length -1) {
        activeSlide = 0
    }
    setBgToBody()
    setActiveSlide()
})

leftBtn.addEventListener("click", () => {
    activeSlide-- //Als erstes wird Nodelist aktualisiert

    if(activeSlide < 0) {
        activeSlide = slides.length -1 
    }
    setBgToBody()
    setActiveSlide()
})

function setBgToBody() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage //Damit startet es bei 0 
}

setBgToBody();

function setActiveSlide() {
    slides.forEach(slide => { //Damit kann ich die Funktion auf alle Elemente von Slude ausüben
        slide.classList.remove("active")
    })
    slides[activeSlide].classList.add("active")
}

