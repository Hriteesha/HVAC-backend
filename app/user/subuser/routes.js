import express from "express";
import * as subuserservice from "./controller.js";
import upload from '../../middleware/upload.js';

const subuserrouter = express.Router();

subuserrouter.post("/create",upload.none(),subuserservice.addSubUser)
subuserrouter.get("/getall",upload.none(),subuserservice.listSubUsers)
subuserrouter.get("/get/:id",upload.none(),subuserservice.getSingleSubUser)
subuserrouter.put("/update/:id",upload.none(),subuserservice.editSubUser)
subuserrouter.patch("/update/:id",upload.none(),subuserservice.editSubUser)
subuserrouter.delete("/delete/:id",upload.none(),subuserservice.removeSubUser)
export default subuserrouter