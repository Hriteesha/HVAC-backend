import {
  createSubUser,
  getAllSubUsers,
  getSubUserById,
  updateSubUser,
  deleteSubUser
} from "./service.js";

export const addSubUser = async (req, res) => {
  try {
    const subuser = await createSubUser(req.body);
    res.status(201).json({ message: "Sub User created", data: subuser });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const listSubUsers = async (req, res) => {
  try {
    const { business_user_id } = req.query;
    const subusers = await getAllSubUsers(business_user_id);
    res.status(200).json(subusers);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getSingleSubUser = async (req, res) => {
  try {
    const subuser = await getSubUserById(req.params.id);
    res.status(200).json(subuser);
  } catch (err) {
    res.status(404).json({ error: "Sub User not found" });
  }
};

export const editSubUser = async (req, res) => {
  try {
    const subuser = await updateSubUser(req.params.id, req.body);
    res.status(200).json({ message: "Updated", data: subuser });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const removeSubUser = async (req, res) => {
  try {
    const subuser = await deleteSubUser(req.params.id);
    res.status(200).json({ message: "Deleted", data: subuser });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
