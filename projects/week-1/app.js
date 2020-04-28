//if user enters a space, replace with dash

const searchButton = document.getElementById('search');
const input = document.getElementById('users-input');

searchButton.addEventListener('click', function () {
    var pokemonName = String(input.value);
    var formattedPokemonName = pokemonName.replace(" ", "-");
  pokemonRequest(formattedPokemonName);
});

function pokemonRequest(name) {
  fetch('https://pokeapi.co/api/v2/pokemon/' + name)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
        document.getElementById('name').textContent = data.name;
        document.getElementById('type').textContent = data.types[0].type.name;
        document.getElementById('img').src = data.sprites.front_default;
        console.log(data.abilities);
    })
    .catch((err) => {
      //do something with error
      alert("The pokemon you have entered is not recognised. Please try again")
    });
}
