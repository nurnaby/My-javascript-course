// project requirements
// Change the background color by generating random RGB color clicking a button

// steps 
//steps 1 create onload hendler
window.onload = () => {
    mains();
}

function mains() {
    var mainDv = document.getElementById("mainDv");
    var btn = document.getElementById("btn");

    btn.addEventListener('click', function() {
        const bgColor = generateRGBcolor();
        mainDv.style.backgroundColor = bgColor;
    })

}
// steps 2 random color generate function
function generateRGBcolor() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    return `rgb(${red},${green},${blue})`
}
// stepd 3 collect all necssary refernces


// steps 4 hendle the clike event