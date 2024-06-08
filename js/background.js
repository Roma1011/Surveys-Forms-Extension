chrome.action.onClicked.addListener((tab) => {
    console.log("hello");
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['contentScript.js']
    });
});
