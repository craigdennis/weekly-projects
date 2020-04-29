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
      abilityString += '<br>';
      var statsString = 'Stats';
      statsString += '<br><br>';

      document.getElementById('name').textContent = data.name;
      document.getElementById('type').textContent = data.types[0].type.name;
      document.getElementById('img').src = data.sprites.front_default;
      let abilities = data.abilities;
      let statsObject = data.stats;

      for (const stat of statsObject) {
        let baseStat = stat.base_stat;

        statsString += stat.stat.name;
        statsString += ' : ';
        statsString += baseStat;

        switch (true) {
          case baseStat <= 10:
            statsString += '<div class="stats-bar-10"></div>';
            break;
          case baseStat > 11 && baseStat <= 20:
            statsString += '<div class="stats-bar-20"></div>';
            break;
          case baseStat > 21 && baseStat <= 30:
            statsString += '<div class="stats-bar-30"></div>';
            break;
          case baseStat > 31 && baseStat <= 40:
            statsString += '<div class="stats-bar-40"></div>';
            break;
          case baseStat > 41 && baseStat <= 50:
            statsString += '<div class="stats-bar-50"></div>';
            break;
          case baseStat > 51 && baseStat <= 60:
            statsString += '<div class="stats-bar-60"></div>';
            break;
          case baseStat > 61 && baseStat <= 70:
            statsString += '<div class="stats-bar-70"></div>';
            break;
          case baseStat > 71 && baseStat <= 80:
            statsString += '<div class="stats-bar-80"></div>';
            break;
          case baseStat > 81 && baseStat <= 90:
            statsString += '<div class="stats-bar-90"></div>';
            break;
          case baseStat > 91:
            statsString += '<div class="stats-bar-100"></div>';
            break;
        }

        statsString += '<br>';
      }
      document.querySelector('.stats').innerHTML = statsString;

      for (const ability of abilities) {
        const name = ability.ability.name;
        const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);

        abilityString += nameCapitalized;
        abilityString += '<br>';

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
