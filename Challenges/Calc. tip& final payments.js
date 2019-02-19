//Challenge 3
//Dobré riešenie

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

//Zlé riešenie

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


//Second time done with for 

var JohnBills = [124,48,368];

function calcTip(bill) {

    var tips = [];
    var percentage = 0;

    for(i = 0; i < bill.length; i++){
      var onebill = bill[i];
        if (onebill < 50){
            percentage = 0.2;
        } else if (onebill >= 50 && onebill < 200){
            percentage = 0.15;
        } else {
            percentage = 0.1;
        }
        var tip = percentage * bill[i];
        tips[i] = tip;
    }
    return tips;
}

var Johntips = calcTip(JohnBills);
console.log(Johntips);


function calcFinalValue(bill) {

    var finalvalues = [];
    var percentage = 0;

    for(i = 0; i < bill.length; i++){
      var onebill = bill[i];
        if (onebill < 50){
            percentage = 0.2;
        } else if (onebill >= 50 && onebill < 200){
            percentage = 0.15;
        } else {
            percentage = 0.1;
        }
        var finalvalue = percentage * bill[i] + bill[i];
        finalvalues[i] = finalvalue;
    }
    return finalvalues;
}

var JohnFinalValues = calcFinalValue(JohnBills);
console.log(JohnFinalValues);


