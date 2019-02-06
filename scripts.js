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



//Challenge 3
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
/*
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


//Challenge 4

var Mark = {
    firstName: 'Mark',
    mass : 78,
    height : 1.69,
    calcBMI: function() {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
}

var John = {
    firstName: 'John',
    mass : 110,
    height : 1.95,
    calcBMI: function() {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
     }
}

Mark.calcBMI();
John.calcBMI();

 if (Mark.BMI > John.BMI) {
   console.log( Mark.firstName + ' has higher BMI, which is equal to ' + Mark.BMI);
} else if ( John.BMI > Mark.BMI) {
    console.log( John.firstName + ' has higher BMI, which is equal to ' + John.BMI);
} else {
    console.log( Mark.firstName + ' and ' + John.firstName + ' have the same BMI, which is equal to ' + John.BMI);
}

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


// Challenge 5

var John = {
    firstName: 'John',
    lastName: 'Smith',
    bills: [124, 48, 268, 180, 42],
    calcTip: function() {
         this.tips = [];
         this.finalValue = [];
        
        for ( var i = 0; i < this.bills.length; i++) {
            var percentage;
            var bill = this.bills[i];
            if(bill < 50) {
                percentage = 0.2;
            } else if (bill >= 50 && bill < 200) {
                percentage = 0.15;
            } else {
                percentage = .1;
            }

            this.tips[i] = bill * percentage;
            this.finalValue[i] = bill + this.tips[i];
        }
    }
}

John.calcTip();
console.log(John);