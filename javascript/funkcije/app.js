// function zbir(a, b){
//     console.log(a+b);
// }

// function primer(a,b=2){
//     return a%b
// }

// zbir(5,6)
// zbir(6,7)
// zbir(5,7)
// console.log(zbir(5,6));
// console.log(primer(5, 3));
// let pom = primer(5, 5)
// console.log(pom);

/////////////////9.3

// function max(a, b){
//     if(a === b) return a;
//     else if(a>b) return a;
//     else return b;
// }

// let broj1 = parseInt(prompt("Unesiste broj:"))
// let broj2 = parseInt(prompt("Unesiste broj:"))
// let broj3 = parseInt(prompt("Unesiste broj:"))
// let broj4 = parseInt(prompt("Unesiste broj:"))

// let max1 = max(broj1, broj2)
// let max2 = max(broj3, broj4)
// console.log(max(max1, max2));
// console.log(max(max(broj1, broj2), max(broj3, broj4)));

//4*r*r*3.14 // povrsina
//(4/3)*3.14*r*r*r // zapremina

//////////////////9.5

// let poluprecnik = parseFloat(prompt("Unesite poluprecnik"))

// function povrsina(r){
//     let povrsina = 4*r*r*3.14
//     return povrsina;
// }

// function zapremina(r){
//     let zapremina = (4/3)*3.14*r*r*r
//     return zapremina;
// }

// function Ispis(zapremina, povrsina){
//     console.log(`Zapremina je ${zapremina}, povrsina je ${povrsina}`);
// }

// let pom1 = zapremina(poluprecnik)
// let pom2 = povrsina(poluprecnik)
// Ispis(pom1, pom2)

// Ispis(zapremina(r), povrsina(r))

/////////////////////9.7

// function zbirKv(a, b){
//     let suma = 0;
//     for(let i = a; i <= b; i++){
//         suma += i*i
//     }
//     return suma;
// }

// function zbirKvParni(a, b){
//     let suma = 0;
//     for(let i = a; i <= b; i++){
//         if (i % 2 !== 0) continue;
//         suma += i*i
//     }
//     return suma;
// }

// function zbirKvNeparni(a, b){
//     let suma = 0;
//     for(let i = a; i <= b; i++){
//         if (i % 2 === 0) continue;
//         suma += i*i
//     }
//     return suma;
// }
// console.log(zbirKv(1,5));
// console.log(zbirKvParni(1,5));
// console.log(zbirKvNeparni(1,5));

/////////////////9.11

// function faktorijel(n){
//     let faktorijel = 1
//     for(let i = 1; i <= n; i++){
//         faktorijel*=i
//     }
//     return faktorijel
// }

// function sumaFaktorijel(n){
//     let suma = 0;
//     for(let i=1; i<=n; i++){
//         suma += faktorijel(i)
//     }
//     return suma
// }
// let pom = faktorijel(5);
// console.log(pom);

//9.12, 9.15

///////////////////////////////////////9.12

// function faktorijel(n){
//     let faktorijel = 1
//     for(let i = 1; i <= n; i++){
//         faktorijel*=i
//     }
//     return faktorijel
// }

// for(let a = 1; a <= 9; a++){
//     for(let b = 0; b <= 9; b++){
//         for(let c = 0; c <= 9; c++){
//             let broj = a*100 + b*10 + c;
//             if(broj === faktorijel(a) + faktorijel(b) + faktorijel(c)){
//                 console.log(broj);
//             }
//         }
//     }
// }

// for(let a = 100; a <= 999; a++){
//     let broj1 = a % 10
//     let broj2 = Math.floor(a/10) % 10
//     let broj3 = Math.floor(a/100) % 10
//     if(a === faktorijel(broj1) + faktorijel(broj2) + faktorijel(broj3))
//         console.log(a);
// }

//////////////////////////////////////////////9.15

// function prost(n){
//     for(let i = 2; i < n; i++){
//         if (n % i === 0) return false;
//     }
//     return true
// }

// for(let i = 1; i < 500; i++){
//     if(prost(i))
//         console.log(i);
// }

///////////////////////////////////////////////9.17

// let sumaKubova = (n) => {

// }

// function sumaKubova(n){
// return Math.pow(n%10, 3) + Math.pow(Math.floor(n/10)%10, 3) + Math.pow(Math.floor(n/100)%10, 3)
// }

// function isArmstrog(n){
//     if (n === sumaKubova(n)) return true
//     return false
// }

// for(let i=100; i<=999; i++){
//     if (isArmstrog(i))
//         console.log(i);
// }

///////////////////////////////////9.18

// function sumaCifara(n){
//     return (n%10) + (Math.floor(n/10)%10) + (Math.floor(n/100)%10)
// }

// function isNiveov(n){
//     // n % sumaCifara(n) === 0 ? true : false
//     if (n % sumaCifara(n) === 0) return true
//     return false
// }

// for(let i=101; i<=200; i++){
//     if(isNiveov(i))
//         console.log(i);
// }

///////////////////////////////9.12

// function faktorijel(n){
//     let faktorijel = 1
//     for(let i = 1; i <= n; i++){
//         faktorijel*=i
//     }
//     return faktorijel
// }

// for(let a=1; a<=9; a++){
//     for(let b=0; b<=9; b++){
//         for(let c=0; c <=9; c++){
//             if (a*100 + b*10 + c === faktorijel(a) + faktorijel(b) + faktorijel(c))
//                 console.log(a,b,c);
//         }
//     }
// }

// for(let i = 100; i <= 999; i++){
//     let broj1 = i % 10
//     let broj2 = Math.floor(i/10) % 10
//     let broj3 = Math.floor(i/100) % 10
//     if(i === faktorijel(broj1) + faktorijel(broj2) + faktorijel(broj3))
//         console.log(i);
// }

/////////////////////////////////////////9.15

// function prost(n){
//     for(let i = 2; i < n; i++){
//         if (n % i === 0) return false
//     }
//     return true
// }

// for(let i = 1; i <= 500; i++){
//     if(prost(i))
//         console.log(i);
// }

//////////////////////////////////////9.17

// let sumaKubova = (n) => {
// return Math.pow(Math.floor(n/100) % 10, 3) + Math.pow(Math.floor(n/10) % 10, 3) + Math.pow(n % 10, 3)
// }

// function isArmstrong(n){
//     if (n === sumaKubova(n)) return true
//     return false
// }

// for(let i = 100; i <= 999; i++){
//     if(isArmstrong(i)) console.log(i);
// }

/////////////////////////////////9.18

// function sumaCifara(n){
//     return Math.floor(n/100) + Math.floor(n/10) % 10 + n % 10
// }

// function isNivenov(n){
//     if(n % sumaCifara(n) === 0) return true
//     return false
// }

// for(let i = 101; i <= 200; i++){
//     if(isNivenov(i)) console.log(i);
// }

////////////////////////9.27

// let redovi = 8
// let kolone = 8

// for(let i = 0; i < redovi; i++) {
//     let rowOutput = "";
//     for(let j = 0; j < kolone; j++){
//         if(i === 0 || i === redovi - 1){
//             if(j === 0 || j === kolone - 1){
//                 rowOutput += "+"
//             }
//             else{
//                 rowOutput += "-"
//             }
//         }
//         else{
//             if(j === 0 || j === kolone - 1){
//                 rowOutput += "|"
//             }
//             else{
//                 rowOutput += " "
//             }
//         }
//     }
//     console.log(rowOutput);
//     console.log("");
//     rowOutput = ""
// }

// let niz = [1,2,3,4,5,6,7,8,9]
// let matrica = [niz, niz, niz, niz, niz, niz]

// for(let i = 0; i< matrica.length; i++)
//     for(let j = 0; j < niz.length; j++){
//         console.log(matrica[i][j]);
//     }

// console.log(matrica[1][2]);

////////////////////////////////////9.29

// function Faktorijel(n){
//     console.log(n);
//     if(n===1) return true
//     return n*Faktorijel(n-1)
// }

// Faktorijel(5)

///////////////////////////////////9.29

// function Faktorijel(n){
//     console.log("Dobijen je broj: " + n);
//     if (n === 1) {
//         console.log("Program se zavrsava");
//         return 1
//     }
//     return n*Faktorijel(n-1)
// }

// Faktorijel(5)

///////////////////////////////9.30

// function Stepenovanje(broj, stepen){
//     if(stepen === 0) return true
//     return broj * Stepenovanje(broj, stepen-1)
// }

// console.log(Stepenovanje(5,3));

//////////9.31. Саставити рекурзивну функцију која врши сабирање првих n бројева, а затим тестирати
// функцију за дато n и исписати добијени резултат.

////////////////////////////////9.31

// function Sabiranje(n){
//     if(n === 1) return true
//     return n + Sabiranje(n-1)
// }

// console.log(Sabiranje(6));

///////////////////////////////////////////////////
// 9.32. Саставити рекурзивну функцију која исписује првих n бројева у
//  обрнутом редолседу
// , а затим
// тестирати функцију за дато n.

//////////////////////////////////////////////////9.32

// function Ispisi(n){
//     if(n === 0) return 1
//     console.log(n);
//     return Ispisi(n-1)
// }

// Ispisi(8)

/////////////////////////////////////////////

// 9.34. Саставити рекурзивну функцију која сабира декадне цифре целог броја. Затим тестирати
// функцију у главном програму за унети цео број и исписати добијени резултат.

// function SabiranjeCifara(n){
//     if(n === 0) return 0
//     return n%10 + SabiranjeCifara(Math.floor(n/10))
// }

// console.log(SabiranjeCifara(3456789));

//////////////////////////////////////9.35

// let niz = [1, 1];

// let brojClanova = 7;

// for(let i = 2; i<= brojClanova; i++){
//     niz.push(niz[i-1] + niz[i-2])
// }

// function Fibonaci(n){
//     let niz = [1, 1];
//     for(let i = 2; i<= n; i++){
//         niz.push(niz[i-1] + niz[i-2])
//     }
//     return niz
// }

// console.log(Fibonaci(7));

/////////////////////////////////////////////

// let reci = "Tarik, Amin, Amer"

// console.log(reci.slice(7));

// 9.30. Саставити рекурзивну функцију која степеновање целог броја на целобројни изложилац, а
// затим тестирати функцију за дати природни број и изложилац и исписати добијени резултат.

// function Stepenovanje(broj, stepen){
//     if(stepen === 0) return true
//     return broj * Stepenovanje(broj, stepen-1)
// }

// console.log(Stepenovanje(5,3));

// 9.31. Саставити рекурзивну функцију која врши сабирање првих n бројева, а затим тестирати
// функцију за дато n и исписати добијени резултат.

// function Sabiranje(n){
//     if(n === 1) return true
//     return n + Sabiranje(n-1)
// }

// console.log(Sabiranje(6));

// 9.32. Саставити рекурзивну функцију која исписује првих n бројева у обрнутом редолседу, а затим
// тестирати функцију за дато n.


// function Redosled(n){
//     if (n === 0) return true
//     console.log(n);
//     return Redosled(n-1)
// }

// Redosled(7)

// 9.34. Саставити рекурзивну функцију која сабира декадне цифре целог броја. Затим тестирати
// функцију у главном програму за унети цео број и исписати добијени резултат. 


// function ZbirCifara(n){
//     if(n === 0) return false
//     return n%10 + ZbirCifara(Math.floor(n/10))
// }

// console.log(ZbirCifara(555));

////////////////////////////////