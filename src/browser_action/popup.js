// get the backgroun context console
var background = chrome.extension.getBackgroundPage();

// initial popup configuration
window.addEventListener('load', function(evt) {    
    background.console.log('executing window.addEventListener');
    configureHeaderPart();
    configureSearchInputButtonPart();
    configureResultsPart();    
});

function configureHeaderPart() {
    configHeader();
}

function configureSearchInputButtonPart() {
    configButton();
    configInput();    
    configDelaySearch();
}

function configureResultsPart() {
    configResults();
}
