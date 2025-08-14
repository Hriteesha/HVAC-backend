import * as QuotationService from './service.js'

export const create = async (req, res) => {
  try {
    const quote = await QuotationService.createQuotation(req.body)
    res.status(201).json(quote)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

export const get_all_quotes = async(req,res)=>{
  try {
    const quotes = await QuotationService.getAllQuotation()
    res.status(200).json(quotes)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

export const update_quote = async (req, res) => {
  try {
    const updated = await QuotationService.updateStatus(req.params.id, req.body.status)
    res.status(200).json(updated)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

export const get_quote_byId = async (req, res) => {
  try {
    const quote = await QuotationService.getQuotation(req.params.id)
    res.status(200).json(quote)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

export const  delete_quote = async (req, res) => {
  try {
    const deleted = await QuotationService.deleteQuotation(req.params.id)
    res.status(200).json(deleted)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}
export const  restore_quote = async (req, res) => {
  try {
    const restored = await QuotationService.restoreQuotation(req.params.id)
    res.status(200).json(restored)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}