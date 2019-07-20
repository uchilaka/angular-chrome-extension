// Copyright 2019 LarCity LLC
//
// (From The Chromium Authors circa 2018:)
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
//
// Guide for background pages: https://developer.chrome.com/extensions/background_pages

chrome.runtime.onInstalled.addListener(function() {
  // // @TODO Arbitrary task on installed - try opening a new tab here (for signup)
  // chrome.storage.sync.set({
  //   color: '#3aa757'
  // }, function() {
  //   console.log('The color is green.');
  // });

  // Set rules for when popup should show
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {
          // hostEquals: 'developer.chrome.com',
          schemes: ['http', 'https']
        },
      })],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });

  // // // Open a new tab
  // // chrome.tabs.create({
  // //   url: 'popup.html'
  // // }, function() { /** Callback action here */});


  // // Docs: https://developer.chrome.com/extensions/webNavigation
  // chrome.webNavigation.onCompleted.addListener(function() {
  //   console.log('User is running an app in developer mode');
  // }, {
  //   url: [
  //     // Filter by URL
  //     {
  //       urlMatches: 'http://localhost:4200'
  //     },
  //     // Attempting to filter by the chrome plugin (dev) ID
  //     {
  //       hostSuffix: 'akkcpblckifneccnbpjnbompdenfnlji'
  //     }
  //   ]
  // });

});

chrome.alarms.onAlarm.addListener((...args: any[]) => {
  console.warn('Found chrome alarm! >>> ', args);
  // chrome.browserAction.setBadgeText({text: ''});
  // chrome.notifications.create({
  //     type:     'basic',
  //     iconUrl:  'stay_hydrated.png',
  //     title:    'Time to Hydrate',
  //     message:  'Everyday I\'m Guzzlin\'!',
  //     buttons: [
  //       {title: 'Keep it Flowing.'}
  //     ],
  //     priority: 0});
});
