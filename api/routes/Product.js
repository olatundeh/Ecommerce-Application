const express = require("express")
const productRoute = express.Router();
const AsyncHandler = require("express-async-handler");  // This is a middleware that will handle the async functions
const Product = require('../models/Product');
const protect = require('../middleware/Auth');  // This is a middleware that will protect the routes
//
// Get all products route
productRoute.get('/',
    AsyncHandler(async (req, res) => {
        const products = await Product.find({});
        res.json(products);
    })
);

productRoute.get('/:id',
    AsyncHandler(async (req, res) => {
        const product = await Product.findById(req.params.id);
        if (product) {
            res.json(product);
        } else {
            res.status(404);
            throw new Error('Product Not Found');
        }
    })
);

module.exports = productRoute;