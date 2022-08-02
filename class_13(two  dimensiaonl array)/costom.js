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


// var score = [33, 43, 99, 70, 80, 44]
// var sum = 0;

// function highestScore(score) {
//     var max = score[0];
//     for (x = 1; x < score.length; x++) {

//         if (max < score[x]) {
//             max = score[x];
//         }


//     }
//     return max;

// }
// var maxNumber = highestScore(score);
// console.log(maxNumber);