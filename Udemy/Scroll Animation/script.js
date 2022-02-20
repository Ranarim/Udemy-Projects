const boxes = document.querySelectorAll(".box"); // Es wurden alle div Tags definiert

window.addEventListener('scroll', checkBoxes) // Normalerweise bei Button addEventListener, geht offensichtlich auch mit der ganzen Seite

checkBoxes();

function checkBoxes() {
    const triggerBottom = window.innerHeight/5*4 //Damit wird genau der Zeitpunkt festgelegt, ab wann die Bpx angezeigt wird

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top; // Gibt die Größe der Box und dessen relative Position zum Viewport zurück
        if (boxTop < triggerBottom) { //Erst wenn die obere Grenze der Box eine bestimmte Nähe zum oberen Ende des Viewports erreicht hat, wird die Box angezeigt
            box.classList.add('show');
        }
        else {
            box.classList.remove("show");
        }
    })
}