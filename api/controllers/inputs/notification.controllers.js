const { deleteNotification } = require("../../utils/notification.js");

const deleteNotificationSaved = async (req, res, next) => {
  const id = req.params.id;

  try {
    const notificationDeleted = await deleteNotification(id);
    res.send(notificationDeleted);
  } catch (e) {
    res.send(e.message);
  }
};

module.exports = { deleteNotificationSaved };
