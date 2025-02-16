const express = require("express")
const userRoute = express.Router();
const AsyncHandler = require("express-async-handler");
const User = require('../models/User')

userRoute.post('/login',
    AsyncHandler(async (req, res) => {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (user && (await user.matchPassword(password))) {
            res.json({
                _id: user.id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: null,
                createdAt: user.createdAt
            })

        } else {
            res.status(401);
            throw new Error('Invalid Email or Password');
        }
    })
);

//Register User route
userRoute.post('/',
    AsyncHandler(async (req, res) => {
        const { name, email, password } = req.body;
        const userExists = await User.findOne({ email });
        if (userExists) {
            res.status(400);
            throw new Error('User Already Exists');
        }else{
            const user = await User.create({
                name,
                email,
                password
            });
            if(user){
                res.status(201).json({
                    _id: user.id,
                    name: user.name,
                    email: user.email,
                    isAdmin: user.isAdmin,
                    token: null,
                    createdAt: user.createdAt
                })
            }else{
                res.status(400);
                throw new Error('Invalid User Data');
            }
        }
    })
);

module.exports = userRoute;