//////////4.14
// for (let i = 100; i < 1000; i++) {
//     let prvaCifra = Math.floor(i / 100)
//     let drugaCifra = Math.floor((i % 100) / 10)
//     let trecaCifra = i % 10

//     if(drugaCifra === prvaCifra + 2 && trecaCifra  === 1 + drugaCifra ){
//         console.log(i);
//     }
// }

///////////////////////////////4.15

// for(let i = 100; i < 1000; i++){
//     let prvaCifra = Math.floor(i / 100)
//     let drugaCifra = Math.floor((i % 100) / 10)
//     let trecaCifra = i % 10

//     if(Math.pow(prvaCifra, 3) + Math.pow(drugaCifra, 3) + Math.pow(trecaCifra, 3) === i){
//         console.log(i);
//     }
// }

//////////////////////////4.16

// for(let i = 100; i < 1000; i++){
//     let dveCifre = Math.floor(i / 10)
//     let trecaCifra = i % 10

//     if(Math.pow(dveCifre, 2) - Math.pow(trecaCifra, 2) === i){
//         console.log(i);
//     }
// }

////////////////////////4.17

// for(let a = 1; a <= 9; a++){
//     for(let b = 0; b<=9; b++){
//         for(let c = 0; c<=9; c++){
//             let broj = a*100 + b*10 + c;
//             let dveCifre = a*10 + c

//             if(broj % dveCifre === 0){
//                 console.log(broj);
//             }
//         }
//     }
// }

//////////////////////4.18

// let n = 0;
// let suma = 0

// for(let a = 1; a <= 9; a++){
//     for(let b = 0; b<=9; b++){
//         for(let c = 0; c<=9; c++){
//             if(a + b + c === 5){
//                 suma += a*100 + b*10 + c
//                 n++;
//             }
//         }
//     }
// }
// console.log("Suma je: ", suma);
// console.log("Broj je", n);

/////////////////////4.19

// let broj = parseInt(prompt("Unesite broj:"))
// console.log("Delioci su: ");
// for(let i = 1; i <= broj; i++){
//     if(broj % i === 0){
//         console.log(i);
//     }
// }

/////////////////////4.20

// let broj = parseInt(prompt("Unesite broj:"))
// let suma = 0;
// for(let i = 1; i < broj; i++){
//     if(broj % i === 0){
//         suma += i;
//     }
// }

// if(broj === suma){
//     console.log("Broj je savrsen");
// }
// else{
//     console.log("broj nije savrsen");
// }

/////////////////////4.21

// let n = parseInt(prompt("Unesite broj ucenika: "))
// let suma = 0;
// let jedinica = 0;

// for(let i = 1; i <= n; i++){
//     let ocena = parseInt(prompt("Unesite ocenu ucenika ", i))
//     suma += ocena;

//     if(ocena === 1){
//         jedinica++;
//     }
// }

// console.log(`Prosecna ocena je ${suma / n}`);
// console.log(`Broj jedinica je: ${jedinica}`);

////////////////////4.22//Ilhan, Haris, Amela

// let n = parseInt(prompt("Unesite broj: "))

// for(let sat = 0; sat <= 23; sat++){
//     for(let minut = 0; minut <= 59; minut++){
//         for(let sekunda = 0; sekunda <=59; sekunda++){
//             if(n==(sat / 10 + sat % 10 + minut / 10 + minut % 10 + sekunda / 10 + sekunda % 10)) {
//                 console.log(`${sat} : ${minut} : ${sekunda}`);
//             }
//         }
//     }
// }

//////////////4.26

// let n = parseInt(prompt("Unesite broj:"))

// for(let i = 0; i < n; i++){
//     for(let j = 0; j < n * 2; j++)
//         console.log(`${i}`);
// }


////////////4.28

// let n;
// let m;

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Enter rows: ', (inputName) => {
//   n = inputName;

//   rl.question('Enter columns: ', (inputAge) => {
//     m = inputAge;

//     for(let i = 1; i <= n; i++){
//         let rowOutput = '';
//         for(let j = 0; j <= m; j++){
//             if(i === 1 || i === n){
//                 rowOutput += "*"
//             }
//             else{
//                 if(j === 1 || j === m){
//                     rowOutput += "*"
//                 }
//                 else{
//                     rowOutput += " "
//                 }
//             }
//         }
//         console.log(rowOutput);
//     }

//     rl.close();
//   });
// });

////////////////b

// let n = parseInt(prompt("Unesite broj redova:"))
// let m = parseInt(prompt("Unesite broj kolona:"))

// for(let i = 1; i <= n; i++){
//     let rowOutput = '';
//     for(let j = 1; j <= m; j++){
//         if(i === 1 || i === n){
//             rowOutput += "*"
//         }
//         else{
//             if(j === 1 || j === m){
//                 rowOutput += "*"
//             }
//             else{
//                 rowOutput += " "
//             }
//         }
//     }
//     console.log("\n");
//     console.log(rowOutput);
// }

//////////////////c

// let n = parseInt(prompt("Unesite broj redova:"))
// let m = parseInt(prompt("Unesite broj kolona:"))

// for(let i = 1; i <= n; i++){
//     let rowOutput = ''
//     for(let j = 1; j <= m; j++){
//         if(i >= j){
//             rowOutput += "*"
//         }
//     }
//     console.log(rowOutput);
// }

/////////////////////d

// let n = parseInt(prompt("Unesite broj redova:"))
// let m = parseInt(prompt("Unesite broj kolona:"))

// for(let i = 1; i <= n; i++){
//     let rowOutput = ''
//     for(let j = 1; j <= m; j++){
//         if(i <= j){
//             rowOutput += "*"
//         }
//     }
//     console.log(rowOutput);
// }

///////////////////g

// let n = parseInt(prompt("Unesite broj redova:"))
// let m = parseInt(prompt("Unesite broj kolona:"))

// for(let i = 1; i <= n; i++){
//     let rowOutput = ''
//     for(let j = 1; j <= m; j++){
//         if(i === n){
//             rowOutput += "*"
//         }
//         else if(j === 1 || j === i){
//             rowOutput += "*"
//         }
//         else{
//             rowOutput += " "
//         }
//     }
//     console.log(rowOutput);
// }


///////////////////dj

// let n = parseInt(prompt("Unesite broj redova:"))
// // let m = parseInt(prompt("Unesite broj kolona:"))

// for(let i = 1; i <= n; i++){
//     let rowOutput = ''
//     for(let j = n; j >= 1; j--){
//         if(i === 1){
//             rowOutput += "*"
//         }
//         else if(j === n || j === i){
//             rowOutput += "*"
//         }
//         else{
//             rowOutput += " "
//         }
//     }
//     console.log(rowOutput);
// }


////////////////////e

// let n = parseInt(prompt("Unesite broj redova:"))

// for (let i = 1; i <= n; i++) {
//     let rowOutput = "";
//     for (let k = n; k > i; k--) {
//         rowOutput += " "
//     }
//     for (let j = 1; j <= i; j++) {
//         rowOutput += "* "
//     }
//     console.log(rowOutput);
// }



///////////////4.29

// let n = parseInt(prompt("Unesite broj redova:"))

// for (let i = 1; i <= n; i++) {
//     let rowOutput = "";
//     for (let k = n; k > i; k--) {
//         rowOutput += " "
//     }
//     for (let j = 1; j <= i; j++) {
//         rowOutput += "* "
//     }
//     console.log(rowOutput);
// }

// for(let i = n-1; i >= 1; i--){
//     let rowOutput = "";
//     for (let k = n; k > i; k--) {
//         rowOutput += " "
//     }
//     for (let j = 1; j <= i; j++) {
//         rowOutput += "* "
//     }
//     console.log(rowOutput);
// }

///////////////////4.30

// let n = parseInt(prompt("Unesite broj redova:"))

// for (let i = n; i >= 1; i--) {
//     let rowOutput = "";
//     let iteration = 0;
//     for (let k = n; k > i; k--) {
//         rowOutput += " "
//         iteration++;
//     }
//     for (let j = 1; j <= i; j++) {
//         rowOutput += `${n-iteration} `
//     }
//     console.log(rowOutput);
// }
// for (let i = 2; i <= n; i++) {
//     let rowOutput = "";
//     for (let k = n; k > i; k--) {
//         rowOutput += " "
//     }
//     for (let j = 1; j <= i; j++) {
//         rowOutput += `${i} `
//     }
//     console.log(rowOutput);
// }

/////////primer razlozene for

let i = 0;

for( ; i < 5; ){
    i++;
}

let j = 0;

while(j < 5){
    j++
}