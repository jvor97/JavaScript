// You get an array of numbers for example [1,3,4,3,5,4]
// and your task is to sum numbers that occur only once.
// [1,3,4,3,5,4] => 1, 5 => sum => 6.

let array = [1,3,4,3,5,4];


let solution = SingleDigitSum(array);

function SingleDigitSum(array) {
    let dictionary = {};

    for (let i = 0; i < array.length; i++){
        if (dictionary[array[i]] === undefined) {
            dictionary[array[i]] = 1;
        }
        else{
            dictionary[array[i]] += 1;
        }
    }

    let sum = 0;

    for (let j = 0; j < array.length; j++) {
        if (dictionary[array[j]] === 1){
            sum += array[j];
        }
    }

    return sum;
}
