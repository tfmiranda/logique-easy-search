// This file contains all functions that handler things associated with the header

function configHeader() {
    background.console.log('executing configHeader');
    document.getElementById('imgHeader').src="../../media/icons/icon-logique-128.png";
    document.getElementById('imgHeader').style="width:55px;height:55px;";
    document.getElementById('pHeaderName').innerHTML=chrome.i18n.getMessage("popup_header_name");
}
