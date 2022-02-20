/* Das HTML ist selbsterklärend. 
Das Skript eher weniger: Zum einen war für mich neu, dass man als 
einzelne Fragen auch einfach einen Array erstellen. Die jeweiligen 
Fragen und Antworten, welche ja Texte sind waren dann der [0] Wert 
s Arrays. Das erste war also, den Array mit den einzelnen Fragen 
zu erstellen. Ein Array wird mit [] gekennzeichnet, die einzelnen 
Elemente dann mit einer geschweiften Klammer. Dann erstellt man 
zunächst zwei Scopes, die jeweils 0 sind, also von vorne beginnen. 
Der erste Scope ist currentQuiz, der den Verlauf der Anzeige des 
jeweiligen Quiz angibt, der zweite ist der Scope score, der angibt 
 viele Fragen man richtig hat. Dann teilt man den Radius Buttons 
 bzw. Den Antworten eine Variable zu, damit man sie im Skript 
 definiert hat. Neu war hier der Befehl, 
 document.querySelectorAll(".answer"). Damit definiert man 
 alle Elemente mit der Klasse answer.*/


var quizData = [ // Man erstellt einen Array
{ // Merk dir das! Ich wusste nicht, dass das geht. Einen Array mit
  // Text erstellen zu können.
    question: "Was ist eine 6a+ in der UIAA Skala?",
    a: "Eine 4+",
    b: "Eine 6-",
    c: "Eine 7-",
    d: "Eine 7",
    correct: c,
},
{
    question: "Wofür steht das Akronym HMS?",
    a: "Halbmastwurfsicherung",
    b: "Hoima a Maß, schnell",
    c: "Halbmastwurfseil",
    d: "Haberl Michaels Schnierl",
    correct: a,
},
{
    question: "Wer ist der Meister?",
    a: "Max",
    b: "Jojo",
    c: "Niki",
    d: "Liggi",
    correct: d,

},
]

let currentQuiz = 0; // Der Startwert des Scope, also die erste Frage, currentQuiz ist allgemein der Status Quo des Arrays
let score = 0;
// Jetzt teilen wir einem HTML Text eine Variable zu
var questionEl = document.getElementById("question");
var a_text = document.getElementById("a_text");
var b_text = document.getElementById("b_text");
var c_text = document.getElementById("c_text");
var d_text = document.getElementById("d_text");
var submitBtn = document.getElementById("submit")


// Wir teilen den einzelnen Antwort Button einen Wert zu
var a_button = document.getElementById("a");
var b_button = document.getElementById("b");
var c_button = document.getElementById("c");
var d_button = document.getElementById("d");
var correct_button = document.getElementById("correct");
const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");

/* Dann macht man zunächst eine Funktion die angibt, dass die 
Elemente des Arrays richtig auf die HTML Elemente zugeordnet 
werden, schließlich stehen die einzelnen Fragen nicht im HTML 
sondern im Skript. In der Funktion wird zunächst eine Variable 
definiert, die die jetzige Quizfrage angibt. (var currentQuizData 
= quizData[currentQuiz]) Da wir zuvor einen Scope erstellt 
haben, wird zuerst der 0. Teil, also der erste Teil des Arrays 
aufgerufen. Dann werden die einzelnen Variablen, die wiederum 
die HTML Teile definieren durch die Elemente des Arrays 
definiert. Die Array Elemente wie currenQuizdata.question 
wird also der Variable question.innerText zugeordnet. */



function loadQuiz () { // die Funktion, jedes mal die neue Frage zu öffnen
    deSelect();
    var currentQuizData = quizData[currentQuiz]; // Jetzt verbinden wir die Variable mit dem Array, dessen Verlauf mit currentQuestion definiert ist
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a // Damit sagen wir, dass in dem Element(a_text) der innere Wert (.innerText) der Wert a des Arrays angezeigt werden soll
    b_text.innerText = currentQuizData.b // ..
    c_text.innerText = currentQuizData.c // ..
    d_text.innerText = currentQuizData.d // ..
}

loadQuiz ();

/* Dann macht man eine Funktion (function getSelected), die 
alle markierten Buttons bzw. Antworten auch selektiert. Mit 
answerEls.forEach(answerEl) definieren wir die einzelnen Teile 
der Variable answerEls zu answerEl. */


function getSelected () {
    let answer = undefined;   
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) { // Wenn das Element markiert ist, dann...
            answer = answerEl.id; // Damit wird die Variable definiert
        }
    });
    return answer; 
}

// Die Funktion ist dafür da, alle Markierungen aufzugeben

function deSelect () {
    answerEls.forEach((answerEl) => { 
    answerEl.checked = false; // alle Markierungen entfernen
})
}

/* Das ist fast die wichtigste Funktion, da sie den echten Prozess
angibt. Zunächst wird der Variable, mit der Funktion getSelected 
gleichgesetzt. console.log ist nur dafür da um im Webdeveloper 
Tool nachzuschauen, obs funktioniert. Dann kommt die if schleife. 
Diese enthält in der Schleife noch eine if schleife, das ist neu.
Das heißt, wenn Antwort markiert ist, dann kommen noch zwei Bedingungen. 
Und zwar einmal den Scope score um eins erhöhen, falls die Antwort richtig ist
und dann dann unter der Bedinung, dass das Quiz noch nicht aus ist, 
ein neues Quiz laden, oder, falls Bedingung nicht eintrifft, das 
Ergebnis ausspucken. */

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();
    
    console.log(answer);
    if (answer) {
        if (answer === quizData[currentQuiz].correct)
        {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) { // wenn der Status Quo des Arrays kleiner ist als seine Länge, dann...
            loadQuiz(); // führe die Funktion loadQuiz aus
            } else {
                quiz.innerHTML = `<h2>Du hast ${score} von ${quizData.length} richtig beantwortet.</h2>`;
         }
    }
}
);

