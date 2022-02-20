const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");


let load = 0 // Startwert ist Null

let int = setInterval(blurring, 30) // Damit wird alle 30 milli Sekunden die Funktion neu geladen

function blurring () {
    load++;
    if (load > 99) {
        clearInterval(int);
    }
    loadText.innerText = `${load}%`;
    loadText.style.opacity = scale(load, 0,100,1,0) // https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
    bg.style.filter = `blur(${scale(load, 0,100,30,0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }
