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