const panels = document.querySelectorAll('.panel') // querySelector erlaubt uns, alles zu definieren, nicht nur IDs

panels.forEach(panel => {
    panel.addEventListener("click", () => {
        removeActiveClasses();
        panel.classList.add("active");
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove("active");
    })
}
