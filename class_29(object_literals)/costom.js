// function studentInfo(name, age) {
//     return {
//         name: name,
//         age: age
//     }
// }
// console.log(studentInfo("sohag", 23))


function studentInfo(name, age) {
    return {
        name,
        age
    }
}
// console.log(studentInfo("sohag", 23))

// let mesage = {
//     body: function() {
//         return 'Hi I am object function';
//     }
// }
// console.log(mesage.body());

// let mesage = {
//     body() {
//         return 'Hi I am object function';
//     }
// }
// console.log(mesage.body());

let mesage = {
    'body message' () {
        return 'Hi I am object function';

    }
}
console.log(mesage['body message']());