
// Challenge 6
// Create a function which will take three numbers as input and returns the biggest one.
// For example: function biggestOfThree(2,5,4); returns 5


function biggestOfThree(one, two, three) {

    let max = one;

    if (one > two && one > three) {
        max = one;
    } else if ( two > one && two > three) {
        max = two;
    } else {
        max = three;
    }

    return max;
}

// More complicated way of Josephe :))
function biggestOfThree2(one, two, three){

    if (one > two){
        if (one > three)
            return one;
        else{
            return three;
        }
    } else{
        if (two > three){
            return two;
        }
        else{
            return three;
        }
    }
}

var number = biggestOfThree(1,2,3);
var test = biggestOfThree2(2,5,8);
console.log(number);