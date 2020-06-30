console.log("Hello world")

chrome.tabs.getCurrent(function(tab){
    console.log(tab.url);
  });

chrome.runtime.onMessage.addListener(receiver);

function receiver(request, sender, sendResponse) {
    
    if (request.message === "https://www.instagram.com/") {
        
        console.log("Gonna Cancel this page real quick")
        //window.open("https://vuiis.vumc.org/~hardybm/")
        //console.log(request.id)
        //chrome.tabs.remove(request.id)
    }
}
