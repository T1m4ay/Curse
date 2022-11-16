// let name = prompt( 'Как называется ваша страна?' );
// let from = prompt( 'Где находится ваша страна?');
// let language = prompt( 'На каком языке говорят в вашей стране');
// let x = +(prompt( 'Сколько людей проживают в вашей стране?' ));

// task 1

// 1

// console.log(x/2);

// 2

// console.log(x + 1);


// 3

// if(x > 6000000){
//     console.log('Да')
// }
// else{
//     console.log('Нет')
// }

// 4

// if(x < 33000000){
//     console.log('Да')
// }
// else {
//     console.log('Нет')
// }

// 5

// var description = name + ' is in ' + from + ', and its' + x/1000000 + 'million people speak ' + language;

// task 2

// 1

// task 3

// 1

// if(x < 33000000){
//     console.log('Население ' + name + ' выше среднего')
// }
// else {
//     console.log('Население ' + name + 'на' + (33000000-x)/1000000 + 'миллиона ниже среднего')
// }

// 2

// x = x + 13;
// x = x + 130;
// console.log(x);
// x = x - 143;
// console.log(x);

// task 4

// 1

// console.log('9' + '5')
// console.log('19' - '13' + '17')
// console.log('19' - '13' - 17);
// if ('123' < 57){
//     true;
// }
// console.log(5 + 6 + '4' + 9 - 4 -2);

// 2

// task 5

// let numNeighbours = prompt( 'Сколькоыф соседей у вашей страны?' );

// if(numNeighbours == 1){
//     console.log('Only 1 border!');
// }
// else if(numNeighbours != 1){
//     console.log('More than 1 border');
// }
// else{
//     console.log('No borders');
// }

// task 6

// if(x < 50000000 && from != 'Island'){
//     console.log('You should live in :)');
// }
// else{
//     console.log('Portugal does not meet your criteria :(');
// }

// task 7

// var l = 0;

// if(language == 'chinese' || language == 'mandarin'){
//     l = 1
// } else if(language == 'spanish'){
//     l = 2
// } else if(language == 'english'){
//     l = 3
// } else if(language == 'hindi'){
//     l = 4
// } else if(language == 'arabic')[
//     l = 5
// ]

// switch(l){
//     case 1:
//         console.log('MOST number of native speakers!');
//         break;
//     case 2:
//         console.log('2nd place in number of native speakers');
//         break;
//     case 3:
//         console.log('3rd place');
//         break;
//     case 4:  
//         console.log('Number 4');
//         break;
//     case 5: 
//         console.log('5th most spoken language');
//         break;
//     default:
//         console.log('Great language too :D');
//         break;
// }

// task 8

// if(x > 33000000)

// task 8

// let ma = +(prompt( 'Масса Армана' ));
// let ha = +(prompt( 'Рост Армана' ));
// let mk = +(prompt( 'Масса Куата' ));
// let hk = +(prompt( 'Рост Куата' ));

// var armanBMI = ma/Math.pow(ha, 2);
// var kuatBMI = mk/Math.pow(hk, 2);

// var armanHigherBMI;

// if(armanBMI > kuatBMI){
//     armanHigherBMI = 'true'
// }
// else {
//     armanHigherBMI = 'false'
// }

// task 9

// let ma = +(prompt( 'Масса Армана' ));
// let ha = +(prompt( 'Рост Армана' ));
// let mk = +(prompt( 'Масса Куата' ));
// let hk = +(prompt( 'Рост Куата' ));

// var armanBMI = ma/Math.pow(ha, 2);
// var kuatBMI = mk/Math.pow(hk, 2);

// if(armanBMI > kuatBMI){
//     console.log('Arman’s BMI is higher than Kuat’s!');
// }
// else {
//     console.log('Kuat’s BMI is higher than Arman’s!');
// }

// task 10

// var averAlmaty = 0, averAstana = 0;

// 1

// averAlmaty = (96 + 108 + 89)/3;
// averAstana = (88 + 91 + 110)/3;

// 2

// averAlmaty = (97 + 112 + 101)/3;
// averAstana = (109 + 95 + 123)/3;

// if(averAlmaty > averAstana){
//     console.log('Almaty win!');
// }else if(averAlmaty < averAstana){
//     console.log('Astana win!');
// }else{
//     console.log('Draw!')
// }

// 3

// var fAlmaty = 96;
// var sAlmaty = 108;
// var tAlmaty = 89;

// var fAstana = 88;
// var sAstana = 91;
// var tAstana = 110;

// if(fAlmaty > 100){
//     averAlmaty += fAlmaty;
// }else if(sAlmaty > 100){
//     averAlmaty += sAlmaty;
// }else if(tAlmaty > 100){
//     averAlmaty += tAlmaty;
// }

// if(fAstana > 100){
//     averAstana += fAstana;
// }else if(sAstana > 100){
//     averAstana += sAstana;
// }else if(tAstana > 100){
//     averAstana += tAstana;
// }

// if(averAlmaty > averAstana){
//     console.log('Almaty win!');
// }else if(averAlmaty < averAstana){
//     console.log('Astana win!');
// }else{
//     console.log('Draw!')
// }

// 4

// if(averAlmaty > averAstana){
//     console.log('Almaty win!');
// }else if(averAlmaty < averAstana){
//     console.log('Astana win!');
// }else if(averAlmaty == averAstana){
//     if(averAlmaty > 100 && averAstana > 100){
//         console.log('Draw!');
//     }else{
//         console.log('no team wins the trophy');
//     }
// }

// task 11

// let money = +(prompt( 'Total bill:' ));

// var tip = 0;

// tip = (money => 50 && money <= 300) ? tip = money * 0.15 : tip = money * 0.2;

// console.log('The bill was ' + money + ', the tip was ' + tip + ', and the total value ' + (money+tip));