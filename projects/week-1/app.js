//if user enters a space, replace with dash

const searchButton = document.getElementById('search');
const input = document.getElementById('users-input');

searchButton.addEventListener('click', function () {
  var pokemonName = String(input.value);
  var formattedPokemonName = pokemonName.replace(' ', '-');
  pokemonRequest(formattedPokemonName);
});

function pokemonRequest(name) {
  fetch('https://pokeapi.co/api/v2/pokemon/' + name)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      var abilityString = 'Abilities: ';
      abilityString += "<br>"
      var statsString = "Stats";
      statsString += "<br><br>";

      document.getElementById('name').textContent = data.name;
      document.getElementById('type').textContent = data.types[0].type.name;
      document.getElementById('img').src = data.sprites.front_default;
      let abilities = data.abilities;
      let statsObject = data.stats;

      for (const stat of statsObject) {
          statsString += stat.stat.name;
          statsString += " : ";
          statsString += stat.base_stat;
          statsString += "<br>";
      }
      document.querySelector('.stats').innerHTML = statsString;

      for (const ability of abilities) {
        const name = ability.ability.name;
        const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);

        abilityString += nameCapitalized;
        abilityString += "<br>";

        console.log(ability.ability.name);
      }
      document.getElementById('ability').innerHTML = abilityString;

      var audio = new Audio('pokemon-clip.mp3');
      audio.play();
    })
    .catch((err) => {
      //do something with error
      alert('The pokemon you have entered is not recognised. Please try again');
    });
}
