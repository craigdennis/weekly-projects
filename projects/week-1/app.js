//if user enters a space, replace with dash

const searchButton = document.getElementById('search');
const input = document.getElementById('users-input');

searchButton.addEventListener('click', function () {
    var pokemonName = String(input.value);
    var formattedPokemonName = pokemonName.replace(" ", "-");
  pokemonRequest("ditto");
});

function pokemonRequest(name) {
  fetch('https://pokeapi.co/api/v2/pokemon/' + name)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
        let abilityString = "";

        document.getElementById('name').textContent = data.name;
        document.getElementById('type').textContent = data.types[0].type.name;
        document.getElementById('img').src = data.sprites.front_default;
        let abilities = data.abilities
        
        for (const ability of abilities) {
           abilityString += ability.ability.name
           abilityString += " ";
            console.log(ability.ability.name);
        }
        document.getElementById('ability').textContent = abilityString;
    })
    .catch((err) => {
      //do something with error
      alert("The pokemon you have entered is not recognised. Please try again")
    });
}
