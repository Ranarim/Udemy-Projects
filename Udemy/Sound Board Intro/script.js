const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']; // Hier wird ein Array erstellt

sounds.forEach(sound => { // Loop through
    const btn = document.createElement('button'); // damit entsteht ein Element, der auch im HTML erscheint
    btn.classList.add('btn'); // Dieses Element ist ein Button mit der Klasse "btn"

    btn.innerText = sound; //der Inhalt des Buttons sind die Sound Elemente

btn.addEventListener('click', () => { //wenn man klickt, dann folgende Funktion ...
    stopSongs();
    
    document.getElementById(sound).play() // Es wird also immer der Sound gespielt der geklickt wird
})

document.getElementById('buttons').
    appendChild(btn)
})

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound);

        song.pause();  // Man kann das Audio nur pausieren, nicht stoppen
        song.currentTime = 0; // Damit wird die Audiodatei auf Null zurückgesetzt
    })
}
