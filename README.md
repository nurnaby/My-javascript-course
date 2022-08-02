
# My-javascript-course
JavaScript is the programming language of the Web. JavaScript is easy to learn. This tutorial will teach you JavaScript from basic to advanced. Start learning
<img src='./img/javascript.jpg' width='900' height= '250' >

## Class 1 Overview
<details>
<summary>Click Here </summary>

### Math 
- Math.round(x)	Returns x rounded to its nearest integer
- Math.ceil(x)	Returns x rounded up to its nearest integer
- Math.floor(x)	Returns x rounded down to its nearest integer
- Math.trunc(x)	Returns the integer part of x (new in ES6)

`javascript `
```javascript

        console.log('javascript');
        let m = Math.round(4.4);
        console.log(m);

```
1. item1
2. item2
    1. item2.1
3. item3
### text list

- [x] text1
- [x] text1
- [] text1
</details>



## Class 2 Overview
<details>
<summary>Click Here </summary>

__Problem solving__
1. Random number generate(1 to 6)
2. student name sort ascending way
3. number array sort small to large
4. Find leap yary
5. Find vowel letter 
6. Find dublicate number in a array
</details>

## Class 3 Overview
<details>
<summary>Click Here </summary>

__Boolean Values__  
Very often, in programming, you will need a data type that can only have one of two values, like
- YES / NO
- ON / OFF
- TRUE / FALSE
For this, JavaScript has a Boolean data type. It can only take the values true or false.
</details>

## Class 4(Data type,variable,Concat ) Overview
<details>
<summary>Click Here </summary>

__Data Type__  

- String
- Number
- Object
- Boolean

__variable Type__  
4 Ways to Declare a JavaScript Variable:
- Using var
- Using let
- Using const
- Using nothing  
__Concat__

`javascript `
```javascript

       let fristName = "nur naby";
        let lestName = " sohag";

        document.write(fristName + lestName);
        document.write("My name is " + fristName + "sohag .");

```
</details>

## Class 5(javascript library funciton ) Overview
<details>
<summary>Click Here </summary>

__library function__  

- length
- CharAt
- conCat
- toupperCase
- toLowerCase
- slice

</details>

## Class 6(for loop while loop ) Overview
<details>
<summary>Click Here </summary>

__for loop__  
`javascript `
```javascript
        // for loop syntex
        for (var x = 1; x <= 9; x++) {
            document.write(x);
        }

         i = 1;
        var sum2 = 0;
        while (i <= 50) {
            if (i % 3 == 0 && i % 5 == 0) {
                sum2 = sum2 + i;
                document.write(i);
            }
            i = i + 1;

        }
        document.write(sum2);

```
</details>

## Class 7(Ternary operator ) Overview
<details>
<summary>Click Here </summary>

__Ternary operator__  
`javascript `
```javascript
        var num = Number(prompt("Enter your number :"));
        var reault = num > 0 ? "positive" : "negative";
        document.write(reault);

```
</details>

## Class 8(Traditional function ) Overview
<details>
<summary>Click Here </summary>

__Traditional function__  
`javascript `
```javascript
     //sum function 
        function sum(num1, num2) {
            var sum = num1 + num2;
            return sum;
        }
        console.log(sum(4, 4));
        //substraction function
        function sub(num1, num2) {
            $result = num1 - num2;
            document.write("substractin:" + $result + "<br>");
        }
        sub(10, 5);

```
</details>

## Class 9( function ) Overview
<details>
<summary>Click Here </summary>

__Traditional function__  
`javascript `
```javascript
    //IIFES---(Immediately Invokeable Function Expressions)
     (function dispaly() {
            console.log("hello function");
        })();

         // Funciton Espression
        const dispoay2 = function displayMes() {
            console.log('hi i am ');
        }
        dispoay2();

```
</details>

## Class 10( Loop in Array) Overview
<details>
<summary>Click Here </summary>

__Loop in Array__  
`javascript `
```javascript
     let names = ["sohag", "atik", "manik", "jakir", "kabir"];
        var number = [1, 2];
        var sum = 0;
        for (let x = 0; x <= 5; x++) {
            console.log(names[x]);


        }

```
</details>

## Class 11( Array Methods) Overview
<details>
<summary>Click Here </summary>

__Array Methods__ 

- push() // add data in array last
- pop()// remove data in array last
- shift() //remove data in array frist
- unshift() // add data in arrary frist 
- splice()
- slice()
- sort()
`javascript `
```javascript
        var pushNames = names.splice(2, 0, "shoag", "jabad");
        console.log(names);
    

```
</details>

## Class 12( One dimensoinal Array) Overview
<details>
<summary>Click Here </summary>

`javascript `
```javascript
      // dispaly max number
    var score = [33, 43, 99, 70, 80, 44]
var sum = 0;

function highestScore(score) {
    var max = score[0];
    for (x = 1; x < score.length; x++) {

        if (max < score[x]) {
            max = score[x];
        }
    }
    return max;

}
var maxNumber = highestScore(score);
console.log(maxNumber);

```
</details>

## Class 13( Two dimensoinal Array) Overview
<details>
<summary>Click Here </summary>

`javascript `
```javascript
      // dispaly max number
   let playearsInfo = [
    ["atik", 99],
    ["jakir", 77],
    ["sohag", 55],
    ["asik", 44],
    ["polash", 33],
    ["manik", 22],
]
function highestScore(playearsInfo) {
    let max = playearsInfo[0][1];
    let highestScoress = playearsInfo[0][0];
    for (x = 1; x < playearsInfo.length; x++) {
        if (max < playearsInfo[x][1]) {
            highestScoress = playearsInfo[x][0];
        }
    }
    return highestScoress;

}
let high = highestScore(playearsInfo)
console.log(high);

```
</details>

