var link = document.getElementById("one"); //find element
link.innerHTML = "gogle"; //change html element
link.style.textDecoration = "none";
link.style.fontSize = "80px";
link.href = "http://facebook";
// add html element 
var heding3 = document.createElement("h2");
var text = document.createTextNode("heding3")
heding3.appendChild(text);


var myDve = document.getElementById("my_div");

myDve.append(heding3);





var heding4 = document.createElement("h2");
var text4 = document.createTextNode("heding4");
heding4.appendChild(text4);

var mydev1 = document.getElementById("my_div");
mydev1.appendChild(heding4);

// var heding1 = document.getElementsByTagName("h1" [0]);
var heding1 = document.getElementById('h_one');
myDve.removeChild(heding1);