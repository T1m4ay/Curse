// task 1

// const population = [1402, 329, 144, 1380];
// const precentage = [];
// function percentageOfWorld1(population){
//     var pop = population * 100 / 7900;
//     return pop;
// }

// for (var i = 0; i < 4; ++i){
//     precentage[i] = percentageOfWorld1(population[i]);
// }

// for (var i = 0; i < 4; ++i){
//     console.log(precentage[i]);
// }

// task 2

// const neighboursGermany = ['Poland', 'France', 'Switzerland', 'Belgium', 'Netherlands', 'Austria'];
// var len_neigh = neighboursGermany.length;
// neighboursGermany[len_neigh] = 'Utopia'

// for (var i = 0; i < len_neigh + 1; ++i){
//         console.log(neighboursGermany[i]);
//     }

// delete neighboursGermany[len_neigh];

// for (var i = 0; i < len_neigh; ++i){
//     console.log(neighboursGermany[i]);
// }

// for (var i = 0; i < len_neigh; ++i){
//     if(neighboursGermany[i] == 'Germany'){
//         console.log(neighboursGermany[i] + ' a central European country');
//     }
//     else{
//         console.log(neighboursGermany[i] + ' is Probably not a central European country');
//     }
// }
// var indexcountry;
// for (var i = 0; i < len_neigh; ++i){
//     if(neighboursGermany[i] == 'Poland'){
//         indexcountry = i;
//     }
// }
// neighboursGermany[indexcountry] = 'Republic of ' + neighboursGermany[indexcountry];

// for (var i = 0; i < len_neigh; ++i){
//     console.log(neighboursGermany[i]);
// }

// task 3

// let my_Country = {
//     country: 'Germany',
//     capital: 'Berlin',
//     language: 'german',
//     population: 83,
//     neighbours: 6
// };

// task 4

// console.log(my_Country.country + ' has ' + my_Country.population + ' million ' + my_Country.language + '-speaking people, ' + my_Country.neighbours + ' neighbouring countries and a capital called ' + my_Country.capital);

// my_Country.population = my_Country.population * 2;

// console.log(my_Country.population);

// my_Country.population = my_Country.population / 4;

// console.log(my_Country.population);

// task 5

// let my_Country = {
//     country: 'Germany',
//     capital: 'Berlin',
//     language: 'german',
//     population: 83,
//     neighbours: 6,
//     describe(){
//         console.log(this.country + ' has ' + this.population + ' million ' + this.language + '-speaking people, ' + this.neighbours + ' neighbouring countries and a capital called ' + this.capital)
//     },
//     checkisland(){
//         this.isIsland = (this.neighbours.length == 0) ? true : false;
//     }
// }

// task 6   

// for (var i = 0; i < 50; ++i){
//     console.log('Voter number ' + i + ' is currently votin')
// }

// task 7

// const population = [1402, 329, 144, 1380];
// const precentage2 = [];
// function percentageOfWorld1(population){
//     var pop = population * 100 / 7900;
//     return pop;
// }

// for (var i = 0; i < 4; ++i){
//     precentage2[i] = percentageOfWorld1(population[i]);
// }

// for (var i = 0; i < 4; ++i){
//     console.log(precentage2[i]);
// }


// task 8

// var listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden','Kazakhstan']];
// var length = listOfNeighbours.length;

// for (var i = 0; i < length; ++i){
//     var lengthMass = listOfNeighbours[i].length;
//     console.log('Neighbours: ');
//     for (var j = 0; j < lengthMass; ++j){
//         console.log(listOfNeighbours[i][j]);
//     }
// }

// task 9

// const population = [1402, 329, 144, 1380];
// const precentage3 = [];
// var length = population.length;
// function percentageOfWorld1(population){
//     var pop = population * 100 / 7900;
//     return pop;
// }
// while(length < 0){
//     precentage3[length] = percentageOfWorld1(population[length]);
// }
// while(length < 0){
//     console.log(precentage3[length]);
// }

// task 10

let Yesyl1 = +(prompt( 'Yesyl1:' ));
let Yesyl2 = +(prompt( 'Yesyl2:' ));
let Yesyl3 = +(prompt( 'Yesyl3:' ));
let Yertys1 = +(prompt( 'Yertys1:' ));
let Yertys2 = +(prompt( 'Yertys2:' ));
let Yertys3 = +(prompt( 'Yertys3:' ));
var Yesylcalc;
var Yertyscalc;

Yesylcalc = Yesyl1 + Yesyl2 + Yesyl3;
Yertyscalc = Yertys1 + Yertys2 + Yertys3;

var avgYesyl = Yesylcalc / 3;
var avgYertys = Yertyscalc / 3;

if (avgYesyl < avgYertys){
    console.log('Yertys win (' + avgYesyl + ' vs. ' + avgYertys +')')
} else if (avgYesyl > avgYertys){
    console.log('Yesyl win (' + avgYesyl + ' vs. ' + avgYertys +')')
} else {
    console.log('Draw!')
}