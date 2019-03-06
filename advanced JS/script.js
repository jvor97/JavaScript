
var john = {
    name: 'John',
    job: 'designer',
    yearOfBirth: 1999,
};    // ---> this is not a good, because its too complicated if u have many objects with the same properties

//Therefore you do this:

//Function constructor

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

var jane = object.create(personProto);
jane.name = 'Jane';
jane.job = 'teacher';
jane.yearOfBirth = 1989;

var Fero = object.create(personProto, {
    name: { value: 'Fero'},
    job: { value: 'driver'},
    yearOfBirth: { value: 1989}
});