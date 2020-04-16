/*
 *  GLOBAL VAR
 */

//if sci_hub_url is null, then sci_hub_url='https://sci-hub.tw'
var sci_hub_url=localStorage.sci_hub_url;
sci_hub_url = sci_hub_url?sci_hub_url:'https://sci-hub.tw';
var baseURL = sci_hub_url+"/";

// Firefox always has both chrome and browser objects, Chrome has only chrome
var browser = browser || chrome

function openSciHubTab(tab) {
    if ( tab.active ){
        browser.tabs.create({
            url: baseURL + tab.url,
            index: tab.index + 1
        });
		//alert(baseURL + tab.url);
    }
}

/*
 *  EVENT LISTENER
 */

// Listener
browser.browserAction.onClicked.addListener(function(tab) { openSciHubTab(tab) });