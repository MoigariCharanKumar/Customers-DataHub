import express from 'express'
import {  getAllRecords } from '../controllers/customer.js';
const customerRouter=express.Router()
customerRouter.get("/getAllRecords",getAllRecords)
export  default customerRouter;