const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");

textarea.addEventListener( "keyup", (event) => {
    createTags(event.target.value);
})

function createTags (input) {
    console.log(input);
}