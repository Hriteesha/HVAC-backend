import Request from './model.js'
import mongoose from 'mongoose';

export const createRequest = async (data) => {
  return await Request.create(data);
};
export const getRequestsByUser = async (userId) => {
   const queryId = mongoose.isValidObjectId(userId)
    ? new mongoose.Types.ObjectId(userId)
    : userId;

  return await Request.find({ userId: queryId });
};
export const updateRequestStatus = async (id, status) => {
  return await Request.findByIdAndUpdate(id, { status }, { new: true });
};

export const deleteRequest = async (id) => {
  return await Request.findByIdAndDelete(id);
}
