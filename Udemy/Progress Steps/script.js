// Hier definieren wir die wichtigen HTML Elemente
const progress = document.getElementById("progress"); //Damit definieren wir den blauen Faden
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle"); // Da wir ja mehrere Circle haben

let currentActive = 1; //Das ist der Startwert der gefüllten bzw. aktivierten Kreise

next.addEventListener("click", () => {
    currentActive++;

    if (currentActive > circles.length) { //Damit behandeln wir es wie einen Array
        currentActive = circles.length; //Damit geht es nicht weiter als 4
    }
    update();
})


prev.addEventListener("click", () => { 
    currentActive--;

    if (currentActive < 1) { 
        currentActive = 1; //Da wir nicht ins negative wollen
    }
    update();
})

function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add("active")
        } else {
            circle.classList.remove("active")
        }
    })
    const actives = document.querySelectorAll(".active")
    progress.style.width = ((actives.length -1) / (circles.length -1))*100+"%"; //Das ist wichtig, man kann so gezielt auf das stylesheet zugreifen

    if (currentActive === 1) {
        prev.disabled = true; 
    }
    else if (currentActive === circles.length) {
            next.disabled = true;
        }
    else {
        prev.disabled = false;
        next.disabled = false;
    }
    }

