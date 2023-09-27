/*global chrome*/
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'extractText') {
    // Handle text extraction here
  }
});
