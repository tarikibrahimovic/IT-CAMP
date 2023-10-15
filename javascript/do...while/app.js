// let i = 0
// do{
//     console.log(i);
//     i++
// }
// while(i <= 10)

// while(i < 10){
//     console.log(i);
//     i++;
// }

////////////////////////////////////6.2

// let i=0

// do{
//     console.log(i);
//     i+=2
// }
// while(i<=10)

// do{
//     if (i % 2 === 0){
//         console.log(i);
//     }

//     i++;
// }
// while(i <= 10)

//////////////////////////////////////////6.3

// let n;

// do{
//     n = parseFloat(prompt("Unesite broj:"))
// }
// while(n*n >= 100)

/////////////////////////////////////////6.4

// let n = parseInt(prompt("Unesite broj:"))
// let stepen = 0
// let broj = 2

// do{
//     console.log(Math.pow(broj, stepen));
//     stepen++;
// }
// while(Math.pow(broj, stepen) <= n)

///////////////////////////////6.8

// let x = parseInt(prompt("Unesite donju granicu:"));
// let y = parseInt(prompt("Unesite gornju granicu:"));

// let broj = x;

// do {
//   if (x < 0 || y > 100) {
//     x = parseInt(prompt("Unesite donju granicu:"));
//     y = parseInt(prompt("Unesite gornju granicu:"));
//     broj = x;
//   } else {
//     if (broj % 4 === 0) {
//       console.log(broj);
//     }
//     broj++;
//   }
// } while (broj <= y);

//////////////////////////////////////6.9

let i = 100, suma = 0;

do{
    if(i % 64 === 0){
        suma += i
    }
    i++
}
while(i <=999)

console.log(suma);
