const jokeEl = document.getElementById("joke"); // 1. Elemente definieren
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener('click', generateJoke) // 2. EventListener definieren

generateJoke(); // Damit wird beim Laden der Seite ein Witz im div angezeigt
//USING ASYNC/AWAIT 
async function generateJoke() {         // asyn function ist moderner als .then()
    const config = {    
        headers: {                     
            Accept: "application/json"
        },
    }
   const response = await fetch('https://icanhazdadjoke.com', config)

   const data = await response.json()

   jokeEl.innerHTML = data.joke; // Damit definiert man was genau aus dem .json Datensatz entnommen werden soll, nämlich nur das ELement joke

}

// USING .then()
/* jokeBtn.addEventListener('click', generateJoke)

generateJoke();

function generateJoke() {
    const config = {
        headers: {
            Accept: "application/json"
        },
    }
    fetch('https://icanhazdadjoke.com', config)
    .then((res) => res.json())
    .then((data) => {
        jokeEl.innerHTML = data.joke
    })
    */