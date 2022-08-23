// const form = document.querySelector("form");
// const userName = form.querySelector("div #unserName");
// const userEmail = form.querySelector("div #email");
// const userPass = form.querySelector("div #pass");

// form.addEventListener('submit', formHendler);


// function formHendler(e) {
//     e.preventDefault()
//     userInfo = {
//         name: console.log(unserName.value),
//         email: console.log(email.value),
//         pass: console.log(pass.value),
//     };
//     console.log(userInfo)
// }


const video = document.querySelector("video");
video.addEventListener("canplay", function() {
    console.log("canplay");
})
video.addEventListener("play", function() {
    console.log("play");
})
video.addEventListener("playing", function() {
    console.log("plaing");
})
video.addEventListener("pause", function() {
    console.log("pause");
})
video.addEventListener("volumechange", function() {
    console.log("volume");
})
video.addEventListener("ended", function() {
    console.log("Thanks for watching video");
})