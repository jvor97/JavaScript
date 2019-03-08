
var john = {
    name: 'John',
    job: 'designer',
    yearOfBirth: 1999,
};    // ---> this is not a good, because its too complicated if u have many objects with the same properties

//Therefore you do this:

//Function constructor-----------

var Person = function(name, job, yearOfBirth) {
    this.name = name;
    this.job = job;
    this.yearOfBirth = yearOfBirth;
}  //here you did a Constuctor (!remember- const. always start with uppercase)


// We do not put method to the var Person beccause if the method was long it would cause mess therefore we use protorype:
Person.prototype.calculateAge = function() {
    console.log(2019 - this.yearOfBirth);
};


var john = new Person('John', 'designer', 1999);
var mike = new Person('Mark', 'driver', 1988);

john.calculateAge();
mike.calculateAge();



//Object.create

var personProto = {
    calculateAge: function(){
        console.log(2019 - this.yearOfBirth);
    }
};

var jane = Object.create(personProto);
jane.name = 'Jane';
jane.job = 'teacher';
jane.yearOfBirth = 1989;

var Fero = Object.create(personProto, {
    name: { value: 'Fero'},
    job: { value: 'driver'},
    yearOfBirth: { value: 1989}
});


//Primitive vs objects------------
//Primitive do a copy but objects just refears to a place/thing 
//Primitive - ide to podla poradia, nemeni nalogovanie var, kt je zadane vyššie 

var a = 4;
var b = a;
a = 56;

console.log(a);
console.log(b);

//Objects - automaticky to zmeni hodnotu v celom programe
var obj1 = {
    age: 23,
    city: 'Lisbon',
}

var obj2 = obj1;
obj1.age = 20;

console.log(obj1.age);
console.log(obj2.age);

//Functions - pomocou funk. možeš zmeniť iba objects a nie primitive
var age = 38;
var obj = {
    name: 'Julia',
    city: 'Bratislava',
}

function change(a,b) {
    a = 10;
    b.city = 'Vienna';
}

change(age,obj);

console.log(age);  //vo funkcii nezmeniš var, kt je vonku lebo je to primitive
console.log(obj.city)



// Passing functions as arguments    CALL BACK Function---------
var years = [1990,1965, 1965, 1978];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for(i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calcAge(el) {
    return 2019 - el;
}

function fullAge(age) {
    return age >= 18;
}

var age = arrayCalc(years, calcAge);
var fullAge = arrayCalc(age,fullAge);

console.log(age);
console.log(fullAge);

/*
var bor = calcAge(years[i]);
console.log(bor); */ //nefunguje takto



//Function returning function-----------
function interviewQuestion(job) {
    if(job === 'teacher'){
    return function(name) {
        console.log(name + ', what do you teach ?');
    }
 } else if (job === 'designer') {
        return function(name) {
            console.log(name + ', do you know what UX design is ?');
        }
    } else {
        return function(name) {
            console.log('What do you do ' + name + ' ?');
        }
    } 
}

var teacherQuestion = interviewQuestion('teacher');

teacherQuestion('John');
//OR
interviewQuestion('designer')('Mark');


//IIFE--------------

(function() {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

(function(goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);
