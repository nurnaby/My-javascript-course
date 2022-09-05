// for of loop statement 

let numbers = ['s1', 's2', 's3'] //use array 
for (let number of numbers) {
    // console.log(number);
}

// for in loop statement
let student = {
    id: 100,
    name: 'anisul',
    age: 32

}


for (let x in student) {
    // console.log(x);
    console.log(`${x}`, `${student[x]}`);
}