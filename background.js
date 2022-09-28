chrome.action.onClicked.addListener(function(tab) {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['ethers-5.2.umd.min.js', 'content.js']
  });
})