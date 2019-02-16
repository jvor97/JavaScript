// Challenge 2

var avarJohn, avarMike, avarMary;
avarJohn = (84 + 120 + 103) / 3;
avarMike = (116 + 94 + 123) / 3;
avarMary = (97 + 134 + 105) / 3;

if (avarJohn > avarMike && avarJohn > avarMary) {
    console.log( 'John is the winner with total score of ' + avarJohn);
} else if (avarMike > avarJohn && avarMike > avarMary) {
    console.log( 'Mike is the winner with total score of ' + avarMike);
} else if (avarMary > avarJohn && avarMary > avarMike) {
    console.log( 'Mary is the winner with total score of ' + avarMary);
} else {
    console.log( 'There is a draw');
}

(avarJohn > avarMike) ? console.log( 'John is the winner with total score of ' + avarJohn) :  console.log( 'Mike is the winner with total score of ' + avarMike);

switch (true) {
    case ( avarJohn > avarMike ) :
    console.log( 'John is the winner with total score of ' + avarJohn);
    break;
    case ( avarMike > avarJohn ) :
    console.log( 'Mike is the winner with total score of ' + avarMike);
    default :
    console.log( 'It´s a draw');
}

console.log( avarJohn, avarMike, avarMary);


//Using function

var John = {
    score: [89, 120, 103],
}
var Mike = {
    score: [116,94,123],
}
var Mary = {
    score: [97,134,105],
}

function calcScore(score){
    var sum = 0;

    for (i = 0; i < score.length; i++) {
        sum = sum + score[i];
    }

    var average = sum / score.length;

    return average;
}

var averageJohn = calcScore(John.score);
console.log(averageJohn);

var averageMike = calcScore(Mike.score);
console.log(averageMike);

var averageMary = calcScore(Mary.score);
console.log(averageMary);


if (averageJohn > averageMike && averageJohn > averageMary){
    console.log('John is the winner with average score of ' + averageJohn)
}else{
    console.log('oiio')
}