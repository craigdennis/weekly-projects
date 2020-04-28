//if user enters a space, replace with dash



const searchButton = document.getElementById('search');
const input = document.getElementById('users-input');

searchButton.addEventListener('click', function () {
  pokemonRequest(input.value);
});

function pokemonRequest(name) {
  fetch('https://pokeapi.co/api/v2/pokemon/' + name)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.name);
      console.log(data.types[0].type.name);
      console.log(data.abilities);
      console.log(data.sprites.front_default);

    })
    .catch((err) => {
        //do something with error
    });
}
