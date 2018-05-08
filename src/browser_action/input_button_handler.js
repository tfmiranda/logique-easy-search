// This file contains all functions that handler things associated with the search input and search button

let DELAY_KEYUP_MILLIS = 2000; // Time after keyup at search input to activate the search

function configButton() {
    background.console.log('executing configButton');
    document.getElementById('buttonSearch').addEventListener('click', submitSearch);
    document.getElementById('buttonSearch').innerHTML=chrome.i18n.getMessage("popup_button_text");
}

function configInput() {
    document.getElementById('inputSearch').placeholder = chrome.i18n.getMessage("popup_input_search_placeholder");
    document.getElementById('inputSearch').focus(); 
    document.getElementById('formSearch').addEventListener('submit', submitSearch);    
}

function submitSearch() {
    background.console.log('executing submitSearch');
    background.console.log('searching for: ' + document.getElementById('inputSearch').value);
    event.preventDefault();
    search(document.getElementById('inputSearch').value);   
}

function configDelaySearch() {
    let timer;
    background.console.log('executing configDelaySearch');    
    document.getElementById('inputSearch').addEventListener('keyup', function () {
        resultsSetLoading();
        clearTimeout(timer);        
        timer = setTimeout(function (event) {
            search(document.getElementById('inputSearch').value);
            resultsSetNothing();
        }, DELAY_KEYUP_MILLIS);
    });
}