const form = document.querySelector("form");
const userName = form.querySelector("div #unserName");
const userEmail = form.querySelector("div #email");
const userPass = form.querySelector("div #pass");

form.addEventListener('submit', formHendler);


function formHendler(e) {
    e.preventDefault()
    userInfo = {
        name: console.log(unserName.value),
        email: console.log(email.value),
        pass: console.log(pass.value),
    };
    console.log(userInfo)
}