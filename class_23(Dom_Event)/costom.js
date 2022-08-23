// var input = document.querySelector('input');
// input.addEventListener("change", changeHeanger)

// function changeHeanger(e) {
//     console.log(e.target.value);
// }
var program = document.querySelectorAll("input[name=program]");
Array.from(program).map((program) => {
    program.addEventListener("change", changeHendeler);
})

function changeHendeler(e) {
    if (e.target.checked) {

        console.log("checked");
    }
}

// input.addEventListener("change", changeHeanger)


// function changeHeanger(e) {
//     console.log("change");
// }