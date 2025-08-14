import express from "express";
import * as NotificationService from "./controller.js";
import upload from "../middleware/upload.js";


const notificationrouter = express.Router();

notificationrouter.post("/send",upload.none(),NotificationService.send)
notificationrouter.get("/list",upload.none(),NotificationService.list)
notificationrouter.put("/mark/:id",upload.none(),NotificationService.mark)

export default notificationrouter