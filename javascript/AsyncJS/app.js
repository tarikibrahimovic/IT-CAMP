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

// function showCatFacts(data) {
//   let div = document.createElement("div");
//   div.innerHTML = data.fact;

//   document.body.appendChild(div);
// }

// async function getCatFacts() {
//   try {
//     let data = await fetch("https://catfact.ninja/fact?max_length=40");
//     let res = await data.json();
//     console.log(res);
//     showCatFacts(res);
//   } catch (err) {
//     console.log(err);
//   }
// }

// getCatFacts();

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
/////////////////////////////////////////////////////////////////////////

// let label = document.createElement("label");
// label.innerText = "Unesite ime pokemona";
// let input = document.createElement("input");
// let button = document.createElement("button");
// button.innerText = "Uzmi pokemona";
// let div = document.createElement("div");

// div.appendChild(label);
// div.appendChild(input);
// div.appendChild(button);

// document.body.appendChild(div);

// button.addEventListener("click", function (e) {
//   e.preventDefault();
//   getPokemon(input.value);
// });

// function showPokemon(data) {
//   let div = document.createElement("div");
//   let img = document.createElement("img");
//   img.src = data.sprites.front_default;
//   div.innerHTML = data.name;
//   div.addEventListener("click", function (e) {
//     e.preventDefault();
//     window.location.href = `stranica2/index.html?pokemon=${data.name}`;
//   });
//   div.appendChild(img);

//   document.body.appendChild(div);
// }

// async function getPokemon(name) {
//   try {
//     let data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
//     let res = await data.json();
//     console.log(res);
//     showPokemon(res);
//   } catch (err) {
//     console.log(err);
//   }
// }

//////////////////////////////////////////////////

// let key = "07aedaa6bdmsh5086c5b7fe24ecep1ca830jsnc57d502e51b1";

// localStorage.setItem("api_key", key);

// async function getData() {
//   const api_key = localStorage.getItem("api_key");
//   const url =
//     "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0";
//   const options = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Key": `${api_key}`,
//       "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
//     },
//   };

//   try {
//     const response = await fetch(url, options);
//     const result = await response.text();
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// }

// getData(key);

//////////////////////////////////////////////

async function login(name) {
  try {
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: "admin", password: "admin" }),
    };
    let data = await fetch(
      `http://localhost:30777/Authorization/login`,
      options
    );
    let res = await data.json();
    console.log(res);
    showPokemon(res);
  } catch (err) {
    console.log(err);
  }
}

async function register() {
  try {
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({
        username: "admin",
        password: "admin",
        email: "admin@gmail.com",
      }),
    };
    let data = await fetch(
      `http://localhost:30777/Authorization/register`,
      options
    );
    let res = await data.json();
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}

let button = document.createElement("button");
let button2 = document.createElement("button");

button.innerText = "Login";
button2.innerText = "Register";

button.addEventListener("click", function (e) {
  e.preventDefault();
  login();
});

button2.addEventListener("click", function (e) {
  e.preventDefault();
  register();
});

document.body.appendChild(button);
document.body.appendChild(button2);
