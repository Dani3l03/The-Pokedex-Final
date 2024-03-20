import * as pokeConnection from "./fetch.js";
import * as pokeAnimations from "./animations.js";
import fetchAllPokemon from "./fetchAll.js";
import selectTypePokemon from "./fetchSelectType.js";
import * as Modal from "./modal.js";

selectTypePokemon();
pokeConnection.initHandlePokemonData();
fetchAllPokemon();
