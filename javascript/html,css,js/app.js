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

let forma = document.querySelector("form");

forma.addEventListener("submit", function (event) {
  event.preventDefault();
  let input = document.querySelector("input");
  let p = document.createElement("p");
  p.innerText = input.value;
  document.body.appendChild(p);
  input.value = "";
});
