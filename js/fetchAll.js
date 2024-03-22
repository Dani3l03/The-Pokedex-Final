export default function fetchAllPokemon(){

  async function getPokemonData(pokemon) {
    const pokeApi = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const result = await fetch(pokeApi);
    const data = await result.json();
    return data;
  }

  async function getPokemonTotalNumber() {
    const results = document.querySelector(".search-numbers");
    const pokeApi = `https://pokeapi.co/api/v2/pokemon/`;
    const result = await fetch(pokeApi);
    const data = await result.json();
    const pokemonNumbers = data.count;
    results.innerText = `${pokemonNumbers} Pokémon`;
  }

  async function showPokemonData(pokemon) {
    const pokemonButtonLoad = document.querySelector(".button-load");
    const pokemonErrorMsg = document.querySelector(".error-msg");
    pokemonErrorMsg.classList.add("hide");
    pokemonButtonLoad.style.display = "block";
    const btnAll = document.getElementById("pokemon");
    btnAll.classList.add("types-click");
    const data = await getPokemonData(pokemon);
    const pokemonNameSearched = data.name;
    const pokemonNumberSearched = data.id;
    const pokemonTypeSearched = data.types.map((type) => type.type.name);
    const pokemonImageSearched =
      data.sprites.other["official-artwork"]["front_default"];
      

    getPokemonTotalNumber();
    createCard();

   function createCard() {
      const pokemonContainer = document.querySelector(
        ".pokemon-container-results"
      );
      const card = document.createElement("div");
      card.classList.add("pokemon-container-result");

      // MODAL - criação e fetch.

     async function createModalData(data){
      card.addEventListener('click', () => {
        console.log(`Card de ${data.name} clicado!`)

        const pokemonAbilities = data.abilities[0].ability.name;
        const pokemonHeight = `${(data.height)/10} m`
        const pokemonWeight = `${(data.weight)/10} kg`;
        const pokemonHp = data.stats[0].base_stat;
        const pokemonAttack = data.stats[1].base_stat;
        const pokemonDefense = data.stats[2].base_stat;
        const pokemonSpAttack = data.stats[3].base_stat;
        const pokemonSpDefense = data.stats[4].base_stat;
        const pokemonSpeed = data.stats[5].base_stat;

        console.log(pokemonAbilities);
        console.log(pokemonHeight);
        console.log(pokemonWeight);
        console.log(pokemonHp);
        console.log(pokemonAttack);
        console.log(pokemonDefense);
        console.log(pokemonSpAttack);
        console.log(pokemonSpDefense);
        console.log(pokemonSpeed);
        
        const pokemonTypesClick = document.querySelectorAll(".types");

  pokemonTypesClick.forEach((pokeType) => {
    pokeType.addEventListener("click", async () => {
      const type = pokeType.id;
      const pokeApiType = `https://pokeapi.co/api/v2/type/${type}`;
      const result = await fetch(pokeApiType);
      const dataType = await result.json();
  });
  });

      });
     
    }
      
      createModalData(data);

      const name = document.createElement("p");
      name.classList.add("poke-name");
      name.innerText =
        pokemonNameSearched.charAt(0).toUpperCase() +
        pokemonNameSearched.slice(1);

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

      pokemonContainer.appendChild(card);
      card.appendChild(imageDiv);
      imageDiv.appendChild(image);
      card.appendChild(number);
      card.appendChild(nameType);
      nameType.appendChild(name);
      nameType.appendChild(type);
      type.appendChild(typeImage);

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
              typeImage.src= "img/assets/icon-types/dark.svg";
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
                typeImage.src= "img/assets/icon-types/dark.svg";
                imageDiv.style.backgroundColor = `var(--type-${pokemonTypeSearched[0]})`;
                break;
          }
        });
      }
    }
  }

  async function fetchAll() {
    for (let i = 1; i <= 9; i++) {
      await showPokemonData(i);     
    }
  }

  fetchAll();

  const loadMore = document.querySelector(".load-pokemon");
  let number = 9;

  loadMore.addEventListener("click", loadMorePokemon);

  async function loadMorePokemon() {
    for (let i = number + 1; i <= number + 9; i++) {
      await showPokemonData(i);
    }
    number += 9;
  }

  const pokemonBtnAll = document.getElementById("pokemon");

  pokemonBtnAll.addEventListener('click', async () => {
    fetchAll();
    const loadMore = document.querySelector(".load-pokemon");
    loadMore.addEventListener("click", loadMorePokemon);
      const allCards = document.querySelectorAll(".pokemon-container-result");
      allCards.forEach((card) => {
        card.style.display = "none";
      });
  });
}
  

  

 

  
