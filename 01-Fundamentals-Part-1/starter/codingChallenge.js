let markWeight;
let markHeight;
let markBMI;
let johnWeight;
let johnHeight;
let johnBMI;
let markHigherBMI;

// Test Dataset 1
markWeight = 78;
markHeight = 1.69;
johnWeight = 92;
johnHeight = 1.95;

markBMI = markWeight / (markHeight * markHeight);
johnBMI = johnWeight / (johnHeight * johnHeight);
markHigherBMI = markBMI > johnBMI;

// 27.309968138370508 24.194608809993426 true
console.log(markBMI, johnBMI, markHigherBMI);

if (markHigherBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's! (${johnBMI})`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's! (${markBMI})`);
}

// Test Dataset 2
markWeight = 95;
markHeight = 1.88;
johnWeight = 85;
johnHeight = 1.76;

markBMI = markWeight / (markHeight * markHeight);
johnBMI = johnWeight / (johnHeight * johnHeight);
markHigherBMI = markBMI > johnBMI;

// 26.87867813490267 27.44059917355372 false
console.log(markBMI, johnBMI, markHigherBMI);

if (markHigherBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's! (${johnBMI})`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's! (${markBMI})`);
}
