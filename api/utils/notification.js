const { User, Notification } = require("../database.js");

/*
useer = {
  email: usermail o id: userId
}
notification = {
  type: 'invitation',
  message: 'Invitation to collaborate to username workspace',
  workspace: workspaceId
}
*/

const saveNotification = async (notification, user) => {
   //return {notification, user}
   //console.log(notification)
   //console.log(user)
  try {
    const userFound = await User.findOne({ where: user });
    if (!userFound) return 'User not found';
    const newNotification = await Notification.create(notification);
    await userFound.addNotifications(newNotification);
    //return userFound
    return 'ok';
  }
  catch (error) {
    return error.message;
  }
};

const deleteNotification = async (id) =>{
 try {
  const notification = await Notification.update({
    isDeleted: true
  },
  { where: {id}})
  
 if (!notification) throw new Error('Notification not found');
    return 'Notification deleted';
 }
 catch(e){
    return e.message
 }
}

module.exports = {
  saveNotification,
  deleteNotification
};
