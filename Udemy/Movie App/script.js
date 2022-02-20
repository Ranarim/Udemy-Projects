const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=2f18aeaee2a167a1944c65127ebdf226&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=2f18aeaee2a167a1944c65127ebdf226&query="'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

getMovies(API_URL)

// Der await Ausdruck lässt async Funktionen pausieren, 
//bis ein Promise erfüllt oder abgewiesen ist, und führt die async 
// danach weiter aus. Wenn die Funktion weiter ausgeführt wird, ist 
// der Wert des await Ausdrucks der Wert des erfüllten Promise.

async function getMovies(url) {
    const res = await fetch (url);
    const data = await res.json();
    showMovies(data.results)
}


// Anzeige der Filme
function showMovies (movies) {
    main.innerHTML = ""; // Damit wird immer erst Tabula Rasa gemacht

    movies.forEach((movie) => { 
        const {title, poster_path, vote_average, overview} = movie 
        // Damit können wir statt movie.title movie.poster_path etc. einfach
        // leichter die Daten aus dem Objekt movie ziehen
        const movieEl = document.createElement("div")
        movieEl.classList.add("movie") 
        movieEl.innerHTML = `
        <img src="${IMG_PATH + poster_path}" alt="${title}">
        <div class="movie-info">
      <h3>${title}</h3>
      <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
      <h3>Overview</h3>
      ${overview}
    </div>
    `
    main.appendChild(movieEl)
    })

    function getClassByRate(vote) {
        if(vote >= 8) {
            return 'green'
        }   else if (vote >= 5) {
            return 'orange'
        }
        else {
            return "red"
        }
    }
}


// Funktion für die Suchleiste

form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    //The preventDefault() method cancels the event if 
    // it is cancelable, meaning that the default action that belongs to 
    // the event will not occur.

    const searchTerm = search.value

    if (searchTerm&&searchTerm !== '') { //Wenn die Eingabe stimmt
        getMovies(SEARCH_API + searchTerm) //Dann bedienen wir uns der Datenbank
        search.value = '' //Damit verschindet das Eingegebene
    } else { 
        window.location.reload() // sonst wird die Seite einfach neu geladen
    }
})

