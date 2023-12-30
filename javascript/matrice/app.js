// 11.1. Саставити програм који учитава, а затим исписује елементе матрице mxn. Елементи матрице
// су цели бројеви.

// let n = parseInt(prompt("Unesite broj redova: "));
// let m = parseInt(prompt("Unesite broj kolona: "));

// let row = [];
// let matrica = [];

// for (let i = 0; i < n; i++) {
//   row = [];
//   for (let j = 0; j < m; j++) {
//     row.push(parseInt(prompt(`Unesite element ${i + 1}.${j + 1}: `)));
//   }
//   matrica.push(row);
// }

// console.log(matrica);

// 11.2. Саставити програм који за унету матрицу димензија nxn врши сабирање њених елеменета и
// исписује добијени резултат. Елементи су цели бројеви.

// let n = parseInt(prompt("Unesite broj redova: "))
// let m = parseInt(prompt("Unesite broj kolona: "))

// let matrica = []
// let suma = 0;

// for(let i = 0; i < n; i++){
//     matrica[i] = []
//     for(let j = 0; j < m; j++){
//         matrica[i][j] = parseInt(prompt(`Unesite element ${i+1}.${j+1}: `))
//         suma += matrica[i][j]
//     }
// }

// // for(let i = 0; i < n; i++){
// //     for(let j = 0; j < m; j++){
// //         suma += matrica[i][j]
// //     }
// // }

// console.log(matrica, suma);

// 11.3. Саставити програм који учита матрицу димензија mхn, а затим врши сабирање елемената
// који су парни бројеви. На крају исписати суму парних бројева и број елемената који су једнаки нули.
// Елементи матрице су цели бројеви од 0 до 9.

// let n = parseInt(prompt("Unesite broj redova: "));
// let m = parseInt(prompt("Unesite broj kolona: "));

// let matrica = [];
// let suma = 0;
// let numOfZeros = 0;

// for (let i = 0; i < n; i++) {
//   matrica[i] = [];
//   for (let j = 0; j < m; j++) {
//     matrica[i][j] = parseInt(prompt(`Unesite element ${i + 1}.${j + 1}: `));
//     if (matrica[i][j] % 2 == 0 && matrica[i][j] != 0) {
//       suma += matrica[i][j];
//     } else if (matrica[i][j] == 0) {
//       numOfZeros++;
//     }
//   }
// }

// console.log(numOfZeros, suma);

// 11.4. Саставити програм који учита две матрице целих бројева, a и b, обе димензија mхn, а затим
// врши сабирање ове две матрице и исписује нову матрицу с. Матрице се сабирају тако што се
// сабирају елементи матрица са истим индексима.

// let n = parseInt(prompt("Unesite broj redova: "));
// let m = parseInt(prompt("Unesite broj kolona: "));

// let matrica1 = [];

// for (let i = 0; i < n; i++) {
//   matrica1[i] = [];
//   for (let j = 0; j < m; j++) {
//     matrica1[i][j] = parseInt(prompt(`Unesite element ${i + 1}.${j + 1}: `));
//   }
// }

// let matrica2 = [];

// for (let i = 0; i < n; i++) {
//   matrica2[i] = [];
//   for (let j = 0; j < m; j++) {
//     matrica2[i][j] = parseInt(prompt(`Unesite element ${i + 1}.${j + 1}: `));
//   }
// }

// let matrica3 = matrica1.map((el, i) => {
//   return el.map((broj, j) => {
//     return broj + matrica2[i][j];
//   });
// });

// console.log(matrica3);

// 11.5. Саставити програм који ће учитати матрицу димензија nxn, а затим
//  исписати све елементе на главној и споредној дијагонали, као и суме елемената на
// главној и споредној дијагонали. Елементи матрице су цели бројеви.

// let n = parseInt(prompt("Unesite broj redova: "));
// let matrica1 = [];

// for (let i = 0; i < n; i++) {
//   matrica1[i] = [];
//   for (let j = 0; j < n; j++) {
//     matrica1[i][j] = parseInt(prompt(`Unesite element ${i + 1}.${j + 1}: `));
//   }
// }

// console.log("Brojevi glavne dijagonale: ");

// let sumaGlavne = 0;

// for(let i = 0; i < n; i++){
//     for(let j = 0; j < n; j++){
//         if(i == j){
//             console.log(matrica1[i][j]);
//             sumaGlavne += matrica1[i][j];
//         }
//     }
// }

// let sumaSporedne = 0;

// console.log("Brojevi sporedne dijagonale: ");

// for(let i = 0; i < n; i++){
//     for(let j = 0; j < n; j++){
//         if(i + j == n - 1){
//             console.log(matrica1[i][j]);
//             sumaSporedne += matrica1[i][j];
//         }
//     }
// }

// console.log("suma sporedne: ", sumaSporedne);
// console.log("suma glavne: ", sumaGlavne);

// 11.6. Саставити програм који учита матрицу димензија nxn, а затим
// исписује суму елемената у свакој врсти. Елементи матрице су цели бројеви.

// let n = parseInt(prompt("Unesite broj redova: "));
// let matrica1 = [];

// for (let i = 0; i < n; i++) {
//   matrica1[i] = [];
//   let suma = 0;
//   for (let j = 0; j < n; j++) {
//     matrica1[i][j] = parseInt(prompt(`Unesite element ${i + 1}.${j + 1}: `));
//     suma += matrica1[i][j];
//   }
//   console.log(suma);
// }

// 11.7. Саставити програм који учита матрицу димензија mxn, а затим
// на основу унетог редног броја врсте врши сабирање елемената у тој врсти. Елементи матрице су
// цели бројеви.

let n = parseInt(prompt("Unesite broj redova: "));
let m = parseInt(prompt("Unesite broj kolona: "));
let matrica1 = [];

for (let i = 0; i < n; i++) {
  matrica1[i] = [];
  for (let j = 0; j < m; j++) {
    matrica1[i][j] = parseInt(prompt(`Unesite element ${i + 1}.${j + 1}: `));
  }
}

let korisnikovBroj = parseInt(prompt("Unesite redni broj vrste: "));
let suma = 0;
for(let j = 0; j < m; j++) {
    suma+=matrica1[korisnikovBroj-1][j]
}
console.log(suma);
