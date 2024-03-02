import express from "express"
import cors from 'cors'
import { connectToPostgreSql } from "./src/configs/db.js"
import customerRouter from "./src/routes/customerRouter.js";

const app=express()
app.use(express.json())
app.use(cors())
connectToPostgreSql()
app.use("/api",customerRouter)
app.listen(4000,()=>{
    console.log("Listening to Port:4000");
})