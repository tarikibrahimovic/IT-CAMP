// let niz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

//PUSH

// niz.push("string")
// niz.push(true)
// niz.push(undefined)
// let objekat = {
//     "nesto": "nesto"
// }

// niz.push(objekat)

// let pom = niz.push(10);

// console.log(niz);
// console.log(pom);

//POP

// let pop = niz.pop();

// console.log(niz);
// console.log(pop);

//SHIFT

// let shift = niz.shift()
// console.log(niz);
// console.log(shift);

//UNSHIFT

// let pom = niz.unshift(1,2,3,45)
// console.log(niz);
// console.log(pom);

//toString

// let nesto = niz.toString()

// console.log(nesto);

//JOIN

// console.log(niz.join(""));

//DELETE

// delete niz

//CONCAT

// let niz2 = [10,11,12]

// console.log(niz.concat(niz2));

//SLICE

// console.log(niz.slice(2, 6));

//SPLICE
// niz.splice(2, 4, [1,2,3,4,5])
// console.log(niz);

//MATRIX

// let niz2 = [[]]

// console.log(niz2);

//FLAT

// let niz2 = [[1,2,3], [3,4,5], [6,7,8]]

// let niz3 = new Array(new Array(20))

// console.log(niz2);

// let niz2 = niz.flatMap(el => el > 3 ? el : 0)

////////////////////////NIZOVI 2. CAS

// let niz = [0, 5, 4, 7, 3, 8, 9, 1];

// niz.sort((a, b) => a - b);

// console.log(niz);

// niz.reverse()

// console.log(niz);

// console.log(Math.max(...niz));
// console.log(Math.min(...niz));

// console.log(objekat);

// let objekat = {
//   ime: "Tarik",
//   prezime: "ibrahimovic",
//   brojGodina: 5,
//   ozenjen: false,
//   projekti: [1, 2, 3, 4, 5],
//   function: function nesto() {
//     return true;
//   },
//   mestoStanovanja: {
//     grad: "Novi Pazar",
//     ulica: "Rajka Ackovica",
//     broj: "BB",
//   },
// };

// let objekat2 = {
//   ime: "Hasan",
//   prezime: "ibrahimovic",
//   brojGodina: 10,
//   ozenjen: false,
//   projekti: [1, 2, 3, 4, 5],
//   function: function nesto() {
//     return true;
//   },
//   mestoStanovanja: {
//     grad: "Novi Pazar",
//     ulica: "Rajka Ackovica",
//     broj: "BB",
//   },
// };

// let objekat3 = {
//   ime: "Amer",
//   prezime: "ibrahimovic",
//   brojGodina: 15,
//   ozenjen: false,
//   projekti: [1, 2, 3, 4, 5],
//   function: function nesto() {
//     return true;
//   },
//   mestoStanovanja: {
//     grad: "Novi Pazar",
//     ulica: "Rajka Ackovica",
//     broj: "BB",
//   },
// };

// // console.log(objekat);

// let objekat2 = {...objekat, "mestoStanovanja": {...objekat.mestoStanovanja}}

// // console.log(objekat2);

// objekat2.ime = "Amer"
// objekat2.mestoStanovanja.broj = "10"

// console.log(objekat2);

// console.log(objekat);

// let niz2 = [objekat, objekat2, objekat3];

// console.log(niz2);

// niz2.sort((a, b) => a.brojGodina + b.brojGodina)

// console.log(niz2);

// const cars = [
//     {type:"Volvo", year:2016},
//     {type:"Saab", year:2001},
//     {type:"BMW", year:2010}
//   ];

//   cars.sort(function(a, b){return a.year - b.year});

//   niz2.sort((a,b) => a.brojGodina - b.brojGodina)

//   console.log(niz2);
//   console.log(cars);

// let niz = [1,5,4,6,78,3,5,9,4];

// let niz3 = [...niz];

// let niz3 = [...niz].sort((a,b) => a-b);

// console.log(niz);

// niz3.push(10)

// console.log(niz3);

// let niz = [0, 5, 4, 7, 3, 8, 9, 1];

// for(let i = 0; i<niz.length; i++){
//     console.log(niz[i]);
// }

// for(let clan of niz){
//     console.log(clan);
// }

// niz.forEach((clan, i, array) => {
//     if(clan % 2 === 0){
//         console.log(i + " " + clan);
//     }
//     else {
//         console.log("neparni brojevi " + clan + " "+ i);
//     }
//     console.log(array);
// })

// niz = niz.map((clan, i) => {
//     return clan*clan
// })

// console.log(niz);
// console.log(niz2);

// niz = niz.filter((clan, i) => {
//     if(clan % 2 === 0){
//         return clan
//     }
// })

// console.log("Filterovan niz: " + niz);

// let niz4 = niz.flatMap((clan) => clan*2)

// console.log(niz4);

// let matrica = [[1,2,3], [4,5,6], [7,8,9]]

// console.log(matrica.flat());

// let suma = niz.reduce((a, b) => {
//     return a + b
// })

// console.log(suma);

// let res = niz.every(clan => {
//     if(clan % 2 === 0){
//         return true
//     }
// })

// console.log(res);

// let resSome = niz.some(clan => {
//     if(clan % 3 === 0) {
//         return true
//     }
// })

// console.log(resSome);

// let res = niz.find(clan => {
//     if(clan % 3 === 0){
//         return clan
//     }
// })

// console.log(res);

// 10.4. Саставити програм који ће учитати низ од n елемената и исписати их оним редоследом којим
// су учитани.

// let brojClanova = parseInt(prompt("Unesite zeljeni broj clanova: "));
// let niz = []

// for(let i = 0; i < brojClanova; i++){
//     let broj = parseFloat(prompt("Unesite broj:"))
//     niz.push(broj)
// }

// console.log(niz);

// 10.5. Саставити програм који ће учитати низ од n елемената и исписати их обрнутим редоследом.

// let brojClanova = parseInt(prompt("Unesite zeljeni broj clanova: "));
// let niz = []

// for(let i = 0; i < brojClanova; i++){
//     let broj = parseFloat(prompt("Unesite broj:"))
//     niz.push(broj)
// }

// console.log(niz.reverse());

// 10.7. Саставити програм за израчунавање и исписивање аритметичке средине задатог низа (дужине
//     n) целих бројева

// let brojClanova = parseInt(prompt("Unesite zeljeni broj clanova: "));
// let niz = []

// for(let i = 0; i < brojClanova; i++){
//     let broj = parseFloat(prompt("Unesite broj:"))
//     niz.push(broj)
// }

// let suma = niz.reduce((a, b) => {
//     return a + b
// })

// console.log(`Aritmeticka sredina je: ${suma/brojClanova}`);

// 10.8. Саставити програм који за унети низ (дужине n) целих бројева израчунава и исписуеј
// аритметичку средину оних елемената низа који су дељиви са 3.

// let brojClanova = parseInt(prompt("Unesite zeljeni broj clanova: "));
// let niz = [];

// for (let i = 0; i < brojClanova; i++) {
//   let broj = parseFloat(prompt("Unesite broj:"));
//   niz.push(broj);
// }

// niz = niz.filter(clan => clan % 3 === 0)

// let res = niz.reduce((a, b) => {
//     return a + b
// })

// console.log(`Aritmeticka sredina je: ${res/niz.length}`);

// let res = 0;
// let t = 0;

// niz.forEach((clan) => {
//   if (clan % 3 === 0) {
//     t++;
//     res += clan;
//   }
// });

// console.log(`Aritmeticka sredina je: ${res / t}`);


// 10.9. Саставити програм који ће за унети низ (дужине n) целих бројева одредити и исписати:
// а) суму парних и суму непарних бројева;
// б) суму елемената са парним индексима и суму елемената са непарним индексима. 
 
// let brojClanova = parseInt(prompt("Unesite zeljeni broj clanova: "));
// let niz = [];

// for (let i = 0; i < brojClanova; i++) {
//   let broj = parseFloat(prompt("Unesite broj:"));
//   niz.push(broj);
// }

// let resParnih = 0;
// let resNeparnih = 0;

// niz.forEach((clan, i) => {
//     // clan % 2 === 0 ? resParnih += clan : resNeparnih += clan
//     //ovo je za po a)
//     // if(clan%2 === 0){
//     //     resParnih += clan
//     // }
//     // else{
//     //     resNeparnih += clan
//     // }

//     //ovo je za pod b)
//     if(i%2 === 0){
//         resParnih += clan
//     }
//     else{
//         resNeparnih += clan
//     }
// })

// console.log(`Zbir parnih je: ${resParnih}, a neparnih je: ${resNeparnih}`);


// 10.11. Саставити програм који учита елементе низа A A A A = ( 1 2 , ,..., n ) дужине n и низа
// B B B B = ( 1 2 , ,..., m ) дужине m и спаја у један низ C A A A B B B = ( 1 2 1 2 , ,..., , , ,..., n m ) дужине n+m.
// Исписати новокреирани низ. 


// let brojClanova = parseInt(prompt("Unesite zeljeni broj clanova: "));
// let niz = [];

// for (let i = 0; i < brojClanova; i++) {
//   let broj = parseFloat(prompt("Unesite broj:"));
//   niz.push(broj);
// }

// let brojClanova2 = parseInt(prompt("Unesite zeljeni broj clanova: "));
// let niz2 = [];

// for (let i = 0; i < brojClanova2; i++) {
//   let broj = parseFloat(prompt("Unesite broj:"));
//   niz2.push(broj);
// }

// console.log(niz.concat(niz2));

// 10.12. Саставити програм који учита елементе два низа низа дужине n A A A A = ( 1 2 , ,..., n ) и
// B B B B = ( 1 2 , ,..., n ) и формира и исписује нови низ чији су елементи
// C A B A B A B = + + + ( 1 1 2 2 , ,..., n n ). 

// let brojClanova = parseInt(prompt("Unesite zeljeni broj clanova: "));
// let niz = [];

// for (let i = 0; i < brojClanova; i++) {
//   let broj = parseFloat(prompt("Unesite broj:"));
//   niz.push(broj);
// }

// let niz2 = [];

// for (let i = 0; i < brojClanova; i++) {
//   let broj = parseFloat(prompt("Unesite broj:"));
//   niz2.push(broj);
// }

// let niz3 = niz.map((el, i) => {
//     return el + niz2[i]
// })

// // let niz3 = []
// // niz.forEach((el, i) => {
// //     niz3.push(el + niz2[i])
// // })

// console.log(niz3);

// 10.14. Саставити програм за формирање низа С од два задата низа целих бројева А и В (сваки
//     дужине 5) на следећи начин: А[0]+B[4],…,A[4]+B[0]. Исписати низ С.

// let brojClanova = parseInt(prompt("Unesite zeljeni broj clanova: "));
// let niz = [];

// for (let i = 0; i < brojClanova; i++) {
//   let broj = parseFloat(prompt("Unesite broj:"));
//   niz.push(broj);
// }

// let niz2 = [];

// for (let i = 0; i < brojClanova; i++) {
//   let broj = parseFloat(prompt("Unesite broj:"));
//   niz2.push(broj);
// }

// // niz2.reverse()
// let niz3 = []
// niz.forEach((el, i) => {
//     niz3.push(el + niz2[niz2.length - i - 1])
// })

// console.log(niz3);

// 10.15. Саставити програм који учита елементе низа A A A A = ( 1 2 , ,..., n ) дужине n и низа
// B B B B = ( 1 2 , ,..., m ) дужине m, а затим формира и исписује низ С који се састоји од парних елемената
// низа А и низа В. 

let brojClanova = parseInt(prompt("Unesite zeljeni broj clanova: "));
let niz = [];

for (let i = 0; i < brojClanova; i++) {
  let broj = parseFloat(prompt("Unesite broj:"));
  niz.push(broj);
}

let niz2 = [];
brojClanova = parseInt(prompt("Unesite zeljeni broj clanova: "));

for (let i = 0; i < brojClanova; i++) {
  let broj = parseFloat(prompt("Unesite broj:"));
  niz2.push(broj);
}

let niz3 = niz.concat(niz2).filter((clan) => {
    if(clan % 2 === 0){
        return clan
    }
})

console.log(niz3);