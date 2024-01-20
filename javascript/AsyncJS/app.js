// let pom = {
//     employees: [
//       { firstName: "John", lastName: "Doe" },
//       { firstName: "Anna", lastName: "Smith" },
//       { firstName: "Peter", lastName: "Jones" },
//     ],
//   };

//   let text =
//     '{ "employees" : [' +
//     '{ "firstName":"John" , "lastName":"Doe" },' +
//     '{ "firstName":"Anna" , "lastName":"Smith" },' +
//     '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

//   let obj = JSON.parse(text);

//////////////////////////

// function one() {
//   setTimeout(() => {
//     console.log("one");
//   }, 3000);

//   console.log("two");

//   setTimeout(() => {
//     console.log("three");
//   }, 1000);
// }

// one();

// setInterval(() => {
//   console.log("nesto");
// }, 1000);

//////////////////////////

// let promise = new Promise(function (resolve, reject) {
//   // a mock async action using setTimeout
//   setTimeout(function () {
//     resolve("Promise resolved");
//   }, 3000);
// });

// promise.then(
//   function (value) {
//     console.log(value);
//   },
//   function (reason) {
//     console.log(reason);
//   }
// );

// https://catfact.ninja/fact

// //Get i Delete
// {
//   "header"= {
//     "Content-Type": "application/json",
//   }
// }

// //Post i Put

// {
//   "header"= {
//     "Content-Type": "application/json",
//   }
//   "body"= {
//     "fact": "A cat's tail contains nearly 10 percent of all the bones in its body.",
//     "length": 67
//   }
// }

// let data = {};

// fetch("https://catfact.ninja/fact")
//   .then((response) => {
//     return response.json();
//   })
//   .then((res) => {
//     console.log(res);
//     data = res;
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// let div = document.createElement("div");
// div.innerHTML = data.fact;

// document.body.appendChild(div);

function showCatFacts(data) {
  let div = document.createElement("div");
  div.innerHTML = data.fact;

  document.body.appendChild(div);
}

async function getCatFacts() {
  try {
    let data = await fetch("https://catfact.ninja/fact?max_length=40");
    let res = await data.json();
    console.log(res);
    showCatFacts(res);
  } catch (err) {
    console.log(err);
  }
}

getCatFacts();

// async function postData(url = "", data = {}) {
//   // Default options are marked with *
//   const response = await fetch(url, {
//     method: "POST", // *GET, POST, PUT, DELETE, etc.
//     mode: "cors", // no-cors, *cors, same-origin
//     cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: "same-origin", // include, *same-origin, omit
//     headers: {
//       "Content-Type": "application/json",
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     redirect: "follow", // manual, *follow, error
//     referrerPolicy: "no-referrer", // no-referrer, *client
//     body: JSON.stringify(data), // body data type must match "Content-Type" header
//   });
//   return await response.json(); // parses JSON response into native JavaScript objects
// }

// postData("https://example.com/answer", { answer: 42 }).then((data) => {
//   console.log(data); // JSON data parsed by `response.json()` call
// });
