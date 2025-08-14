import Quotation from './model.js'

export const createQuotation = async (data) => await Quotation.create(data)
export const getQuotationByRequest = async (reqId) => await Quotation.find({ serviceRequestId: reqId })
export const updateStatus = async (id, status) => await Quotation.findByIdAndUpdate(id, { status }, { new: true })
export const getQuotationById = async (id) => await Quotation.findById(id)
export const getAllQuotation = async () => await Quotation.find()
export const deleteQuotation = async (id) => await Quotation.findByIdAndDelete(id)