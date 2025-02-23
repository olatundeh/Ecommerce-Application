const express = require("express");
const orderRoute = express.Router();
const AsyncHandler = require("express-async-handler");
const Order = require('../models/Order');
const protect = require('../middleware/Auth');

orderRoute.post('/', protect,
    AsyncHandler(async (req, res) => {
        const { orderItems, shippingAddress, paymentMethod, itemsPrice, taxPrice, shippingPrice, totalPrice, price } = req.body;
        if (orderItems && orderItems.length === 0) {
            res.status(400);
            throw new Error('No Order Items found!');
        } else {
            const order = new Order({
                orderItems,
                user: req.user._id,
                shippingAddress,
                paymentMethod,
                itemsPrice,
                taxPrice,
                shippingPrice,
                totalPrice,
                price
            });
            const createdOrder = await order.save();
            res.status(201).json(createdOrder);
        }
    })
);

module.exports = orderRoute;