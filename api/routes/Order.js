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

//order payment route
orderRoute.put('/:id/payment', protect,
    AsyncHandler(async (req, res) => {
        const order = await Order.findById(req.params.id);
        if (order) {
            order.isPaid = true;
            order.paidAt = Date.now();
            order.paymentResult = {
                id: req.body.id,
                status: req.body.status,
                update_time: req.body.update_time,
                email_address: req.body.email_address
            }
            const updatedOrder = await order.save();
            res.status(200).json(updatedOrder);
        } else {
            res.status(404);
            throw new Error('Order Not Found');
        }
    })
);

module.exports = orderRoute;