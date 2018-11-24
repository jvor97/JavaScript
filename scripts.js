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

/** 
//Challange

var heightMark, heightJohn, massMark, massJohn;
heightMark = 1.8;
heightJohn = 1.92;
massMark = 75;
massJohn = 90;

var MarkBMI, JohnBMI;
MarkBMI = massMark / ( heightMark ^ 2 );
JohnBMI = massJohn / (heightJohn ^ 2);

console.log(MarkBMI);
console.log(JohnBMI);

console.log(MarkBMI > JohnBMI);

var MarkHigherBMI = false;
console.log('Is Marks BMI higher than Johns ?' + MarkHigherBMI);
*/

//Boolean logic

var firstName, age;
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

// Challange 2

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
    default :
    console.log( 'Mike is the winner with total score of ' + avarMike);
}

console.log( avarJohn, avarMike, avarMary); 

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



//Challange 3
/*
function calculateTip(bill) {
    if (bill < 50) {
        return firstName + ' leaved ' + bill * 0.2 + ' tip from the ' + bill;
    } else if (bill >= 50 && bill <= 200) {
        return firstName + ' leaved ' + bill * 0.15 + ' tip from the ' + bill;
    } else {
        return firstName + ' leaved ' + bill * 0.1 + ' tip from the ' + bill;
    }
}
console.log(calculateTip(124));
console.log(calculateTip(48));
console.log(calculateTip(268));

var tip = [calculateTip(124), calculateTip(48), calculateTip(268)];
var finalPaid = [124 + calculateTip(124), 48 + calculateTip(48), 268 + calculateTip(268)];

console.log(tip);
console.log(finalPaid);
*/

function calculateTip(bill) {
    var percentage;
    if (bill < 50) {
        percentage = 0.2;
    } else if (bill >= 50 && bill <= 200) {
        percentage = 0.15;
    } else {
        percentage = 0.1;
    } 
    return bill * percentage;
}


var bills = [124, 48, 268];
var tips = [calculateTip(bills[0]),
            calculateTip(bills[1]),
            calculateTip(bills[2])];
var finalPaid = [bills[0] + tips[0],
                bills[1] + tips[1],
                bills[2] + tips[2]];
    
console.log(tips, finalPaid);

//nic som neurobila uuiii
ijiofwj