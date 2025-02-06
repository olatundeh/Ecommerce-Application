const express = require("express")
const userRoute =  express.Router();

const AsyncHandler = require("express-async-handler")
const User = require('../models/User')
userRoute.post("", 
    AsyncHandler(async (req, res)=> {
        const { email, password} = req.body;
    })
);