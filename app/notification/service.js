import Notification from './model.js'

export const sendNotification = async (data) => await Notification.create(data)
export const getNotifications = async (query) => await Notification.find(query).sort({ createdAt: -1 })
export const markAsRead = async (id) => await Notification.findByIdAndUpdate(id, { read: true }, { new: true })
