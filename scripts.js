/**
var firstName = 'Julia';

console.log(firstName);

var lastName = 'Vorcakova';
console.log(lastName);

var age = 21;
console.log(age)

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'student';

console.log(job);

var job, isMarried;
job = 'teacher';
isMarried = true;

console.log(job + ' ' + isMarried);

job = 'driver';

alert(firstName + ' ' + lastName + ' is ' + age + ' years old ' + 'Is he married ? ' + isMarried);

age = 'twenty-one';

var lastName = prompt('What´s your last name ?');
console.log(firstName + ' ' + lastName);

*/


//Boolean logic

/*var firstName, age;
firstName = 'John';
age = 21;

if (age < 13) {
    console.log(firstName + ' is a boy');
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teeneger');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man');
} else {
    console.log(firstName + ' is a man');
}

//Ternary Operator

var firstName = 'John';
var age = 19;

(age < 18) ? console.log(firstName + ' drinks juice') : console.log(firstName + ' drinks beer');

var drink = (age < 18) ? 'juice' : 'beer';
console.log(drink);

//Switch statements

var job = 'teacher';
switch (job) {
    case 'teacher' : console.log( firstName + ' teaches kids to code');
    break;
    case 'driver' : console.log( firstName + ' drives car in Vienna');
}

var age = 24;
switch (true) {
    case age < 13 :
    console.log( firstName + ' is a boy');
    break;
    case age >= 13 && age < 20 :
    console.log( firstName + ' is a teenager');
    break;
    case age >= 20 && age < 30 :
    console.log( firstName + ' is a young man');
    break;
    default :
    console.log( firstName + ' is a man');
}

//Challenge 2...

//Functions

function CalculateAge(BirthYear){
    return(2018 - BirthYear);
}

console.log(CalculateAge(1997));

function YearsUntilRetiriment(year, firsName) {
    var age = CalculateAge (year);
    var retiriment = 65 - age;

if (retiriment > 0) {
    console.log(firsName + 'retires in ' + retiriment + ' years');
} else {
    console.log(firsName + 'is already retired ');
    }

}

YearsUntilRetiriment(1997, 'Julia ');
YearsUntilRetiriment(1988, 'Jozko ');
YearsUntilRetiriment(1992, 'Marek ');

// Function statements and expressions 

var whatDoYouDo = function(firstName, job) {

    switch(job) {
        case('driver') :
        return firstName + ' is a ' + job;
        case('teacher') :
        return firstName + ' is a ' + job;
        default :
       return firstName + ' does something else.';
    }
}

console.log(whatDoYouDo('Julia', 'teacher'));
console.log(whatDoYouDo('Jozko' , 'driver'));
console.log(whatDoYouDo('Marek', 'waiter'));



//Challenge 3...calc. tip& final payments


//Objects and properties

//Literal objects

var John = {
    firstName: 'John',
    lastName: 'Smith',
    job: 'driver',
    BirthYear: 1999
};

console.log(John);

John.firstName = 'Jan';
John['lastName'] = 'Hnoj';

console.log(John);
console.log(John.firstName);

// new object syntax

var Jane = new Object();
Jane.firsName = 'Jane';
Jane.lastName = 'Koth';

console.log(Jane);

//Methods

var John = {
    firstName: 'John',
    lastName: 'Smith',
    job: 'driver',
    BirthYear: 1999,
    calcAge: function() {
        this.age = 2018 - this.BirthYear;
    }
};

John.calcAge();
console.log(John);


//Challenge 4.... methods

//Loops and Interation 

//for loop

//na vyhodenie čísiel od 0 do 9
for ( var i = 0; i < 10; i++) {
    console.log(i);
}

//na vyhodenie všetkých dát z array
var John = ['John', 'Smith', 1988, 'driver'];

for (var i = 0; i < John.length; i++) {
    console.log(John[i]); 
}

// while loop 

var i = 0;
while(i < John.length) {
    console.log(John[i]);
    i ++
}

//continue and break
// ked chceš vybrať iba strings a ak to nie je string tak bude pokračovať na dalšie dáta, kt sú strings
for (var i = 0; i < John.length; i++) {
    if (typeof John[i] !== 'string') continue;
    console.log(John[i]);
}

for ( var i = 0; i < John.length; i++) {
    if (typeof John[i] !== 'string') break;
    console.log(John[i]);
}
*/

// Looping backwards
var John = ['John', 'Smith', 1988, 'driver'];
for( var i = 3; i >= 0; i--) {
    console.log(John[i]);
}  //var i = 3 by si mala napísať var i = John.length - 1 --> to je označenie posledného elementu v array


//Challenge 5 FOR method, max tip, average tip



function reverse(array) {

    let reverseArray = [];
    if (array === 0 || array === null || array === "") {
        reverseArray = 0;
    } else {
        arrayIndex = 0;
        for (i = 0; i < array.length; i--) {
            rverseArray = array[arrayIndex];
        
        arrayIndex += 1;    
        }
    }
    return reverseArray;

}

array = ["one","two", "three", "four"];
var returnA = reverse(array);
console.log(returnA);