'use strict';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({isPokenificate: true}, () => {
    console.log("isPokenificate: true");
  });
});
