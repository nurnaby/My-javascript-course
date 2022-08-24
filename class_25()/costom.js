// console.log(location.href);
// console.log(location.hostname);
// console.log(location.protocol);
// console.log(location.port);
// console.log(location.pathname);

var locationDev = document.querySelector('#location_div');


//href
var p1 = locationDev.children[0];
p1.textContent = location.href;

//hostname
var p2 = locationDev.children[1];
p2.textContent = location.hostname;

//hostname
var p3 = locationDev.children[2];
p3.textContent = location.port;

//hostname
var p4 = locationDev.children[3];
p4.textContent = location.pathname;

var visitBtn = document.getElementById('btn');

visitBtn.addEventListener("click", function() {
    location.assign("http:https://www.youtube.com/watch?v=ytOhuX7C69Y&list=PLgH5QX0i9K3qzryglMjcyEktz4q7ySunX&index=55");
})