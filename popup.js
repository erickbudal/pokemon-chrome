let pokenificateCheckbox = document.getElementById('pokenificate');

chrome.storage.sync.get('isPokenificate', data => {
    pokenificateCheckbox.checked = data.isPokenificate;
});

pokenificateCheckbox.onclick = element => {
    chrome.storage.sync.set({isPokenificate: pokenificateCheckbox.checked}, () => {
        console.log("isPokenificate: " + pokenificateCheckbox.checked);
    });
};