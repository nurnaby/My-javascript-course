const myFunction = (a, b) => a * b;
console.log(myFunction(3, 4));



const students = [{
            id: 101,
            name: 'sohag',
            age: 33,
            gpa: 2
        },
        {
            id: 102,
            name: 'nur',
            age: 33,
            gpa: 5
        },
        {
            id: 103,
            name: 'shakib',
            age: 33,
            gpa: 4
        }

    ]
    // normal function
function studentName() {
    return students.filter(function(x) {
        return x.gpa > 3;
    }).map(function(y) {
        return y.name;
    })
}
//Arrow function
const studentName2 = () => students.filter((x) => x.gpa > 3).map((y) => y.name)


console.log(studentName2());