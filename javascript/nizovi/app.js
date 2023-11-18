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

let brojClanova = parseInt(prompt("Unesite zeljeni broj clanova: "));
let niz = []

for(let i = 0; i < brojClanova; i++){
    let broj = parseFloat(prompt("Unesite broj:"))
    niz.push(broj)
}

let suma = niz.reduce((a, b) => {
    return a + b
})

console.log(`Aritmeticka sredina je: ${suma/brojClanova}`);
