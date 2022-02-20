const smallCups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained  = document.getElementById("remained");

updateBigCup()

smallCups.forEach((cup, idx) => { //Jedes Element der smallCups wird cup genannt und ihnen wird ein index gegeben
    cup.addEventListener("click", () => highlightCups(idx)) //Wenn man auf eins drückt wird die Funktion ausgeführt
})

function highlightCups (idx) { //Funktion schließt den index mit ein
    if(smallCups[idx].classList.contains("full") && !smallCups[idx] //smallCups ist eine NodeList
    .nextElementSibling.classList.contains("full"))  {     //Wenn das Glas bereits voll ist, und das nächste Glas noch nicht, dann ...  
        idx--
    }       
    
    smallCups.forEach((cup, idx2) => {
        if (idx2 <= idx) { //Damit meint man alle cups hinter dem, das man klickt, da man alle benannt hat
            cup.classList.add("full") //Wenn das zweite Glas das man klickt einen höheren Index hat, dann alles bis dahin füllen
        } else {
            cup.classList.remove("full") //Wenn ein Glas mit einem kleineren Index angeklickt wird, dann werden alle bis dahin entfernt
        }
    })
    updateBigCup()
}

function updateBigCup () { //Damit wollen wir das ganze auf dem große Glas anzeigen lassen
    const fullCups = document.querySelectorAll(".cup-small.full").length
    const totalCups = smallCups.length

    if (fullCups === 0) { // Wenn Null Gläser gefüllt sind ... 
        percentage.style.visibility = "hidden"
        percentage.style.height = 0 //Dann zeige das div percentage nicht an
    }
    else { 
        percentage.style.visibility = "visible" 
        percentage.style.height = `${fullCups/totalCups * 330}px` //Dann fülle genau ... Prozenz von dem ganzen Div cup
        percentage.innerText = `${fullCups/totalCups * 100}%` //Und zeige als Text die Prozent an
    }
    if (fullCups === totalCups) { //Wenn es voll ist ... 
        remained.style.visibility = "hidden"; //Dann zeige den text nicht an
        remained.style.height = 0; // und lass das mit dem weißen Streifen oben
    }
    else {
        remained.style.visibility = "visible" // Sonst darfst du remained anzeigen
        liters.innerText = `${2- (250 * fullCups / 1000)}L` // und wieviel Liter du noch trinken musst
    }
}