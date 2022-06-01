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

// ---------------------------------------------------------------------------
// CODING CHALLENGE 3

// Dataset 1 - Dolphins Win!
let dolphinsGame1Score = 96;
let dolphinsGame2Score = 108;
let dolphinsGame3Score = 89;

let koalasGame1Score = 88;
let koalasGame2Score = 91;
let koalasGame3Score = 110;

let dolphinsAverageScore = (dolphinsGame1Score + dolphinsGame2Score + dolphinsGame3Score) / 3;
let koalasAverageScore = (koalasGame1Score + koalasGame2Score + koalasGame3Score) / 3;

console.log(dolphinsAverageScore, koalasAverageScore);

if (dolphinsAverageScore > koalasAverageScore) {
    console.log("Dolphins win! 🏆");
} else if (dolphinsAverageScore < koalasAverageScore) {
    console.log("Koalas win! 🏆");
} else {
    console.log("Everyone wins a trophy! 🏆");
}

// Dataset 2 - minimum score of 100
dolphinsGame1Score = 97;
dolphinsGame2Score = 112;
dolphinsGame3Score = 101

koalasGame1Score = 109;
koalasGame2Score = 95;
koalasGame3Score = 123;

let minimumScore = 100;

dolphinsAverageScore = (dolphinsGame1Score + dolphinsGame2Score + dolphinsGame3Score) / 3;
koalasAverageScore = (koalasGame1Score + koalasGame2Score + koalasGame3Score) / 3;

console.log(dolphinsAverageScore, koalasAverageScore);

if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore >= minimumScore) {
    console.log("Dolphins win! 🏆");
} else if (dolphinsAverageScore < koalasAverageScore && koalasAverageScore >= minimumScore) {
    console.log("Koalas win! 🏆");
} else {
    console.log("Everyone wins a trophy! 🏆");
}

// Dataset 3 - minimum score of 100, including ties
dolphinsGame1Score = 97;
dolphinsGame2Score = 112;
dolphinsGame3Score = 101;

koalasGame1Score = 109;
koalasGame2Score = 95;
koalasGame3Score = 106;

minimumScore = 100;

dolphinsAverageScore = (dolphinsGame1Score + dolphinsGame2Score + dolphinsGame3Score) / 3;
koalasAverageScore = (koalasGame1Score + koalasGame2Score + koalasGame3Score) / 3;

console.log(dolphinsAverageScore, koalasAverageScore);

if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore >= minimumScore) {
    console.log("Dolphins win! 🏆");
} else if (dolphinsAverageScore < koalasAverageScore && koalasAverageScore >= minimumScore) {
    console.log("Koalas win! 🏆");
} else if (dolphinsAverageScore === koalasAverageScore && dolphinsAverageScore >= minimumScore) {
    console.log("Everyone wins a trophy! 🏆");
} else {
    console.log("No winner 😭");
}

// refactor
if (dolphinsAverageScore >= minimumScore && koalasAverageScore >= minimumScore) {
    if (dolphinsAverageScore > koalasAverageScore) {
        console.log("Dolphins win! 🏆");
    } else if (dolphinsAverageScore < koalasAverageScore) {
        console.log("Koalas win! 🏆");
    } else {
        console.log("Everyone wins a trophy! 🏆");
    }
} else {
    console.log("No winner 😭");
}

// ---------------------------------------------------------------------------
// CODING CHALLENGE 4

let bill;
let tip;

bill = 275
tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
console.log(`The bill was ${bill}, and the tip was ${tip}, and the total value was ${bill + tip}`);

bill = 40
tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
console.log(`The bill was ${bill}, and the tip was ${tip}, and the total value was ${bill + tip}`);

bill = 430
tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
console.log(`The bill was ${bill}, and the tip was ${tip}, and the total value was ${bill + tip}`);
