import * as NotificationService from './service.js'

export const send = async (req, res) => {
  try {
    const notif = await NotificationService.sendNotification(req.body)
    res.status(201).json(notif)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

export const list = async (req, res) => {
  try {
    const data = await NotificationService.getNotifications(req.query)
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

export const mark = async (req, res) => {
  try {
    const updated = await NotificationService.markAsRead(req.params.id)
    res.status(200).json(updated)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}
