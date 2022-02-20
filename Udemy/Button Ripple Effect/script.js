// Alle Elemente definieren
const buttons = document.querySelectorAll('.ripple');

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        
        const x = e.clientX // Damit will man die x Koordinaten erfassen
        const y = e.clientY // und damit die y Koordinaten im Verhältnis zum ganzen Viewport
        //Problem: Wir wollen die Koordinaten innerhalb der Box haben
        //Lösung

        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        const xInside = x - buttonLeft
        const yInside = y - buttonTop

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        this.appendChild(circle) // this kann man nur bei einer Funktion einsetzen
    } )
})