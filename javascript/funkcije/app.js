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

function faktorijel(n){
    let faktorijel = 1
    for(let i = 1; i <= n; i++){
        faktorijel*=i
    }
    return faktorijel
}

function sumaFaktorijel(n){
    let suma = 0;
    for(let i=1; i<=n; i++){
        suma += faktorijel(i)
    }
    return suma
}

console.log(sumaFaktorijel(5));
//9.12, 9.15

