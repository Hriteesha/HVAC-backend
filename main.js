import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config()
import { connected_to_db } from "./config/db.js";

import Adminrouter from "./app/admin/routes.js"
import authrouter from "./app/user/routes.js"
import subcriptiptionrouter  from "./app/subscription/routes.js"
import Techniciansrouter from "./app/technician/routes.js"
import requestrouter from "./app/request/routes.js"
import notificationrouter from "./app/notification/routes.js"
import quotationrouter from "./app/quotation/routes.js"
import otprouter from "./app/user/otp/routes.js";
import passwordrouter from "./app/user/password/routes.js"
import profilerouter from "./app/user/profile/routes.js"
import appointmentrouter from "./app/user/appointments/routes.js"
import paymentrouter from  "./app/payment/routes.js";
import offerrouter from "./app/offers/routes.js";
import subuserrouter from "./app/user/subuser/routes.js";
import cuponrouter from "./app/cupon/routes.js";
import servicerouter from "./app/service/routes.js";
import addressRouter from "./app/address/routes.js";
import bookingrouter from "./app/bookingreview/routes.js";


const app= express()
const port = process.env.PORT ||8000;

connected_to_db()

app.use(cors({
  origin: 'http://localhost:3000',   // your frontend URL
  methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json())
app.use(express.urlencoded({extended: true}))


// app.use((req, res, next) => {
//   console.log('Method:', req.method);
//   console.log('URL:', req.url);
//   console.log('Headers:', req.headers);
//   console.log('Body:', req.body);
//   next();
// });


 app.use("/admin",Adminrouter)
 app.use("/auth",authrouter)
 app.use("/subscription",subcriptiptionrouter)
 app.use("/technician",Techniciansrouter)
//  app.use("/content",contentrouter)
 app.use("/request",requestrouter)
//  app.use("/tracking",trackingrouter)
//  app.use("/calendar",calendarrouter)
 app.use("/notification",notificationrouter)
 app.use("/quotation",quotationrouter)
 app.use("/otp",otprouter)
 app.use("/password",passwordrouter)
 app.use("/profile",profilerouter)
 app.use("/appointment",appointmentrouter)
 app.use("/payment",paymentrouter)
 app.use("/offers",offerrouter)
 app.use("/subuser",subuserrouter)
 app.use("/cupon",cuponrouter)
 app.use("/service",servicerouter)
 app.use("/address",addressRouter);
 app.use("/booking",bookingrouter);



app.get("/", (req, res) => {
    res.send("HVAC BACKEND PORT 8000 RUNNING SUCCESSFULLY");
    console.log("HVAC BACKEND PORT 8000 RUNNING SUCCESSFULLY");
})

app.listen(port,() => {
    console.log(`HVAC BACKEND PORT ${port} RUNNING SUCCESSFULLY`);
})


