var numbers = [2, 4, 6, 8];
var squareNumber = numbers.map(myFunction);
document.getElementById('demo').innerHTML = squareNumber;

function myFunction(x) { //Multiply all the values in an array with 10:
    return x * 10;
}

// var numbers2 = [2, 4, 6, 8];
// var filterNumber = numbers.filter(myFunction2)
// document.getElementById('demo2').innerHTML = filterNumber;

// function myFunction2(x) {
//     return x > 6;
// }
// console.log(filterNumber)

// filter function
var num1 = [2, 11, 33, 22, 44];
var newNum1 = num1.filter(function(x) {
    return x > 10;
})
console.log(newNum1);