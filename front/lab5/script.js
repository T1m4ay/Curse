// task 1

// function calcTip(bill){
//     return bill * 0.25;
// }

// let bills = [125, 555, 44];
// let tips = new Array(bills.length)
// let total = new Array(bills.length)

// for(var i = 0; i < bills.length; ++i){
//     tips[i] = calcTip(bills[i]);
//     total[i] = tips[i] + bills[i];
// }

// console.log('Bills: ' + bills)
// console.log('Tips: ' + tips)
// console.log('Total: ' + total)

// task 2

// let arman = {
//     name: "Arman",
//     fname: "Halykov",
//     mass: 78,
//     height: 1.69,
//     calcBMI: function (mass, height){
//         return mass / (height * height);
//     }
// }

// let kuat = {
//     name: "Kuat",
//     fname: "Mamyrkhanuly",
//     mass: 92,
//     height: 1.95,
//     calcBMI: function (mass, height){
//         return mass / (height * height);
//     }
// }

// let armanBMI = arman.calcBMI(arman.mass, arman.height);
// let kuatBMI = kuat.calcBMI(kuat.mass, kuat.height);

// if (armanBMI > kuatBMI){
//     console.log("Arman's BMI (" + armanBMI + ") is higher than Kuat's (" + kuatBMI + ")!")
// } else {
//     console.log("Kuat's BMI (" + kuatBMI + ") is higher than Arman's (" + armanBMI + ")!")
// }

// task 3

// let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// let tips = new Array(bills.length)
// let total = new Array(bills.length)

// calcTip = (bill) => {
//     return bill * 0.25;
// }

// calcAverage = (arr) => {
//     let sum = 0;
//     for(let i = 0; i < arr.length; ++i){
//         sum += arr[i];
//     }
//     return sum / arr.length;
// }

// for(let i = 0; i < bills.length; ++i){
//     tips[i] = calcTip(bills[i]);
//     total[i] = tips[i] + bills[i];
// }

// console.log('Bills: ' + bills)
// console.log('Tips: ' + tips)
// console.log('Total: ' + total)

// console.log(calcAverage(total).toFixed(2));

// task 4

// const poll = {
//     registerNewAnswer: "What is your favourite programming language?",
//     options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
//     answers: new Array(4).fill(0),
// }

// function quest(){
//     console.log(poll.question);
//     for (let i = 0; i < poll.options.length; i++) {
//         console.log(poll.options.at(i));
//         }

//     let index = +prompt("Enter number of programming language")
//     poll.answers[index] += 1;

//     console.log("Total answers:")
//     for (let i = 0; i < poll.answers.length; i++) {
//         console.log(poll.answers.at(i));
//     }
// }
// quest();  


// task 5

// let dogsAliya = [3, 5, 2, 12, 7];
// let dogsSaule = [4, 1, 15, 8, 3];

// function checkDogs(dogsAliya, dogsSaule){

//     let Aliya = new Array(dogsAliya.length)
//     for(let i = 0; i < dogsAliya.length; ++i){
//         Aliya[i] = dogsAliya[i];
//     }

//     let Saule = new Array(dogsSaule.length)
//     for(let i = 0; i < dogsSaule.length; ++i){
//         Saule[i] = dogsSaule[i];
//     }

//     for(let i = 0; i < 1; ++i){
//         Aliya[i] = 0;
//     }
//     for(let i = Aliya.length - 2; i < Aliya.length; ++i){
//         Aliya[i] = 0;
//     }

//     for(let i = 0; i < 1; ++i){
//         Saule[i] = 0;
//     }
//     for(let i = Saule.length - 2; i < Saule.length; ++i){
//         Saule[i] = 0;
//     }
//     for(let i = 0; i < Aliya.length; ++i){
//         if(Aliya[i] != 0){
//             console.log("Dog number " + (i + 1) + " is an adult, and is " + Aliya[i] + " years old");
//         }
//     }
//     for(let i = 0; i < Saule.length; ++i){
//         if(Saule[i] != 0){
//             console.log("Dog number " + (i + 1) + " is an adult, and is " + Saule[i] + " years old");
//         }
//     }
// }

// checkDogs(dogsAliya, dogsSaule);

var iLoveJavaScript = true;
var iLoveLearning = false;

if(iLoveJavaScript && iLoveLearning) {
console.log("Awesome! Let's keep learning!");
} else if(!(iLoveJavaScript || iLoveLearning)) {
console.log("Let's see if we can change your mind.");
} else {
console.log("You only like one but not the other? We'll work on it.");
}