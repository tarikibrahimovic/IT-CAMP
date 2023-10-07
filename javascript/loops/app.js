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

// let i = 0;

// for( ; i < 5; ){
//     i++;
// }

// let j = 0;

// while(j < 5){
//     j++
// }

////////////////////5.7 a)

// let fp = 1, fpp = 1;

// let n = parseInt(prompt("Unesite broj elemenata:"))

// let rowOutput = '1 1 ';

// let i = 3, suma = 2;

// while(i <= n){
//     let pom = fp + fpp
//     rowOutput += `${pom} `
//     fp = fpp;
//     fpp = pom;
//     suma += pom
//     i++
// }
// console.log(rowOutput, suma);

//////////////////5.8

// let n = parseInt(prompt("Unesite element:"))
// let a = parseInt(prompt("Unesite stepen elemnta:"))

// // console.log(Math.pow(n, a));
// let i = 0, proizvod = 1;

// while(i<a){
//     proizvod *= n
//     i++
// }

// console.log(proizvod);

//////////////////5.9

// let suma = 0, iterator = 0;

// let stop = parseFloat(prompt("Unesite broj:"))

// while(stop !== 0){
//     suma+= stop
//     stop = parseFloat(prompt("Unesite novi broj:"))
//     iterator++
// }

// console.log(suma / iterator);

////////////////5.10


// let suma = 0, iterator = 0;

// let stop = parseFloat(prompt("Unesite broj:"))

// while(stop !== 0){
//     if(stop >= 2 && stop <= 6){
//         suma+= stop
//         iterator++
//     }

//     stop = parseFloat(prompt("Unesite novi broj:"))
// }

// console.log(suma / iterator);


///////////////5.12

// let n = parseInt(prompt("Unesite n:"))
// let m = parseInt(prompt("Unesite m:"))

// if(m > n){
//     [m, n] = [n, m]
//     // let pom = m;
//     // m = n;
//     // n = pom
// }

// let i = m, suma = 0;

// while(i <= n){
//     if(i % 2 === 1){
//         suma += Math.sqrt(i)
//     }
//     i++
// }

// console.log(suma);


///////////////5.18


// let n = parseInt(prompt("Unesite broj:"))

// let suma = 0;

// let pom=n;

// while(pom >= 1){
//     suma += pom % 10//9
//     pom = Math.floor(pom/10)
// }

// if(n % suma === 0){
//     console.log("deljivo");
// }
// else{
//     console.log("nedeljivo");
// }

/////////////////5.19

// let n = parseInt(prompt("Unesite broj:"))
// let obrnuto = 0;

// while(n > 0){
//     obrnuto = obrnuto*10 + n%10
//     n = Math.floor(n/10)
// }

// console.log(obrnuto);

/////////////////5.20

// let n = parseInt(prompt("Unesite broj:"))

// for(let k = 2; k <= n; k++){
//     while(n % k === 0){
//         n /= k;
//         console.log(k);
//     }
// }

////////////////////5.21

// for(let a = 1; a <=20; a++){
//     for(let b = 1; b <= 20; b++){
//         let zbir = a*a + b*b
//         let c=1;
//         while(c*c <= zbir){
//             if(c*c === zbir){
//                 console.log(a, b, c);
//             }
//             c++
//         }
//     }
// }

///////////////

// let x = 10;

// console.log(Math.abs(-3));

// let a = 3;
// let b = 5;

// [a, b] = [b, a]

// let pom=a;

// a=b;

// b=pom

// console.log();

//////////////2.26

// let xa = 1, ya = 1, xb = 4, yb = 1, xc = 2, yc = 5;

// let a = Math.sqrt(Math.pow(xb - xc, 2) + Math.pow(yb - yc, 2), 2)
// let b = Math.sqrt(Math.pow(xc - xa, 2) + Math.pow(yc - ya, 2), 2)
// let c = Math.sqrt(Math.pow(xa - xb, 2) + Math.pow(ya - yb, 2), 2)


// let s = (a + b + c) / 2

// let p = Math.sqrt(s * (s - a) * (s - b) * (s - c))

// console.log(p);

////////////////////////2.27

// let broj = parseInt(prompt("unesite trocifreni broj"))

// let a = Math.floor(broj/100)
// let b = Math.floor(broj/10)%10
// let c = Math.floor(broj%10)

// console.log(a);
// console.log(b);
// console.log(c);

// console.log(a+b+c)

////////////////////2.28

// let n = parseInt(prompt("Unesite broj:"))

// let n500 = Math.floor(n / 500)
// let n100 = Math.floor((n % 500) / 100)
// let n1 =  n % 100

// console.log(n500, n100, n1);


//////////////////////2.29

// let radijani = parseFloat(prompt("Unesite broj:"))

// radijani = radijani * 180 / Math.PI

// let stepeni = Math.floor(radijani)

// radijani = radijani - stepeni

// let minuti = Math.floor(radijani* 60)

// console.log(radijani)

// console.log(stepeni, minuti, sekunda);

// let x = 5

// let y = 4

// console.log(x&y);
// console.log(x|y);
// console.log(x>>y);
// console.log(x<<y);

/////////////////////////////////////////3.13

// let a = parseFloat(prompt("Unesite a"))
// let b = parseFloat(prompt("Unesite b"))
// let c = parseFloat(prompt("Unesite c"))
// let p = 0;
// let s = 0;

// if(a+b>c || b+c>a || c+a>b){
//     s = (a+b+c)/2
//     p = Math.sqrt(s*(s-a)*(s-b)*(s-c))
// }
// console.log(p || "ne moze da se napravi trougao");

/////////////////////////////////////4.5

let n = parseFloat(prompt("Unesite zeljeni broj elemenata:"))
let suma = 0;

for(let i=0; i<n;i++){
    let broj = parseFloat(prompt(`Unesite ${i+1} element:`))
    suma += broj
}

console.log(`Suma je: ${suma} a srednja vrednost je: ${suma/n}`);