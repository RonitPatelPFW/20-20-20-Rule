chrome.alarms.onAlarm.addListener(() => {
    chrome.notifications.create({
      type: 'basic',
      title: '20-20-20',
      iconUrl: 'images/eye128.png',
      message: 'Break Time',
      priority: 2
    });
});

chrome.alarms.create({
  // periodInMinutes: 20
  // when: Date.now()
});

