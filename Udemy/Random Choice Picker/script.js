const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");

textarea.focus() //die Focus Methode führt den Cursor direkt auf das Textfeld


textarea.addEventListener("keyup", (event) => { //bei Enter gehts los
    createTags(event.target.value) //das ist eine Funktion

        if(event.key === "Enter") {
            setTimeout(()=> {
                event.target.value = ''
            }, 10)
            randomSelect()
        }
})

// Wir wollen einen Array erstellen, der bei jedem Komma den Array splittet



function createTags (input) { //Funktion von Eventlistener
    const tags = input.split(",").
    filter //filter ist eine sog. High Order Array Method die dafür sorgt, dass man einen Output bekommt, der an Konditionen geknüpft ist 
    (tag => tag.trim()!=="") // Damit filtert man alle Leerzeichen aus, sie werden also nicht in den Array aufgenommen
    .map(tag => tag.trim()) // map() ruft eine bereitgestellte callback Funktion für jedes Element in einem Array der Reihe nach auf und erstellt aus den Ergebnissen ein neues Array
    //Man trimmt damit alles leer ist ()
    tagsEl.innerHTML = ''; //Damit machen wir eine Art tabula Rasa für tagsEl
    tags.forEach(tag => { //Die Loop Methode ist hier sinnvoll --> forEach
        const tagEl = document.createElement('span') 
        tagEl.classList.add('tag');
        tagEl.innerText = tag //wir nehmen also jedes einzelne Element von tagsEl
        tagsEl.appendChild(tagEl) ;//Damit nehmen wir die tagEl als Kinder der tagsEl auf
    })

}

function randomSelect() { //das sorgt dafür dass die tags abwechselnd gehighlighted werden 
    const times = 30 //die Zahl bis es aufhört von span zu spa zu springen
    const interval = setInterval(() => { //unteren Zeilen sind teil von selInterval
        const randomTag = pickRandomTag() //da immer unterschiedliche tags leuchten müssen ... 
        highlightTag(randomTag) //Funktion die unten definiert wird und das Tag highlighted
        setTimeout(() => {   //nach 100ms highlight deaktivieren
        unHighlightTag(randomTag)
        }, 100)
    }, 100); //jede 100. ms

    setTimeout(()=> {  //Um das endlose Highlighting zu beenden
        clearInterval(interval) //Damit stoppt man das Interval
        setTimeout(()=> { 
            const randomTag = pickRandomTag()
            highlightTag(randomTag)
        }, 100)
    }, times * 100)
}

function pickRandomTag () { //die Funktion aus allen Tags eins auszuspucken
    const tags = document.querySelectorAll(".tag")
    return tags[Math.floor(Math.random()* tags.length)] //Math floor um abzurunden, Math.random gibt uns eine Zufallszahl zwischen 0 und 1
}

function highlightTag (tag) { 
    tag.classList.add('highlight');
}

function unHighlightTag (tag) {
    tag.classList.remove('highlight');
}