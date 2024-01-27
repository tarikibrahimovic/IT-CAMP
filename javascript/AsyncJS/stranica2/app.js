let url = new URL(window.location.href);

let params = new URLSearchParams(url.search);
let param = params.get("pokemon");

if (param) {
  getPokemon(param);
}

function showPokemon(data) {
  let div = document.createElement("div");
  let img = document.createElement("img");
  img.src = data.sprites.front_default;
  div.innerHTML = data.name;
  console.log(data);
  div.appendChild(img);

  document.body.appendChild(div);
}

async function getPokemon(pokemon) {
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  let data = await response.json();
  showPokemon(data);
}
