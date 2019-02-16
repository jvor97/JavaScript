
// Challenge reverse strings.
// You get an array of strings and your task is to reverse this strings and write it from the end to the beginning.
// If the input array is empty return 0.
// For example: ["one","two", "three", "four"] => four, three, two, one
//              [] return 0

// Prehodí poradie slov v stringu od posledného k prvému- SPRÁVNE RIEŠENIE

function reverseWordStringRefactored(words){

    let reversedWords = [];

    if (words === undefined || words === "" || words.length === 0) {
        return reversedWords;
    }

    let reversedIndex = 0;

    for (let i = words.length - 1; i >= 0; i--) {
       reversedWords[reversedIndex] = words[i];
       reversedIndex = reversedIndex + 1;
    }  //ty tu vlastne hovoríš reverseWords[0] = four, reverseWords[1] = three... preto aj reverseIndex musí isť pod reverseWords-lebo začína s pozíciou 0 a potom ide +1..

    return reversedWords;
}

var reverseWordsRefactored = reverseWordStringRefactored(words);

// Prehodí poradie slov v stringu od posledného k prvému- NESPRÁVNE RIEŠENIE
function reverseWordString(string) {
 
    var emptystring = 0;

    if (string === "") {
          console.log(emptystring);
    } else {
        for (var i = string.length - 1; i >= 0; i--){
         console.log(string[i]);
       }
  }
}
var words = ["one","two", "three", "four"];
var reverseString = reverseWordString(words);


// Reverse string with build- in function
function reverseWordBuiltinFunction(string){
    return string.reverse();
}

var string = ["one","two", "three", "four"];
var reverseString1 = reverseWordBuiltinFunction(string);
console.log(reverseString1);


/* function reverseString(string) {
 
    var reverse = 0;
          if (string === "") {
              reverse = 0;
          } else {
           for (var i = string.length - 1; i >= 0; i--){
             reverse = string[i];
           }
  return reverse;
  }
} */ //Ked to dam takto tak mi to vyhadzuje iba poslednu hodnotu z for (one) nie celý string od 4 do 1

// ------------------------------------------
//Prehodí poradie PISMEN v slove od posledného k prvému s POMOCNÝMI FUNKCIAMI
function reverseLetterString(str) {
    return str.split("").reverse().join("");
}

var str = "one";
var reverse = reverseLetterString(str);
console.log(reverse);


//Prehodí poradie PISMEN v slove od posledného k prvému s FOR cyklom
function reverseOneWord(word){

    let reversedWord = "";

    for (i = word.length - 1; i >= 0; i--) {
        reversedWord += word[i];   //===  reverseWord = reversedWord + word[i];
    }
    return reversedWord;
}

var wordRev = reverseOneWord('one');
console.log(wordRev);

