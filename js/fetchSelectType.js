import * as fetchPokemon from "./fetch.js";
import fetchAllPokemon from "./fetchAll.js";

export default function selectTypePokemon() {
  const pokemonTypesClick = document.querySelectorAll(".types");
  const pokemonButtonLoad = document.querySelector(".button-load");
  const pokemonErrorMsg = document.querySelector(".error-msg");
  const results = document.querySelector(".search-numbers");

  pokemonTypesClick.forEach((pokeType) => {
    pokeType.addEventListener("click", async () => {
      
      try{
      const type = pokeType.id;
      const pokeApiType = `https://pokeapi.co/api/v2/type/${type}`;
      const result = await fetch(pokeApiType);
      const data = await result.json();

      const pokemonList = data.pokemon.map((pokemon) => pokemon.pokemon.name);
      const pokemonCount = pokemonList.length;
      const results = document.querySelector(".search-numbers");
      results.innerText = `${pokemonCount} Pokémon`;

      pokemonList.forEach((pokemon) => {
        pokemonButtonLoad.style.display = "none";
        const allCards = document.querySelectorAll(".pokemon-container-result");
        allCards.forEach((card) => {
          card.style.display = "none";
        });
        showPokemonData(pokemon);
      });
    } catch(e){
      
    }
  });
  });
  

  async function getPokemonData(pokemonList) {
    const pokeApi = `https://pokeapi.co/api/v2/pokemon/${pokemonList}`;
    const result = await fetch(pokeApi);
    const data = await result.json();
    return data;
  }
  async function showPokemonData(pokemon) {
    pokemonErrorMsg.classList.add("hide");
    const data = await getPokemonData(pokemon);
    const pokemonNameSearched = data.name;
    const pokemonNumberSearched = data.id;
    const pokemonTypeSearched = data.types.map((typeObj) => typeObj.type.name);
    const pokemonImageSearched = data.sprites.other["official-artwork"]["front_default"];

    createCard(data);

    function createCard() {
      const pokemonContainer = document.querySelector(
        ".pokemon-container-results"
      );
      const card = document.createElement("div");
      card.classList.add("pokemon-container-result");

      const name = document.createElement("p");
      name.classList.add("poke-name");
      const namePokeTextFinal = (
        pokemonNameSearched.charAt(0).toUpperCase() +
        pokemonNameSearched.slice(1)
      ).replace(/-/g, " ");
      name.innerText = namePokeTextFinal;

      const nameType = document.createElement("div");
      nameType.classList.add("name-type");

      const number = document.createElement("p");
      number.classList.add("number");
      number.innerText = "#" + pokemonNumberSearched;

      const type = document.createElement("span");
      type.classList.add("type");
      const typeImage = document.createElement("img");

      const imageDiv = document.createElement("div");
      imageDiv.classList.add("pokemon-img");
      const image = document.createElement("img");
      image.src = pokemonImageSearched;

      card.appendChild(imageDiv);
      imageDiv.appendChild(image);
      card.appendChild(number);
      card.appendChild(nameType);
      nameType.appendChild(name);
      nameType.appendChild(type);
      type.appendChild(typeImage);
      pokemonContainer.appendChild(card);

      if (pokemonTypeSearched[1]) {
        type.classList.add("type");
        const typeImage = document.createElement("img");
        type.appendChild(typeImage);
        pokemonTypeSearched.forEach(() => {
          switch (pokemonTypeSearched[1]) {
            case "fire":
              typeImage.src = "img/assets/icon-types/fire.svg";
              break;
            case "water":
              typeImage.src = "img/assets/icon-types/water.svg";
              break;
            case "grass":
              typeImage.src = "img/assets/icon-types/grass.svg";
              break;
            case "flying":
              typeImage.src = "img/assets/icon-types/flying.svg";
              break;
            case "electric":
              typeImage.src = "img/assets/icon-types/electric.svg";
              break;
            case "normal":
              typeImage.src = "img/assets/icon-types/normal.svg";
              break;
            case "rock":
              typeImage.src = "img/assets/icon-types/rock.svg";
              break;
            case "ice":
              typeImage.src = "img/assets/icon-types/ice.svg";
              break;
            case "bug":
              typeImage.src = "img/assets/icon-types/bug.svg";
              break;
            case "poison":
              typeImage.src = "img/assets/icon-types/poison.svg";
              break;
            case "ground":
              typeImage.src = "img/assets/icon-types/ground.svg";
              break;
            case "steel":
              typeImage.src = "img/assets/icon-types/steel.svg";
              break;
            case "ghost":
              typeImage.src = "img/assets/icon-types/ghost.svg";
              break;
            case "fairy":
              typeImage.src = "img/assets/icon-types/fairy.svg";
              break;
            case "fighting":
              typeImage.src = "img/assets/icon-types/fighting.svg";
              break;
            case "psychic":
              typeImage.src = "img/assets/icon-types/psychic.svg";
              break;
            case "dragon":
              typeImage.src = "img/assets/icon-types/dragon.svg";
              break;
            case "dark":
              typeImage.src = "img/assets/icon-types/dark.svg";
              break;
          }
        });
      }

      if (pokemonTypeSearched[0]) {
        pokemonTypeSearched.forEach(() => {
          switch (pokemonTypeSearched[0]) {
            case "fire":
              typeImage.src = "img/assets/icon-types/fire.svg";
              imageDiv.style.backgroundColor = `var(--type-${pokemonTypeSearched[0]})`;
              break;
            case "water":
              typeImage.src = "img/assets/icon-types/water.svg";
              imageDiv.style.backgroundColor = `var(--type-${pokemonTypeSearched[0]})`;
              break;
            case "grass":
              typeImage.src = "img/assets/icon-types/grass.svg";
              imageDiv.style.backgroundColor = `var(--type-${pokemonTypeSearched[0]})`;
              break;
            case "flying":
              typeImage.src = "img/assets/icon-types/flying.svg";
              imageDiv.style.backgroundColor = `var(--type-${pokemonTypeSearched[0]})`;
              break;
            case "electric":
              typeImage.src = "img/assets/icon-types/electric.svg";
              imageDiv.style.backgroundColor = `var(--type-${pokemonTypeSearched[0]})`;
              break;
            case "normal":
              typeImage.src = "img/assets/icon-types/normal.svg";
              imageDiv.style.backgroundColor = `var(--type-${pokemonTypeSearched[0]})`;
              break;
            case "rock":
              typeImage.src = "img/assets/icon-types/rock.svg";
              imageDiv.style.backgroundColor = `var(--type-${pokemonTypeSearched[0]})`;
              break;
            case "ice":
              typeImage.src = "img/assets/icon-types/ice.svg";
              imageDiv.style.backgroundColor = `var(--type-${pokemonTypeSearched[0]})`;
              break;
            case "bug":
              typeImage.src = "img/assets/icon-types/bug.svg";
              imageDiv.style.backgroundColor = `var(--type-${pokemonTypeSearched[0]})`;
              break;
            case "poison":
              typeImage.src = "img/assets/icon-types/poison.svg";
              imageDiv.style.backgroundColor = `var(--type-${pokemonTypeSearched[0]})`;
              break;
            case "ground":
              typeImage.src = "img/assets/icon-types/ground.svg";
              imageDiv.style.backgroundColor = `var(--type-${pokemonTypeSearched[0]})`;
              break;
            case "steel":
              typeImage.src = "img/assets/icon-types/steel.svg";
              imageDiv.style.backgroundColor = `var(--type-${pokemonTypeSearched[0]})`;
              break;
            case "ghost":
              typeImage.src = "img/assets/icon-types/ghost.svg";
              imageDiv.style.backgroundColor = `var(--type-${pokemonTypeSearched[0]})`;
              break;
            case "fairy":
              typeImage.src = "img/assets/icon-types/fairy.svg";
              imageDiv.style.backgroundColor = `var(--type-${pokemonTypeSearched[0]})`;
              break;
            case "fighting":
              typeImage.src = "img/assets/icon-types/fighting.svg";
              imageDiv.style.backgroundColor = `var(--type-${pokemonTypeSearched[0]})`;
              break;
            case "psychic":
              typeImage.src = "img/assets/icon-types/psychic.svg";
              imageDiv.style.backgroundColor = `var(--type-${pokemonTypeSearched[0]})`;
              break;
            case "dragon":
              typeImage.src = "img/assets/icon-types/dragon.svg";
              imageDiv.style.backgroundColor = `var(--type-${pokemonTypeSearched[0]})`;
              break;
            case "dark":
              typeImage.src = "img/assets/icon-types/dark.svg";
              imageDiv.style.backgroundColor = `var(--type-${pokemonTypeSearched[0]})`;
              break;
          }
        });
      }
      const palavrasChave = [
        "eternamax",
        "average",
        "altered",
        "totem",
        "disguised",
        "dawn",
        "roaming",
        "small",
        "large",
        "super",
        "power",
        "50",
        "ultra",
        "limited",
        "build",
        "stretchy",
        "mode",
        "gmax",
        "yellow",
        "plumage",
        "-dusk",
        "-meteor",
        "-incarnate",
        "-orange",
        "-red",
        "-green",
        "-blue",
        "-indigo",
        "-violet",
        "-gulping",
        "-gorging",
        "mask",
        "-rock",
        "-libre",
        "-phd",
        "-cosplay",
        "-cap",
        "-starter",
        "-belle",
        "-pop", 
        "-therian",
        "iron",
        "-sunny",
        "-blaze",
        "-zen",
        "-hisui",
        "-belly",
        "-single",
        "-bond",
        "-ash",
        "-hangry",
        "-sensu",
        "-terras",
        "-stellar",
        "-dada",
        "-busted",
        "-amped",
        "-low"
      ];

      for (let palavra of palavrasChave) {
        if (pokemonNameSearched.toLowerCase().includes(palavra)) {
          card.style.display = "none";
          return;
        }
      }
    }
  }
}
