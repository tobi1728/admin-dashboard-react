const generateRandomDate = () => {
  const now = new Date();
  const randomDate = new Date(
    now - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000
  );
  return randomDate;
};

export const generateRandomNotifications = (user) => {
  const notifications = [
    "You have a new message from the HR department.",
    "Your recent project has been approved.",
    "Reminder: Submit your timesheet.",
    "Your password will expire in 5 days.",
    "You have a new friend request.",
    "System maintenance is scheduled for tomorrow.",
    "You have a new task assigned.",
    "Your profile was updated successfully.",
    "A new version of the app is available.",
    "Your meeting is scheduled for 3 PM.",
  ];

  const getRandomNotifications = (count) => {
    const shuffled = notifications.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count).map((notification) => ({
      message: notification,
      date: generateRandomDate(),
    }));
  };

  const notificationCount = Math.floor(Math.random() * 10) + 1;
  return getRandomNotifications(notificationCount);
};
