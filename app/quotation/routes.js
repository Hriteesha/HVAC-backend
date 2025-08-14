import express  from "express";
import * as quotationservice from "./controller.js";
import upload from "../middleware/upload.js";

const quotationrouter = express.Router();


quotationrouter.post("/create",upload.none(),quotationservice.create)
quotationrouter.get("/getall",upload.none(),quotationservice.get_all_quotes)
quotationrouter.get("/get/:id",upload.none(),quotationservice.get_quote_byId)
quotationrouter.put("/update/:id",upload.none(),quotationservice.update_quote)  
quotationrouter.delete("/delete/:id",upload.none(),quotationservice.delete_quote)
quotationrouter.put("/restore/:id",upload.none(),quotationservice.restore_quote)

export default quotationrouter