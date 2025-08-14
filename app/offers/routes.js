import express from "express";
import { getOffers, createOffer } from "./controller.js";

const offerrouter = express.Router();

offerrouter.get("/getall", getOffers);
offerrouter.post("/create", createOffer);

export default offerrouter;
