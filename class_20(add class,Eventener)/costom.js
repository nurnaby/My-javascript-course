function addStyle() {

    var heading = document.getElementById("headline"); //data read by getElementById 
    heading.classList.add("heddign_style");

}

function remove_style() {
    var heading = document.querySelector("#headline"); //data read by querySelector
    heading.classList.remove("heddign_style");
}
// var para = document.querySelector("headline2")
// para.addEventListener("click", function() {
//         para.classList.add("heddign_style");
//     })
var myVar = document.querySelector("#headline2");
myVar.addEventListener("mouseover", function() {
    myVar.classList.add("heddign_style")
})