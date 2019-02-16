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

var Mark = {
    firstName: 'Mark',
    lastName: 'Perk',
    bills: [77, 475,110,45],
    calcTip: function() {
        this.tips = [];
        this.finalValue = [];

        for (var i = 0; i < this.bills.length; i++) {

            var percentage;
            var bill = this.bills[i];

            if(bill < 100) {
                percentage = 0.2;
            } else if( bill >= 100 && bill < 300){
                percentage = 0.1;
            } else{
                percentage = 0.25;
            }

            this.tips[i] = bill * percentage;
            this.finalValue[i] = bill + this.tips[i];
        }
    }
}


Mark.calcTip();
console.log(Mark);

// avarageTip

function averageTip(tips){
    var sum  = 0;

    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }

    var average = sum / tips.length;

    return average;
}


var averageMark = averageTip(Mark.tips);
console.log(averageMark);


var averageJohn = averageTip(John.tips);
console.log(averageJohn);

if (averageMark > averageJohn){
    console.log( 'Mark´s family gave in average more tips than John´s family. They gave ' + averageMark + ' € in average.')
} else {
    console.log( 'John´s family gave in average more tips than Mark´s family. They gave ' + averageJohn + ' € in average.')
}

//Maxtip

var tips = Mark.tips;
function maxTip(tips) {
    var max = tips[0];

    for (var i = 0; i < tips.length; i++) {
        if ( max < tips[i]) {
          max = tips[i];
        }
    }
    return max;
}

var tips = Mark.tips;
var max = maxTip(tips);
console.log(max);