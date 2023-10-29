// let niz = [1,2,3,4,5,6,7,8]

// for(let i = 0; i < niz.length; i++){
//     console.log("NESTO NESTO" + niz[i]);
//     if(niz[i] == 5) continue;
//     console.log(niz[i]*2);
// }

////////////////////////////////////7.9

// for(let i = 1; i<= 10; i++){
//     if(i%2) continue;
//     console.log(i);
// }

///////////////////////////////////7.11

// for(let i = 1; i<=20; i++){
//     if(i % 3 === 0) continue;
//     console.log(i);
// }

//////////////////////////////////7.12

// let suma = 0;

// while(true){
//     let n = parseFloat(prompt("Unesite broj:"))
//     if(n < 0) continue;
//     if(n === 0) break;
//     suma += 1 / (n * n)
//     console.log(suma);
// }

// console.log(suma);

/////////////////////////////////// SWITCH CASE

// let n = parseInt(prompt("Unesite broj:"));

// if(n === 1)
// console.log("ponedeljak");
// else if(n === 1)
// console.log("ponedeljak");
// else if(n === 1)
// console.log("ponedeljak");
// if(n === 1)
// console.log("ponedeljak");

// if(n===6 )

// switch (n) {
//   case 1:
//     console.log ("ponedeljak");
//     break;
//   case 2:
//     console.log("utorak");
//     break;
//   case 3:
//     console.log("sreda");
//     break;
//   case 4:
//     console.log("cetvrtak");
//     break;
//   case 5:
//     console.log("petak");
//     break;
//   case 6:
//     console.log("subota");
//     break;
//   case 7:
//     console.log("nedelja");
//     break;
//   default:
//     console.log("Nije dobar broj");
//     break;
// }

///////////////////////////////////////////7.20

// let slovo = prompt("Unesite slovo: ")

// switch (slovo){
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":
//         console.log("Samoglasnik");
//         break;
//     default:
//         console.log("Suglasnik");
//         break;
// }

///////////////////////////////////7.22

// let a = parseFloat(prompt("Unesite broj a:"));
// let b = parseFloat(prompt("Unesite broj b:"));
// let znak = prompt("Unesite znak:");

// switch (znak) {
//   case "+":
//     console.log(a + b);
//     break;
//   case "-":
//     console.log(a - b);
//     break;
//   case "*":
//     console.log(a * b);
//     break;
//   case "/":
//     console.log(a / b);
//     break;
//   default:
//     console.log("Nije dbr");
//     break;
// }

//////////////////////////////////////7.24

// let godina = parseInt(prompt("Unesite godinu: "));
// let mesec = parseInt(prompt("Unesite redni broj meseca: "));

// switch (mesec) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     console.log("31");
//     break;
//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     console.log(30);
//   case 2:
    // (godina % 4 === 0 && godina % 100 !== 0) || godina % 400 === 0
    //   ? console.log(29)
    //   : console.log(28);
      
//     break;
//   default:
//     console.log("Nesto nije dobro");
//     break;
// }

//////////////////////////////////////////////

// for(let i=1; i<=10; i++){
//   console.log("NEKA PORUKA");
//   if(i === 5) continue;
//   console.log(i);
// }

//////////////////////////////////////////7.11

// for(let i=1; i<=20; i++){
//   if(i % 3 === 0) continue;
//   console.log(i);
// }

// let pom1 = 3;
// let pom2 = "3"

// console.log(pom1 === pom2);

/////////////////////////////////////////////

// let slovo = prompt("Unesite slovo:")

// switch (slovo) {
//   case "a":
//   case "e":
//   case "i":
//   case "o":
//   case "u":
//     console.log("samoglasnik");
//     break;
//   default:
//     console.log("suglasnik");
//     break;
// }

///////////////////////////////////////7.24

// let godina = parseInt(prompt("Unesite godinu:"))
// let mesec = parseInt(prompt("Unesite mesec:"))

// switch (mesec){
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     console.log("31");
//     break;
//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     console.log("30");
//     break;
//   case 2:
//     if((godina % 4 === 0 && godina % 100 !== 0) || (godina % 400 === 0)){
//       console.log("29");
//     }
//     else {
//       console.log("28");
//     }
//     break;
//   default:
//     console.log("mesec nije dobar");
//     break;
// }

///////////////////////////7.25


// let godina = parseInt(prompt("Unesite godinu:"))
// let mesec = parseInt(prompt("Unesite mesec:"))
// let dan = parseInt(prompt("Unesite dan:"))

// let d = 0;

// switch (mesec){
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     // console.log("31");
//     d = 31;
//     break;
//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     // console.log("30");
//     d = 30;
//     break;
//   case 2:
//     if((godina % 4 === 0 && godina % 100 !== 0) || (godina % 400 === 0)){
//       // console.log("29");
//       d = 29
//     }
//     else {
//       // console.log("28");
//       d=28
//     }
//     break;
//   default:
//     console.log("mesec nije dobar");
//     break;
// }


// if(dan === d){
//   dan = 1;
//   mesec++;
// }
// else{
//   dan++;
// }
// if(mesec > 12){
//   mesec = 1;
//   dan = 1;
//   godina ++;
// }

// console.log(dan, mesec, godina);


////////////////////////////////