// task 1

// for(var i = 0; i < 3; ++i){
//     let country = prompt('Country:');
//     let population = +(prompt('Population:'));
//     let capitalCity = prompt('Capital City:')
//     function py(country, population, capitalCity){
//         console.log(country + " has " + population/1000000 + " million people and its capital city is " + capitalCity)
//     }
//     py(country, population, capitalCity);
// }

// task 2

// for(var i = 0; i < 3; ++i){
//     let population = +(prompt('Population:'));
//     function percentageOfWorld1(population){
//         var pop = population * 100 / 7900;
//         console.log(pop);
//     }
//     percentageOfWorld1(population);
// }

// for(var i = 0; i < 3; ++i){
//     let population = +(prompt('Population:'));
//     function percentageOfWorld2(population){
//         var pop = population * 100 / 7900;
//         console.log(pop);
//     }
//     percentageOfWorld2(population);
// }

// task 3

// for(var i = 0; i < 3; ++i){
//     let population = +(prompt('Population:'));
//     var pop = (population) => (population * 100 / 7900);
//     console.log(pop(population));
// }

// task 4

// let country = prompt('Country:');
// let population = +(prompt('Population:'));
// function percentageOfWorld1(population){
//     var pop = population * 100 / 7900;
//     return pop;
// }
// function describePopulation(country, population){
//     console.log( country + ' has ' + population + ' million people, which is about ' + percentageOfWorld1(population) + '% of the world.')
// }
// describePopulation(country, population);

// task 5


let year = +(prompt('Year:'));

function days_of_a_year(year){
if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)){
    return 366;
}
else {
    return 365;
}
}
console.log(days_of_a_year(year));