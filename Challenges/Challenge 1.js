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



//Using function

var Mark = {
    mass: 75,
    height: 1.8,
};
var John = {
    mass: 90,
    height: 1.92,
};

function CalcBMI(mass, height) {
    return(mass / height^2);
}
console.log(CalcBMI(75, 1.8));
console.log(CalcBMI(90, 1.92));