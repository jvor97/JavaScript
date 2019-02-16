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


//Challenge 4- second time

var John = {
    fullName: 'John Smith',
    mass: 90,
    height: 1.92,
    calcBMI: function(){
        this.BMI = this.mass / (this.height * this.height);
    }
}
var Mark = {
    fullName: 'Mark Clember',
    mass: 75,
    height: 1.8,
    calcBMI: function(){
        this.BMI = this.mass / (this.height * this.height);
    }
}

John.calcBMI();
Mark.calcBMI();

if (John.BMI > Mark.BMI){
    console.log(John.fullName + ' has a higher BMI equal to ' + John.BMI);
} else if (Mark.BMI > John-BMI){
    console.log(Mark.fullName + ' has a higher BMI equal to ' + Mark.BMI);
} else {
    console.log('There is a draw.')
}