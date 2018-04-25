
chrome.contextMenus.create({    
    "title": chrome.i18n.getMessage("context_menu_title"),
    "contexts": ["selection"],    
    "onclick": function(obj) {
        console.log('executing chrome.contextMenus.create');
        var text = obj.selectionText;
        console.log('selected text: ' + text);
        search(text);
    }
});

chrome.runtime.onInstalled.addListener(function() {
    console.log('executing chrome.runtime.onInstalled');
});

chrome.omnibox.onInputEntered.addListener(function(text) {
    console.log('executing chrome.omnibox.onInputEntered');
    console.log('input text: ' + text);
    search(text);
});

function search(arg) {
    console.log('executing search');
    var word = encodeURIComponent(arg);
    var newTabUrl = getNewTabUrl(word);
    chrome.tabs.create({        
        'url': newTabUrl       
    });
}

// generate the search url
function getNewTabUrl(searchWord) {
    return "https://wiki.logiquesistemas.com.br/index.php?search=" + searchWord + "&go=Ir";
}