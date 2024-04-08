import express from "express"
import { getMessages, sendMessage } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";


const router=express.Router();

router.get("/:id", protectRoute,getMessages);//to get message between the id and current user which is logged in

router.post("/send/:id",protectRoute,sendMessage)



export default router;