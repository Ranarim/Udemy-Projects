function appendOperation(operation) {
    document.getElementById("resultarea").innerHTML += operation;
}

function calculateResult() {
    let container = document.getElementById("resultarea")
    let result = eval(container.innerHTML) // Man kann ne Variable auch als Brief verstehen
    container.innerHTML = result;
}

function deleteLast() {
    let container = document.getElementById("resultarea")
    if (container.innerHTML.endsWith(' ')) {
        container.innerHTML = container.innerHTML.slice(0, -3)
    } else {
        container.innerHTML = container.innerHTML.slice(0, -1)
    }
    //Durch das -1 wird die letzte Zahl gelöscht. Die slice Methode extrahiert einen Teilbereich eines Strings und gibt einen neuen String zurück. Nach dem Schema str.slice(AnfangIndex[, EndIndex])

}

// Wie kann man diese Applikation veröffentlichen??

//1. Auf Pixabay kann man ein Icon für die Website besorgen

//2. Auf simicart.com/manifest-generator.html gehen, da kann man erstmal alle Informationen angeben, die man für eine App benötigt. Dann nachdem man alles ausgefüllt geht man auf generate Manifest 

//3. Die Dateien die man runtergeladen werden müssen dann in den Ordner extrahiert werden

// 4. in manifest.webmanifest stehen nun die infos wie name description scope etc. 

// 5. Diese Datei muss nur noch in die Index.html Datei in den meta Bereich eingebettet werden

// 6. in Netlify kann man dann die Datei einfach einfügen  

//7. Die Internetadresse, die jetzt online ist, am  Handy öffnen, und dann die Website zum starbildschirm hinzufügen 