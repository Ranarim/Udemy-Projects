const form = document.getElementById("form"); // Deshalb lohnt sich ID statt class, wenn man nur ein Element hat
const input = document.getElementById("input");
const todosUl = document.getElementById("todos")

const todos = JSON.parse(localStorage.getItem('todos'))
if(todos) {
    todos.forEach(todo => addTodo(todo))
    }                                                 // im div form 
          
form.addEventListener('submit', (e) => {            // Wenn man auf dem div submit in Form der Entertaste drückt, wird zunächst mit dem 
                                                    // wenn das jeweilige Ereignis beim jeweiligen Element eintritt, in unsrem Fall                                            // mit dem Event-Object gearbeitet, d.h. die Funktion wird immer dann ausgeführt
     e.preventDefault()                             //preventDefault()kann das Ereignis canceln. Verhindert jegliche Browser-Aktion für das Ereignis, etwa das Laden einer URL, wenn ein Hyperlink geklickt wurde

    addTodo();
    })

function addTodo (todo) {
    let todoText = input.value                      // Damit definiert man einfach die Variable todoText als den Wert des Eingabefelds
                                                    
    if (todo) {                                     // todo ist einfach nur die Bedingung
        todoText = todo.text                        
    }

                                                    // Erstellung eines list-items
    if (todoText) {                                 // Wenn todotext überhaupt existiert ...
        let todoEl = document.createElement('li') //todoEl entspricht immer einem NEUEM list item
        if (todo && todo.completed)                 // Wenn beide Bedingungen erfüllt sind, ich verstehe es aber erstmal nur als Behandlungsobjekt              
        todoEl.classList.add('completed')             // Dann wird zur Klasse completed hinzugefügt, aber wieso man todo.completed nicht definieren muss check ich nich
    }

    todoEl.innerText = todoText                 // innerText ist ein String

    todoEl.addEventListener('click', () => {
        todoEl.classList.toggle('completed');      // Beim Hin und her klicken änder sich die Klasse von "" zu "completed"
        updateLocalStorage()
    })

    todoEl.addEventListener('contextmenu', (e) => { // Also beim Klicken der rechten Maustaste, WIESO hier event Object und oben nicht?!
    
        e.preventDefault();

        todoEl.remove()
        updateLocalStorage()
    })

    todosUL.appendChild(todoEl)

        input.value = ''

        updateLocalStorage()
    }

    function updateLocalStorage() {
        todosEl = document.querySelectorAll('li')
    
        const todos = []
    
        todosEl.forEach(todoEl => {
            todos.push({
                text: todoEl.innerText,
                completed: todoEl.classList.contains('completed')
            })
        })
    
        localStorage.setItem('todos', JSON.stringify(todos))
    }
    
