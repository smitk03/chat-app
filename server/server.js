import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { app,server } from "./socket/socket.js";


import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import userRoutes from "./routes/user.routes.js"
import connectDB from "./db/connect.js";

const __dirname=path.resolve();


dotenv.config();
const PORT=process.env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);

app.use(express.static(path.join(__dirname,"/client/dist")))

app.get("*", (req,res)=> {
    res.sendFile(path.join(__dirname,"client","dist","index.html"))
})



server.listen(PORT,()=>{ 
    connectDB();
    console.log(`server running on port  ${PORT}`);


});