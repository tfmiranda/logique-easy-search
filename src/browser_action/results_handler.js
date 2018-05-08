// This file contains all functions that handler things associated with the results

let isLoading = false;

function configResults() {
    background.console.log('executing configResults');
    resultsSetNothing();
}

function resultsSetNothing() {
	resultsSetNotLoading();
    document.getElementById('pDivResults').innerHTML = getResultsNothingListHTML();
}

function resultsSetLoading() {
	if (!isLoading){
		isLoading = true;
    	document.getElementById('pDivResults').innerHTML = getResultsLoadingHTML();	
	}	
}

function resultsSetNotLoading() {
	isLoading = false;
}

function getResultsLoadingHTML() {
    let loadingMsg = chrome.i18n.getMessage("popup_results_loading");
    let msg = '<i class="fa fa-spinner fa-spin"></i> ' + loadingMsg;    
    return msg;
}

function getResultsNothingListHTML() {
    let nothingMsg = chrome.i18n.getMessage("popup_results_nothing");    
    return nothingMsg;
}