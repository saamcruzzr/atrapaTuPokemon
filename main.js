
// Para cargar DOM
document.addEventListener('DOMContentLoaded', () => {
    const idPokemon = numeroAleatorio(1,151);
    fetchAPI(idPokemon);
})

// Para obtener un número aleatorio
const numeroAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
};

// Para traer la API
const fetchAPI = async (id) => {
    try {
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await respuesta.json()
        // console.log(data);
        tarjetas(data);
    } catch (error) {
        console.log(error);
    };
};

// Pintar Tarjeta
const tarjetas = (pokemon) => {
    // console.log(pokemon)
    const contenedor = document.querySelector('.contenedor');
    contenedor.innerHTML = `
    <p class="quienEs">¿Quién es ese Pokémon?</p>
    <div class="tarjeta">
        <h1 class="nombre">${pokemon.name.toUpperCase()}</h1>
        <img class="imagen-ditto" src=${pokemon.sprites.other.dream_world.front_default}>
        <p class="tipo">TIPO ${pokemon.types[0].type.name.toUpperCase()}</p>    
    </div>
    `;
    actualiza()
};

// Actualizar tarjeta
const actualiza = () => {
    const botonActualizarTarjeta = document.querySelector('.tarjeta');
    botonActualizarTarjeta.addEventListener('click',  () => {
        const idPokemon = numeroAleatorio(1,151);
        fetchAPI(idPokemon);
        // console.log('nuevo pokemon ' + idPokemon)
    });
};

