// get the backgroun context console
var background = chrome.extension.getBackgroundPage();

// initial popup configuration
window.addEventListener('load', function(evt) {    
    background.console.log('executing window.addEventListener');
    configHeader();
    configButton();
    configInput();
    document.getElementById('formSearch').addEventListener('submit', submitSearch);
});

function configHeader() {
    background.console.log('executing configHeader');
    document.getElementById('imgHeader').src="../../media/icons/icon-logique-128.png";
    document.getElementById('imgHeader').style="width:55px;height:55px;";
    document.getElementById('pHeaderName').innerHTML=chrome.i18n.getMessage("popup_header_name");
}

function configButton() {
    background.console.log('executing configButton');
    document.getElementById('buttonSearch').addEventListener('click', submitSearch);
    document.getElementById('buttonSearch').innerHTML=chrome.i18n.getMessage("popup_button_text");
}

function configInput() {
    document.getElementById("inputSearch").placeholder = chrome.i18n.getMessage("popup_input_search_placeholder");
    document.getElementById('inputSearch').focus(); 
}

// method triggered when enter key pressed
function submitSearch() {
    background.console.log('executing submitSearch');
    background.console.log('searching for: ' + document.getElementById('inputSearch').value);
    event.preventDefault();
    search(document.getElementById('inputSearch').value);   
}

/*
function search(arg) {
    background.console.log('executando search');
    var word = encodeURIComponent(arg);
    var newTabUrl = getNewTabUrl(word);
    chrome.tabs.create({        
        'url': newTabUrl       
    });
}

// gera a url da pesquisa informada
function getNewTabUrl(w) {
    return "https://wiki.logiquesistemas.com.br/index.php?search=" + w + "&go=Ir";
}
*/


