// You get an array of numbers for example [1,3,4,3,5,4]
// and your task is to sum numbers that occur only once.
// [1,3,4,3,5,4] => 1, 5 => sum => 6.

// Hint: use dictionary

//let array = [1,3,4,3,5,4];

var items1 = ['macka', 'pes', 'pes', 'kon', 'kon'],
result = [],
k,
i,
container = {};

for (i= 0; i < items1.length; i++) {


    if (items1[i] in container) {
        container[items1[i]]++;  //nechapem tomuto zapisu.lebo toto teoreticky hovori ze napr. container[3]--> a  to nie je čislo 3 v cont. ale tretia pozicia lebo [],
    } else {
      container[items1[i]] = 1;
    }
  }
  for (k in container) {
    if (container[k] == 1) {
      result.push(k);
    }
  }
  console.log(result)

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
