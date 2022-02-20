const counters = document.querySelectorAll(".counter"); //Das gibt uns eine Node Liste, welche ähnllich zu einem Array ist

counters.forEach(counter => {
    counter.innerText = "0"; 

    const updateCounter = () => {
        const target = +counter.getAttribute("data-target"); //Das Plus lässt die Zahl nicht mehr als String sondern als Nummer erkennen
        const c = +counter.innerText // Die Variable beschreibt einfach den Inhalt des Elements counter

        const increment = target / 200 //Egal welche Nummer wir eingeben, es wird immer nur durch 200 geteilt

            if(c<target) {
                counter.innerText = `${Math.ceil(c+increment)}` //ceil rundet die Zahl auf
                setTimeout(updateCounter, 1) // Die 1 steht für eine Milisekunde
            }
            else {
                counter.innerText = target;
            }

    }
    updateCounter();
})