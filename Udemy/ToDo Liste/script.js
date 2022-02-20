var num = 99;

while (x > 1) {
    console.log('${num}  bottles of juice on the wall!${num} bottles of juice! Take one down, pass it around...${num-1} bottles of juice on the wall!');
    num--;
}
console.log("1 bottle of juice on the wall! 1 bottle of juice! Take one down, pass it around... 0 bottles of juice on the wall!");


/*const form = document.getElementById("form")
const input = document.getElementById("input")
const todosUl = document.getElementById("todos")

const todos = JSON.parse(localStorage.getItem("todos"))

if (todos) {                             //Um beim neuen Laden erstmal alle gespeicherten li einfügen, also die addtodo funnktion ausführen
    todos.forEach(todo => {
        addTodo(todo)
    })}


form.addEventListener("submit", (e) => {
    e.preventDefault()
    addTodo()
})

function addTodo(todo) {
    let todoText = input.value              // let ist block scoped während var function scoped ist, was heißt das?

    if (todo)
        todoText = todo.text


    if (todoText) {         
        const todoEl = document.createElement("li") // const verbietet uns das ändern eines Wertes

        if (todo && todo.completed) {               // Wieso completed da schon?
            todoEl.classList.add("completed")
        }

        todoEl.addEventListener("click", () => {
            todoEl.classList.toggle("completed")
            updateLS()

        })

        todoEl.addEventListener("contextmenu", (e) => {
            e.preventDefault()
            todoEl.remove()
            updateLS()
        })
        
        todoEl.innerText = todoText


        todosUl.appendChild(todoEl)

        input.value = ""

        updateLS()
    }
}

function updateLS () {
    let todosEl = document.querySelectorAll("li")       //todosEl und nicht todos
    const todos = []                                    // Array erstellen
    todosEl.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains("completed")
        })
    })
    localStorage.setItem("todos", JSON.stringify(todos))
}








































/*const form = document.getElementById("form")
const  input = document.getElementById("input")
const todosUl = document.getElementById("todos")

const todos = JSON.parse(localStorage.getItem("todos"))
if (todos){
    todos.forEach(todo => {
        addTodo(todo)
    })
}


form.addEventListener("submit", (e) => {
    e.preventDefault()
    addTodo()
})


function addTodo(todo) {
    let todoText = input.value

    if(todo) {
        todoText = todo.text
    }

    if(todoText) {
        const todoEl = document.createElement("li")
         
        if (todo && todo.completed) {
            todoEl.classList.add("completed")
        }

        todoEl.addEventListener("click", () => {
            todoEl.classList.toggle("completed")
            updateLS()
        })

        todoEl.addEventListener("contextmenu", (e) => {
            e.preventDefault()
            todoEl.remove()
            updateLS()

        })

        todoEl.innerText = todoText

        todosUl.appendChild(todoEl)

        input.value = ""

        updateLS()
    }
}

function updateLS () {
    let todosEl = document.querySelectorAll("li")

    const todos = []

    todosEl.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains("completed")
        })
    })

    localStorage.setItem("todos", JSON.stringify(todos))
}



































/*const form = document.getElementById("form")
const input = document.getElementById("input")
const todosUl = document.getElementById("todos")

const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos) {
        todos.forEach(todo => addTodo(todo))
    }

form.addEventListener("submit", (e) => {
    e.preventDefault()
    addTodo()
})

function addTodo(todo) {
    let todoText = input.value              // Woher weiß ich, dass ich todoText überhaupt brauche?

    if (todo) {
        todoText = todo.text 
    }

    if (todoText) {
       let todoEl = document.createElement("li")

        if(todo && todo.completed) {
            todoEl.classList.add("completed")
        }

        todoEl.addEventListener("click", () => {
            todoEl.classList.toggle("completed")
            updateLS()
        })

        todoEl.addEventListener("contextmenu", (e) => {
            e.preventDefault()
            todoEl.remove()
           updateLS()
        })

        todoEl.innerText = todoText

        todosUl.appendChild(todoEl)

        input.value = ""

        updateLS()

    }
}

function updateLS() {
    todosEl = document.querySelectorAll("li")

    const todos = []

    todosEl.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        })
    })
    
    localStorage.setItem("todos", JSON.stringify(todos))
}































/*
const form = document.getElementById("form")            // Hier stehen alle Fragen an Lina ...
const input = document.getElementById("input")
const todosUl = document.getElementById("todos")

const todos = JSON.parse(localStorage.getItem("todos"))
if(todos) {
    todos.forEach(todo => addTodo(todo))
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    addTodo();
})

function addTodo(todo) {
    let todoText = input.value

    if (todo)
    todoText = todo.text

    if (todoText) {
        let todoEl = document.createElement("li")

        if (todo && todo.completed) {              //Woher weiß das Skript, was completed ist, ich habe es doch noch garnicht definiert
            todoEl.classList.add("completed")       //Wieso? Das mach ich doch unten mit AddEventListener Toggle
        }

        todoEl.innerText = todoText

        todoEl.addEventListener("click", () => {
        todoEl.classList.toggle("completed")
        updateLS()
        })

        todoEl.addEventListener("contextmenu", (e) => {
            e.preventDefault()                    // Wozu dient preventDefault?
            todoEl.remove()
            updateLS()
        })
        

        todosUl.appendChild(todoEl)

        input.value= ""
        
        updateLS()
    }

}

function updateLS() {                           // Wann benutzt man eigentlich eine Klammer mit Inhalt nach der Funktion
                                                //Wieso bleibt hier das Objekt leer?
    todosEl = document.querySelectorAll("li")

    const todos = []

    todosEl.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains("completed")
        })
    })

    localStorage.setItem("todos", JSON.stringify(todos)) //Wofür steht das erste "todos"

}

/*






















































/* LÖSUNG

const form = document.getElementById('form')
const input = document.getElementById('input')
const todosUL = document.getElementById('todos')

const todos = JSON.parse(localStorage.getItem("todos"))

form.addEventListener('submit', (e) => {
    e.preventDefault()

    addTodo()
})

function addTodo(todo) {
    let todoText = input.value

    if(todo) {
        todoText = todo.text
    }

    if (todoText) {
        const todoEl = document.createElement("li")

        if (todo && todo.completed) {
            todoEl.classList.add("completed")
        }

        todoEl.innerText = todoText

        todoEl.addEventListener("click", () => {        //Wenn die Funktion die folgt mehr als eine Zeile hat --> {...}
            todoEl.classList.toggle("completed")
            updateLS();                             //Das die Änderung (bspw. zu completed in localStorage gespeichert wird)
        })

        todoEl.addEventListener("contextmenu", (e) => {
            e.preventDefault()
            todoEl.remove()
            updateLS()
        })

        todosUL.appendChild(todoEl) //bei appendChild kommt in die Klammer nicht "", diese verwendet man nur bei direkter Bearbeitung des HTML

        input.value = ""

        updateLS()

    }
}

function updateLS() {
    todosEl = document.querySelectorAll("li") // Schließlich wollen wir alle todos die aufgelistet sind speichern

    const todos = []        //Hierbei wird 

    todosEl.forEach(todoEl => {
        todos.push({                    // Damit fügt man ein Objekt zu, welches einen Text Value und ein "Completed" Value
            text: todoEl.innerText,
            completed: todoEl.classList.contains("completed")
        })              
    })
    
    localStorage.setItem("todos", JSON.stringify(todos)) //Mit stringify packen wir es in einen String, mit parse, also wenn wir es wieder herausziehen wieder in einen Array
}

*/