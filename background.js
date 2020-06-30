// coding train
console.log("background is running")
// console.log(tab.id)

/*
//chrome.tabs.getCurrent(redirect)
// chrome.tabs.sendMessage(tab.url);
function redirect(tab) {
  if (tab.url === "https://www.instagram.com/") {
        
        console.log("Gonna Cancel this page real quick")
        window.open("https://vuiis.vumc.org/~hardybm/")
        console.log(tab.id)
        chrome.tabs.remove(tab.id)
    }
}
*/
chrome.browserAction.onClicked.addListener(buttonClicked)

function buttonClicked(tab) {
  console.log(tab.url)
  var msg = {
    message: tab.url,
    id: tab.id
  }
  chrome.tabs.sendMessage(tab.id, msg);

  if (msg.message === "https://www.instagram.com/") {
        
        console.log("Gonna Cancel this page real quick")
        window.open("https://vuiis.vumc.org/~hardybm/")
        console.log(msg.id)
        chrome.tabs.remove(msg.id)
    }
}

