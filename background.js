// coding train
console.log("background is running");
// console.log(tab.id)

chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    id: "sampleContextMenu",
    title: "Sample Context Menu",
    contexts: ["selection"],
  });
});

chrome.browserAction.onClicked.addListener(buttonClicked);
function buttonClicked(tab) {
  console.log(tab.url);
  var msg = {
    message: tab.url,
    id: tab.id,
  };
  chrome.tabs.sendMessage(tab.id, msg);

  if (msg.message === "https://www.instagram.com/") {
    console.log("Gonna Cancel this page real quick");
    window.open("https://vuiis.vumc.org/~hardybm/");
    console.log(msg.id);
    chrome.tabs.remove(msg.id);
  }
}

chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
  let url = tabs[0].url;
  // use `url` here inside the callback because it's asynchronous!
});
