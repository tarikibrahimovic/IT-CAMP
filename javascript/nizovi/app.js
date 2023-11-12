let niz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

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

let niz2 = niz.flatMap(el => el > 3 ? el : 0)
