import * as RequestService from './service.js'

export const create = async (req, res) => {
  console.log('Request body:', req.body);

  const { id } = req.params; 
  req.body.userId = id; 

  const requiredFields = ['userId', 'address', 'contactNo', 'requestType'];
  for (const field of requiredFields) {
    if (!req.body[field]) {
      return res.status(400).json({ error: `Missing required field: ${field}` });
    }
  }

  try {
    const data = await RequestService.createRequest(req.body);
    res.status(201).json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


export const listByUser = async (req, res) => {
  try {
    const list = await RequestService.getRequestsByUser(req.params.userId)
    res.status(200).json(list)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

export const updateStatus = async (req, res) => {
  try {
    const updated = await RequestService.updateRequestStatus(req.params.id, req.body.status)
    res.status(200).json(updated)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

export const deleteRequest = async (req, res) => {  
  try {
    const deleted = await RequestService.deleteRequest(req.params.id)
    res.status(200).json(deleted)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}