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

// let n = parseInt(prompt("Unesite broj redova: "));
// let m = parseInt(prompt("Unesite broj kolona: "));
// let matrica1 = [];

// for (let i = 0; i < n; i++) {
//   matrica1[i] = [];
//   for (let j = 0; j < m; j++) {
//     matrica1[i][j] = parseInt(prompt(`Unesite element ${i + 1}.${j + 1}: `));
//   }
// }

// let korisnikovBroj = parseInt(prompt("Unesite redni broj vrste: "));
// let suma = 0;
// for(let j = 0; j < m; j++) {
//     suma+=matrica1[korisnikovBroj-1][j]
// }
// console.log(suma);

// 11.8. Саставити програм који учита матрицу целих бројева А димензија mxn, а затим исписује
// њене елементе у редоследу као што је приказано на следећој слици:

// let n = parseInt(prompt("Unesite broj redova: "));
// let m = parseInt(prompt("Unesite broj kolona: "));
// let matrica1 = [];
// let row = [];

// for (let i = 0; i < n; i++) {
//   row = [];
//   for (let j = 0; j < m; j++) {
//     row.push(parseInt(prompt(`Unesite element ${i + 1}.${j + 1}: `)));
//   }
//   matrica1.push(row);
// }

// for (let i = 0; i < m; i++) {
//   if (i % 2 == 0) {
//     for (let j = 0; j < n; j++) {
//       console.log(matrica1[j][i]);
//     }
//   } else {
//     for (let j = n - 1; j >= 0; j--) {
//       console.log(matrica1[j][i]);
//     }
//   }
// }

// 11.9. Саставити програм који учита матрицу реалних бројева А димензија nxn, а затим формира
// нову матрицу тако што све чланове врсте (укључујући и дијагонални) дели са дијагоналним чланом.
// Уколико је дијагонални члан једнак нули, све чланове у том реду поставља на нулу, осим
// дијагоналног који поставља на 1. Исписати добијену матрицу.

// let n = parseInt(prompt("Unesite broj redova: "));
// let m = parseInt(prompt("Unesite broj kolona: "));
// let matrica1 = [];
// let row = [];

// for (let i = 0; i < n; i++) {
//   row = [];
//   for (let j = 0; j < m; j++) {
//     row.push(parseInt(prompt(`Unesite element ${i + 1}.${j + 1}: `)));
//   }
//   matrica1.push(row);
// }

// let matrica2 = [];

// for (let i = 0; i < n; i++) {
//   let dijagonalniClan = matrica1[i][i];
//   let row = [];
//   if (dijagonalniClan === 0) {
//     for (let j = 0; j < m; j++) {
//       matrica1[i][j] = 0;
//       row.push(matrica1[i][j]);
//     }
//     row[i] = 1;
//   } else {
//     for (let j = 0; j < m; j++) {
//       row.push(matrica1[i][j] / dijagonalniClan);
//     }
//   }
//   matrica2.push(row);
// }

// console.log(matrica2);

// 11.10. Саставити програм који учита један цео број х и матрицу целих бројева А димензија nxn, а
// затим формира нову матрицу тако што све елементе испод главне дијагонала увећа за вредност х, а
// елементе изнад главне дијагонале увећава за 2х. Елементи на главној дијагонали се не мењају.
// Исписати добијену матрицу.

// let n = parseInt(prompt("Unesite broj redova: "));
// let matrica1 = [];
// let row = [];

// for (let i = 0; i < n; i++) {
//   row = [];
//   for (let j = 0; j < n; j++) {
//     row.push(parseInt(prompt(`Unesite element ${i + 1}.${j + 1}: `)));
//   }
//   matrica1.push(row);
// }

// let x = parseInt(prompt("Unesite broj x: "));
// let matrica2 = [];

// for (let i = 0; i < n; i++) {
//   let row = [];
//   for (let j = 0; j < n; j++) {
//     if (i > j) {
//       row.push(matrica1[i][j] + x);
//     } else if (i < j) {
//       row.push(matrica1[i][j] + 2 * x);
//     } else {
//       row.push(matrica1[i][j]);
//     }
//   }
//   matrica2.push(row);
// }

// console.log(matrica2);

// 11.11. Саставити програм који учита матрицу целих бројева А димензија mxn, а затим
// врши замену места двема колонама на основу унета два цела броја који
// представљају редне бројеве колона.

// let n = parseInt(prompt("Unesite broj redova: "));
// let m = parseInt(prompt("Unesite broj kolona: "));
// let matrica1 = [];
// let row = [];

// for (let i = 0; i < n; i++) {
//   row = [];
//   for (let j = 0; j < m; j++) {
//     row.push(parseInt(prompt(`Unesite element ${i + 1}.${j + 1}: `)));
//   }
//   matrica1.push(row);
// }

// let x = parseInt(prompt("Unesite broj x: ")); //1
// let y = parseInt(prompt("Unesite broj y: ")); //2

// let matrica2 = [];
// for(let i = 0; i < n; i++){
//   let row = [];
//   for(let j = 0; j < m; j++){
//     row.push(matrica1[i][j]);
//   }
//   matrica2.push(row);
// }

// for(let i = 0; i < n; i++){
//   matrica1[i][x-1] = matrica2[i][y-1];
//   matrica1[i][y-1] = matrica2[i][x-1];
// }

// console.log(matrica1);

// 11.12. Саставити програм који учита матрицу целих бројева А димензија nxn, а затим
// врши њено транспоновање. Танспонована матрица је матрица која се
// добија када се врсте почетне матрице поређају по колонама.
// а) без употребе функција;
// б) употребом функција за учитавања, исписивање и транспоновање матрице.
// Исписати транспоновану матрицу.

let n = parseInt(prompt("Unesite broj redova: "));
let matrica1 = [];
let row = [];

for (let i = 0; i < n; i++) {
  row = [];
  for (let j = 0; j < n; j++) {
    row.push(parseInt(prompt(`Unesite element ${i + 1}.${j + 1}: `)));
  }
  matrica1.push(row);
}

for (i = 0; i < n - 1; i++) {
  for (j = i + 1; j < n; j++) {
    pom = matrica1[i][j];
    matrica1[i][j] = matrica1[j][i];
    matrica1[j][i] = pom;
  }
}

console.log(matrica1);

// 11.13. Саставити програм који учита матрицу целих бројева А димензија nxn, а затим исписује
// матрицу у оквиру таблице. Програм треба да одређује највећи и најмањи елемент у свакој врсти и
// колони, а добијене елементе сместити у једнодимензионалне низове. Исписати формиране низове

// let n = parseInt(prompt("Unesite broj redova: "));
// let matrica1 = [];
// let row = [];
// let maxArr = [];
// let minArr = [];
// let max = 0;
// let min = 0;

// for (let i = 0; i < n; i++) {
//   row = [];
//   for (let j = 0; j < n; j++) {
//     row.push(parseInt(prompt(`Unesite element ${i + 1}.${j + 1}: `)));
//   }
//   maxArr.push(Math.max(...row));
//   minArr.push(Math.min(...row));
//   matrica1.push(row);
// }

// console.log(maxArr, minArr);

// 11.18. Саставити програм који учита матрицу целих бројева димензија mxn, а затим врши
// уређивање колона матрице по неопадајућем редоследу збирова елемената по колонама. Исписати
// новодобијену матрицу.

//WORK IN PROGRESS

// let n = parseInt(prompt("Unesite broj redova: "));
// let m = parseInt(prompt("Unesite broj redova: "));
// let matrica1 = [];
// let row = [];

// for (let i = 0; i < n; i++) {
//   row = [];
//   for (let j = 0; j < m; j++) {
//     row.push(parseInt(prompt(`Unesite element ${i + 1}.${j + 1}: `)));
//   }
//   matrica1.push(row);
// }

// let redosled = [];

// for (let i = 0; i < n; i++) {
//   let suma = 0;
//   for (let j = 0; j < m; j++) {
//     suma += matrica1[i][j];
//     let pom = {
//       suma: suma,
//       index: j,
//     };
//     redosled.push(pom);
//   }
// }

// redosled.sort((a, b) => {
//   return a.suma - b.suma;
// });

// let matrica2 = [];

// for (let i = 0; i < n; i++) {
//   let row = [];
//   for (let j = 0; j < m; j++) {
//     row.push(matrica1[j][redosled[i].index]);
//   }
//   matrica2.push(row);
// }

// console.log(matrica2);
