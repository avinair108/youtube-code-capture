/*global chrome*/
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'extractText') {
    // Capture text from images or videos in the current tab and send it to the background script
  }
});
