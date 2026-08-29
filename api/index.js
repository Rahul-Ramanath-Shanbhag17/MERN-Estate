import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import dns from "dns";
import userRoutes from "./routes/user.route.js";

dns.setServers(["8.8.8.8", "8.8.4.4"]);

dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Connected to MongoDB");
}).catch((err)=>{
    console.log(err);
} )  

const app=express();

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})

app.use('/api/user',userRoutes)