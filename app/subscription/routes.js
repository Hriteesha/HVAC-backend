import express from "express";
import *as Admincontroller from "./admin_controller.js"
import *as Customercontroller from "./customer_controller.js"
import upload from "../middleware/upload.js"

const router = express.Router();

router.post("/create",upload.none(),Admincontroller.create_package)
router.get("/getall",upload.none(),Admincontroller.get_all_packages)
router.get("/get/:id",upload.none(),Admincontroller.get_package_byId)
router.put("/update/:id",upload.none(),Admincontroller.update_package)
router.patch("/update/:id",upload.none(),Admincontroller.update_package)
router.delete("/delete/:id",upload.none(),Admincontroller.delete_package)
router.put("/restore/:id",upload.none(),Admincontroller.restore_package)

router.post("/buypackages",upload.none(),Customercontroller.buy_package)
router.post("/renewpackages/:id",upload.none(),Customercontroller.renew_package)
router.get("/getsubcriptions",upload.none(),Customercontroller.get_subcriptions)

export default router