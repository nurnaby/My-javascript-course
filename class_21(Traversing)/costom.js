var prent = document.querySelector(".student-b");
var studentA = prent.parentElement;
student_childen = studentA.children[0];
console.log(student_childen);


const studentB = document.querySelector('.student-b');
const studentC = studentB.nextElementSibling;
console.log(studentC);

const student_b = document.querySelector('.student-b');
const student_a = student_b.previousElementSibling;
console.log(student_a)