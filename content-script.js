function getRandomPokemonPic() {
    let random = 1 + Math.floor(Math.random() * Math.floor(44));
    let randomPokemonPic = chrome.extension.getURL("images/pokemon" + random + ".png");
    return randomPokemonPic;
}

window.onload = () => {
    chrome.storage.sync.get('isPokenificate', data => {
        if(data.isPokenificate) {
            document.querySelectorAll('img').forEach(img => {
                if(img.hasAttribute('src')) {
                    img.setAttribute('src', getRandomPokemonPic());
                }
                if(img.hasAttribute('srcset')) {
                    img.setAttribute('srcset', getRandomPokemonPic());
                }
            });
        }
    });
};