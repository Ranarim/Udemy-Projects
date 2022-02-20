
const toggles = document.querySelectorAll(".faq-toggle"); //Damit definiere ich das toggle 

toggles.forEach(toggle => { //Damit benenne ich jedes Item der nodelList
    toggle.addEventListener('click', () => { //Für jedes Item erstelle ich einen EventListener
        toggle.parentNode.classList.toggle('active'); //Damit füg ich dem parentNode
    })

})





