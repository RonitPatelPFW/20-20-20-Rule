chrome.alarms.onAlarm.addListener(() => {
    chrome.notifications.create({
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
    });
});
chrome.alarms.create({
  periodInMinutes: 20
});
