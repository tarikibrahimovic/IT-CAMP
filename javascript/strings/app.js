let recenica = "Ana Ana Ana Ana voli Milovana";

// console.log(recenica[recenica.length], recenica.length);

//SLICE

// console.log(recenica.slice(-16, -3));

//SUBSTRING

// console.log(recenica.substring(-16, -3));

//SUBSTR

// console.log(recenica.substr(2, 5));

//REPLACE, REPLACE ALL

// console.log(recenica.replace("Ana", "Amina"));
// console.log(recenica.replaceAll("Ana", "Amina"));

// console.log(recenica.replace("voli", "mrzi"));

// toLowerCase(), toUpperCase()

// console.log(recenica.toLowerCase());
// console.log(recenica.toUpperCase());

//CONCAT

// let recenica2 = "Osisao se Amin";

// console.log(recenica2 + recenica);
// console.log(recenica2.concat(recenica));
// console.log(recenica.concat(recenica2));

//TRIM, trimEnd, trimStart

// let trimRecenica = "    Tarik je Prof   ";

// console.log(trimRecenica.trim());

// console.log(trimRecenica.trimEnd());

//padStart, padEnd

// let primer = "nes";

// console.log(primer.padStart(5, "0"));
// console.log(primer.padEnd(4, "0"));

//CharAt, CharCodeAt, []

// let recenica3 = "Hasane ostavi telefon";

// console.log(recenica3[2]);
// console.log(recenica3.charAt(2));
// console.log(recenica3.charCodeAt(2));

//SPLIT
// let niz = []
// for (let i = 0; i < recenica.length; i++) {
//     // console.log(recenica[i]);
//     niz.push(recenica[i])
// }

// console.log(niz);

// console.log(recenica);

// let niz = recenica.split("")

// console.log(niz);

//JOIN

// console.log(niz.join(""));

//SPLICE

// console.log(recenica.split(" ").splice(0, 3, "NESTO").join());

//indexOf, match, matchAll, includes()

// console.log(recenica.indexOf("Tarik"));
// console.log(recenica.lastIndexOf("Ana"));

// console.log(recenica.match());

// let text = "The rain in SPAIN stays mainly in the plain";
// const myArr = text.match("SPAIN");

// let text = "The rain in SPAIN stays mainly in the plain";
// const myArr = text.matchAll("ain");

// console.log(myArr);

// console.log(recenica.includes("mrzi"));

//Sastaviti program za ispisivanje broja reci koje ce korisnik da unese

// let rec = prompt("Unesite recenicu")

// console.log(rec.split(" ").length);

// 8.6. Саставити програм за одређивање броја самогласника и сугласника у улазном тексту.
//  Унос текста се завршава сигналом ЕОF.

// let samoglasnici = ["a", "e", "i", "o", "u"];
// while(true){
//     let brSamoglasnici = 0;
//     let suglasnici = 0;
//     let rec = prompt("Unesite rec: ")
//     if(rec === "0")
//         break
//     for(let i = 0; i < rec.length; i++)
//     if (samoglasnici.includes(rec[i]))
//     // if(rec[i] === "a" ||rec[i] === "e" || rec[i] === "i" || rec[i] === "o" || rec[i] === "u")
//     {
//         brSamoglasnici++
//     }
//     else{
//         suglasnici++;
//     }

//     console.log(`Ima ${suglasnici} suglasnika, i ${brSamoglasnici} samoglasnika`);
// }

// 8.7. Саставити програм за одређивање броја великих слова, малих слова и цифара у улазном
// тексту. Унос текста се завршава сигналом ЕОF.

// let niz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// while (true) {
//   let velikaSlova = 0;
//   let malaSlova = 0;
//   let brojBrojeva = 0;
//   let rec = prompt("Unesite rec: ");
//   if (rec === "0") break;
//   for (let i = 0; i < rec.length; i++) {
//     if (niz.includes(parseInt(rec[i]))) {
//       brojBrojeva++;
//     } else if (rec[i] === rec[i].toUpperCase()) {
//       velikaSlova++;
//     } else {
//       malaSlova++;
//     }
//   }

//   console.log(
//     `Velika slova ${velikaSlova} i mala slova ${malaSlova}, broj cifara je ${brojBrojeva}`
//   );
// }

// 8.8. Саставити програм за одређивање броја појављивања слова А у улазном тексту и изразити ту
// вредност процентуално у односу на све унете знаке. Унос текста се завршава сигналом ЕОF.

// while(true){
//     let rec = prompt("Unesite rec: ");
//     let brojA = 0;

//     if(rec.includes("A")){
//         for(let slovo of rec){
//             console.log(slovo);
//             if(slovo === "A")
//             {
//                 console.log("Proslo");
//                     brojA++;
//             }
//         }
//         // for(let i = 0; i < rec.length; i++){
//         //     if(rec[i] === "A"){
//         //         brojA++
//         //     }
//         // }
//     }

//     console.log(`Procentalno slova A u reci ima ${brojA/rec.length * 100}%`);
// }


//8.12. Саставити програм који испитује да ли су у унетом тексту заграде“(“ и “ )“ добро упарене.
// Унос текста се завршава сигналом ЕОF.

// let zagrade = prompt("Unesite recenicu:");

// let otvorene = 0,
//   zatvorene = 0;

// for (let karakter of zagrade) {
//   if (karakter === "(") {
//     otvorene++;
//   } else if (karakter === ")") {
//     zatvorene++;
//   }
// }

// if (zatvorene === otvorene) console.log("Dobro su poredjane");
// else console.log("Nisu dobro poredjane");

// 8.13. Саставити програм који врши конверзију унетих великих слова у мала. Унос текста се
// завршава сигналом ЕОF. 

// let input = prompt("Unesite recenicu:")

// console.log(input.toLowerCase());

// console.log(prompt("Unesite recenicu").toLowerCase());


// 8.15. Саставити програм који врши конверзију првог слова у велико,
//  а сва остала у мала унете реченице. Унос текста се завршава сигналом ЕОF. 

// let input = prompt("Unesite recenicu:")
// let output = ""

// for(let i = 0; i < input.length; i++){
//   if(i === 0){
//     output += input[i].toUpperCase()
//   }
//   else{
//     output += input[i].toLowerCase()
//   }
// }

// console.log(output);


// console.log(input[0].toUpperCase() + input.slice(1).toLowerCase());


// 8.16. Саставити програм којим се копира улазни текст на екран уз
//  раздвајање речи по једним
// знаком размака. Речи су на улазу раздвојене произвољним бројем знакова
//  размака и/или табулације.
// Текст се завршава сигналом ЕОF. 

// let input = prompt("Unesite tekst: "), output = " ";

// for(let i = 0; i < input.length; i++){
//   if(input[i] === " "){
//     if(output[output.length-1] !== " ")
//       output += input[i]
//   }
//   else {
//     output += input[i]
//   }
// }

// console.log(output);
 

// 8.17. Саставити програм који копира улазни текст на екран, где сваку реч приказује у једној
// линији. Унос текста се завршава сигналом ЕОF. 

// let input = prompt("Unesite recenicu:")

// for(let word of input.split(" ")){
//   console.log(word);
// }

// \n, 

console.log("nesto \n jos nesto \n jos nesto \n");
console.log("nesto \t jos nesto\t jos nesto");

