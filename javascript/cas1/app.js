// let a = 10;
// let b = 7;
// let rec = "Pravougaonik";
// console.log(a % b);
// console.log(rec);

// const a = 10;

// let b = 7;

// b = 10;

// a = 20;

// console.log(a);

// const PI = 3.14;

// let r = 10;

// r--;

// console.log(2 * r * PI);
// console.log(r);

// let a = 10
// let b = 7
// let c = 5;
// c = c + a + b;
// c %= a + b;
// let d = 5;
// d -= a + b;

// console.log(d);

// console.log(c);

// console.log(8 >= 8);

// let a = 5;
// let b = "5";
// let c = 5;
// let d = !true;

// console.log(d);

// console.log(a === b);

// console.log(a !== b);

// let a = "Tarik";
// let b = "hasannnn";
// let c = "7"

// console.log(a - b);// postoji undefined, null, NaN, Infinity, -Infinity

// console.log(a + b);

// console.log(a === b);

// console.log(a < b);

// console.log(c - "2");

// let rec = "Pravougaonik nesto nesto ";
// let rec2 = `hajde probaj ${rec}`;
// console.log(rec + rec2);

// let objekat = {
//     ime: "Tarik",
//     prezime: "Ibrahimovic",
//     godine: 25,
//     adresa: {
//         ulica: "Marsala Tita",
//         broj: 1
//     }
// }

// console.log(objekat.adresa.ulica);
//0   1  2  3  4  5  6  7  8
// let niz = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(niz[6]);

//   let a = "Tarik";

//   console.log(a);

//   let globalVar = "This is a global variable";

//   function fun() {
//     let localVar = "This is a local variable";

//     function fun2(){
//         let localVar2 = "nesot nesto"
//         console.log(globalVar, localVar, localVar2);
//     }

//     console.log(localVar2);

//     console.log(globalVar);
//     console.log(localVar);
//   }

//   console.log(localVar);

// let a = 10;
// let b = 15;
// let c = true;
// let d = {
//     ime: "Tarik",
//     prezime: "Ibrahimovic"
// };

// function mnogoSlozenaFunkcija(arg1, arg2) {
//     console.log(a + b);
//     // return arg1 + arg2;
// }

//arrow function
// let drugaFunkcija = (arg1, arg2) => {
//     console.log(a + b);
//     return arg1 + arg2;
// }

// mnogoSlozenaFunkcija(a, b)

// let rezultat = mnogoSlozenaFunkcija(a, b);
// console.log(rezultat);

// function logika(semafor1, semafor2, broj1, broj2) {
//   // if(semafor === 1){
//   //     if(semafor2 === 1){
//   //         console.log(broj1 + broj2);
//   //     }
//   // }
//   if (semafor1 === 1 || semafor2 >= 1) {
//     console.log(broj1 + broj2);
//   } else if (semafor1 === 2) {
//     console.log(broj1 * broj2);
//   } else if (semafor1 === 3) {
//     console.log(broj1 / broj2);
//   } else {
//     console.log(broj1 - broj2);
//   }
// }

// logika(15, 1, 5, 10);

// function oddOrEven(semafor, arg1, arg2){
//   if(semafor % 2 === 0){
//     console.log(arg1 + arg2);
//   }
//   else{
//     console.log(arg1 - arg2);
//   }
// }

// oddOrEven(502394802938403, 10, 5);

// let a = 5.0000000000001
// console.log(Math.round(a));
// console.log(Math.floor(a));
// console.log(Math.ceil(a));

// function logika(semafor1,  broj1, broj2) {
//   switch (semafor1) {
//     case 1:
//       console.log(broj1 + broj2);
//       break;
//     case 2:
//       console.log(broj1 * broj2);
//       break;
//     case 3:
//       console.log(broj1 / broj2);
//       break;
//     case 4:
//       console.log(broj1 % broj2);
//       break;
//     default:
//       console.log(broj1 - broj2);
//       break;
//   }
// }

// logika(4, 5, 10)

// for(let i = 5; i < 10; i++){
//   console.log("nesto");
// }

let rec = "tarik";
let rec2 = "ibrahimovic";

let rec3 = rec.slice(3);

// console.log(rec3);

// let cars = ["BMW", "Volvo", "Mini", "Mercedes", "Audi", "Fiat", "Porsche", "Volkswagen"];

// for(let i = 0; i < cars.length; i++){
//   console.log(cars[i]);
// }

// for(let i = cars.length - 1; i >= 0; i--){
//   console.log(cars[i]);
// }

// let i = 0;
// let len = cars.length;
// let text = "";
// for (; i < len; ) {
//   text += cars[i] + "<br>";
//   i++;
// }

// function solution(start, finish) {
//   //Mew
//   let niz = [];
//   for (let i = start; i <= finish; ) {
//     if (i + 3 <= finish) {
//       i += 3;
//       niz.push(i);
//       console.log(i, niz);
//     } else if (i + 1 <= finish) {
//       i += 1;
//       niz.push(i);
//       console.log(i, niz);
//     }
//     if (i === finish) {
//       return niz.length;
//     }
//   }
// }

// solution(1, 10);

let broj1 = parseFloat(prompt("Unesite broj 1")) 
let broj2 = parseFloat(prompt("Unesite broj 2"))

console.log(broj);

