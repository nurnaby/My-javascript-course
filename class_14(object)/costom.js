let student = {
    name: "sohag",
    age: 34,
    city: "bogra"
}

// console.log(student.name);
function students(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
}
let students1 = new students("sohag", 43, "bogra");
console.log(students1.name);