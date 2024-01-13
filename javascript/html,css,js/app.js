// let h1 = document.querySelector("h1");
// let h2 = document.querySelector("#h2");
// let probaDiv = document.querySelector(".proba");
// // console.log(h1.innerText);

// h2.innerHTML = "<b>Hi</b>";

// // window.alert("Hi");

// // window.confirm("Are you sure?");

// // window.prompt("What is your name?");

// h2.addEventListener("click", function () {
//   div3.classList.toggle("div3");
// });

// h2.addEventListener("mouseover", function () {
//   h1.innerText = "Bla bla nesto";
// });

// h2.addEventListener("mouseout", function () {
//   h1.innerText = "Hello World";
// });

// let p = document.createElement("p");
// p.innerText = "Hello World";

// // for (let i = 0; i < 10; i++) {
// //   console.log("proba");
// //   probaDiv.appendChild(p);
// // }

// let div3 = document.createElement("div");

// div3.classList.toggle("div3");

// div3.innerText =
//   "Lorem ipsum dolor, sit amet consectetur adipisicing elit." +
//   "Soluta nostrum quibusdam velit reiciendis totam autem, mollitia ipsam error sed, ducimus natus impedit dolore, odit sequi ad! Debitis voluptas perspiciatis cumque.";

// probaDiv.appendChild(div3);

// let forma = document.querySelector("form");

// forma.addEventListener("submit", function (event) {
//   event.preventDefault();
//   let input = document.querySelector("input");
//   let p = document.createElement("p");
//   p.innerText = input.value;
//   document.body.appendChild(p);
//   input.value = "";
// });

/////////////////////////////// CAS 2 ///////////////////////////////

////DOMACI
// let div = document.createElement("div");

// let forma = document.createElement("form");
// let input = document.createElement("input");
// let button = document.createElement("button");
// let label = document.createElement("label");

// let h1 = document.createElement("h1");

// h1.innerText = "From link to image";

// label.innerText = "Enter link: ";

// button.innerText = "Submit";

// forma.appendChild(label);
// forma.appendChild(input);
// forma.appendChild(button);

// div.appendChild(h1);

// div.appendChild(forma);

// document.body.appendChild(div);

// forma.addEventListener("submit", function (event) {
//   event.preventDefault();
//   let input = document.querySelector("input");
//   let image = document.createElement("img");
//   image.src = input.value;
//   document.body.appendChild(image);
//   input.value = "";
// });

//////////////////////////

// function raiseAlert(event) {
//   console.log(event);
//   alert("Hello World");
//   console.log(this);
// }

// let a = () => {
//   console.log(document.documentElement);
// };
// a();

//////////////////////////////////////////////////////////////////////

// let div1 = document.createElement("div");
// let div2 = document.createElement("div");

// let forma = document.createElement("form");
// let input = document.createElement("input");
// let button = document.createElement("button");
// let label = document.createElement("label");

// let niz = [];

// for (let i = 0; i < 10; i++) {
//   let p = document.createElement("p");
//   p.innerText = "Hello World" + i;
//   niz.push(p);
// }

// console.log(niz);

// label.innerText = "Enter link: ";
// button.innerText = "Submit";

// forma.appendChild(label);
// forma.appendChild(input);
// forma.appendChild(button);

// div1.appendChild(forma);

// for (let p of niz) {
//   div2.appendChild(p);
// }

// div2.id = "div2";
// document.body.appendChild(div1);
// document.body.appendChild(div2);

// forma.addEventListener("submit", function (event) {
//   event.preventDefault();
//   let input = document.querySelector("input");
//   let div2Nodes = document.querySelectorAll("#div2 p");
//   for (let p of div2Nodes) {
//     p.remove();
//   }
//   for (p of niz) {
//     if (p.innerText.includes(input.value)) {
//       div2.appendChild(p);
//     }
//   }
//   input.value = "";
// });

////////////////////////////////
// OBNOVA

// let h1 = document.querySelector("h1");

// h1.addEventListener("click", function () {
//   let h3 = document.createElement("h3");
//   h3.innerText = "Hello World";
//   document.body.appendChild(h3);
// });

// let button = document.createElement("button");

// button.innerText = "Click me";

// document.body.appendChild(button);

// button.addEventListener("click", function () {
//   let h3 = document.createElement("h3");
//   h3.innerText = "Hello World";
//   document.body.appendChild(h3);
// });

// function raiseAlert(event) {
//   console.log(event);
//   alert("Hello World");
//   console.log(this);
// }
// let forma = document.querySelector("form");

// forma.addEventListener("submit", function (event) {
//   event.preventDefault();
//   let input = document.querySelector("input");
//   let img = document.createElement("img");
//   img.src = input.value;
//   img.addEventListener("click", function () {
//     img.remove();
//   });
//   document.body.appendChild(img);
//   input.value = "";
// });
