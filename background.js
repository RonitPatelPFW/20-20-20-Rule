chrome.alarms.onAlarm.addListener((tab) => {
    chrome.notifications.create('alarm1',{
      type: 'list',
      title: '20-20-20',
      iconUrl: 'images/eye128.png',
      message: 'Break Time',
      priority: 2,
      items: [
        {
          title: "Do the following:",
          message: "Look at something 20 feet away for 20 seconds."
        }
      ]
    },  async () => {
      let queryOptions = { active: true, lastFocusedWindow: true };
      let [tab] = await chrome.tabs.query(queryOptions);
      chrome.scripting.executeScript({
          files: ["content.js"],
          target: {tabId: tab.id}
      });

    });
});

chrome.alarms.create({
  periodInMinutes: 20
});