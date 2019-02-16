
// Challenge SumOfPositive numbers.
// You get an array of numbers and your task is to sum all positive numbers.
// If the input array is empty return 0.
// For example: [1,3,-5,-2,2] => sum 1 + 3 + 2 = 6
//              [] return 0

function SumOfPositive(numbers){

    let sum = 0;
    
    for (i = 0; i < numbers.length; i++) {

        var number = numbers[i];

        if (number > 0) {
            sum = sum + number;
        } 
    }
    return sum;
}

var numbers1 = [1,3,-5,-2,2];
var numbers2 = [-1,-3,-5,-2,-2];

var sum = SumOfPositive(numbers1);
var sum2 = SumOfPositive(numbers2);

console.log(sum);
console.log(sum2);

