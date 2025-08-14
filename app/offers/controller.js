
import * as OfferService from "./service.js";

export const createOffer = async (req, res) => {
  try {
    const offer = await OfferService.create_offer(req.body);
    console.log(req.body);
    res.status(201).json({ data: offer });
  } catch (err) {
    res.status(500).json({
      message: "Failed to create offer",
      error: err.message,
    });
  }
};

export const getOffers = async (req, res) => {
  try {
    const offers = await OfferService.getAll();
    res.status(200).json({ data: offers });
  } catch (err) {
    res.status(500).json({
      
      message: "Failed to fetch offers",
      error: err.message,
    });
  }
};
