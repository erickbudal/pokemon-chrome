const pokemons = ["bulbasaur","ivysaur","venusaur","charmander","charmeleon","charizard","squirtle",
                  "wartortle","blastoise","caterpie","metapod","butterfree","weedle","kakuna",
                  "beedrill","pidgey","rattata","raticate","ekans","arbok","raichu",
                  "sandshrew","sandslash","clefairy","clefable","vulpix","ninetales","jigglypuff",
                  "wigglytuff","zubat","paras","parasect","diglett","dugtrio","meowth",
                  "persian","psyduck","golduck","mankey","primeape","growlithe","arcanine",
                  "poliwag","poliwhirl","poliwrath","abra","kadabra","alakazam","bellsprout",
                  "weepinbell","victreebel","geodude","graveler","golem","doduo","dodrio",
                  "seel","dewgong","gastly","haunter","gengar","cubone","marowak",
                  "chansey","goldeen","electabuzz","vaporeon","jolteon","flareon","porygon",
                  "aerodactyl","snorlax","articuno","zapdos","moltres","dratini","dragonair",
                  "dragonite","mewtwo","pidgeotto","pidgeot","spearow","fearow","pikachu",
                  "nidoranf","nidorina","nidoqueen","nidoranm","nidorino","nidoking","golbat",
                  "oddish","gloom","vileplume","venonat","venomoth","machop","machoke",
                  "machamp","tentacool","tentacruel","ponyta","rapidash","slowpoke","slowbro",
                  "magnemite","magneton","farfetchd","grimer","muk","shellder","cloyster",
                  "onix","drowzee","hypno","krabby","kingler","voltorb","electrode",
                  "exeggcute","exeggutor","hitmonlee","hitmonchan","lickitung","koffing","weezing",
                  "rhyhorn","rhydon","tangela","kangaskhan","horsea","seadra","seaking",
                  "staryu","starmie","mr mime","scyther","jynx","magmar","pinsir",
                  "tauros","magikarp","gyarados","lapras","ditto","eevee","omanyte",
                  "omastar","kabuto","kabutops","mew"];

function getRandomPokemonPic() {
    let randomPokemonName = pokemons[Math.floor(Math.random() * pokemons.length)];
    let pokemonPic = chrome.extension.getURL("images/" + randomPokemonName + ".png");
    return pokemonPic;
}

function replaceImagesToPokemons() {
    chrome.storage.sync.get('isPokenificate', data => {
        if(data.isPokenificate) {
            document.querySelectorAll('img').forEach(img => {
                if(img.hasAttribute('src')) {
                    img.setAttribute('src', getRandomPokemonPic());
                }
                if(img.hasAttribute('srcset') ) {
                    img.setAttribute('srcset', getRandomPokemonPic());
                }
            });
        }
    });
};

window.onload = replaceImagesToPokemons;

/* Tentando usar MutationObserver para mudar imagens carregadas após o window.onload
   Ainda não funciona :(
const observer = new MutationObserver(mutations => {
    chrome.storage.sync.get('isPokenificate', data => {
        if(data.isPokenificate) {
            mutations.forEach(mutation => {
                if(mutation.target.nodeName.toLocaleLowerCase() == 'img') {
                    let img = mutation.target;
                    if(img.hasAttribute('src')) {
                        img.setAttribute('src', getRandomPokemonPic());
                    }
                    if(img.hasAttribute('srcset') ) {
                        img.setAttribute('srcset', getRandomPokemonPic());
                    }
                }
            }); 
        }
    });
});

const config = {attributes: true, childList: true, subtree: true};

observer.observe(document.getElementsByTagName("body")[0], config);
*/