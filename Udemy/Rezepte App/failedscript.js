/* Was ist fetch? Der grundlegende XHR-Request sendet einen Request zum 
Server und liefert die Daten an die Anwendung. Javascript 
Fetch geht per se von der einfachsten Einstellung (GET) aus 
und führt diesen Request im Hintergrund ohne weiteren Code aus.*/

const meals = document.getElementById("meals");

getRandomMeal();

async function getRandomMeal () {
    const resp = await fetch("https://www.themealdb.com/api/json/v1/1/random.php"
    ); /*await fetch starts an HTTP request to 
    'URLcode.php' URL. Because the await keyword is present, 
    the asynchronous function is paused until the request completes.*/
    const respData = await resp.json();
    /*response.json()  is a method on the Response object that 
    lets you extract a JSON object from the response. The method 
    returns a promise, so you have to wait for the JSON: await 
    response.json().*/

    const randomMeal = respData.meals[0];
    addMeal(randomMeal, true);

}
    /*Fetch liefert das Ergebnis des Requests in einem Fetch-Objekt 
    zurück. Sobald der Request ausgeführt und das Fetch-Objekt 
    erzeugt ist, kann das Ergebnis asynchron mit einem Promise 
    behandelt werden. Ein Javascript Promise enthält den Code, der 
    anschließend sequentiell abgearbeitet werden soll. Das erspart 
    so manch einen tiefen Abgrund von verschachtelten Callbacks.*/

    // ALLES ZUM THEMA fetch() = https://dmitripavlutin.com/javascript-fetch-async-await/

async function getMealById(id) {
    const resp = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772" + id); 
    const respData = await resp.json();
    const meal = respData.meals[0];
    return meal;
}

async function getMealsBySearch(term) {
    const resp = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata" + term);
    const respData = await resp.json();
    const meals = respData.meals;

    return meals;
};

function addMeal (mealData, random = false) {  
    const meal = document.createElement("div");
    meal.classList.add("meal"); /*Das Element.classList ist eine read-only Eigenschaft, welche die aktuelle 
    DOMTokenList Sammlung der Klassen-Attribute des Elements zurückgibt. */
    meal.innerHTML = `
        <div class="meal-header">
            ${random ? `
        <span class="random">Zufällige Rezepte</span>`
            : ""
        }
             <img 
             src = "${mealData.strMealThumb}"
             alt ="${mealData.Meal}"
        />
    </div>
    <div class="meal-body">
        <h4>${mealData.strMeal}</h4>
        <button class ="fav-btn">
             <span>&#9829;
              </span>
        </button>
    </div> 
    `;

    const btn = meal.querySelector(".meal-body .fav-btn");
     
    btn.addEventListener("click", () => {
        if(btn.classList.contains("active")) {
            removeMealLS(mealData.idMeal);
            btn.classList.remove("active");
        } else {
            addMealLS(mealData.idMeal);
            btn.classList.add("active");
        }

    }); 
    meals.appendChild(meal);
}





 function addMealLS (mealId) { 
    const mealIds = getMealsLS();
    localStorage.setItem("mealIds", JSON.stringify([...mealIds, mealId]));
 }






 function removeMealLS (mealId) {
     const mealIds = getMealsLS ();
     localStorage.setItem(
         "mealIds", 
         JSON.stringify(mealIds.filter((id) => 
        id !== mealId ))
         );

 }




function getMealsLS () {
    const mealIds = JSON.parse(localStorage.
    getItem("mealIds"));
    console.log(mealIds);
    return mealIds === null ? [] : mealIds;  
} 