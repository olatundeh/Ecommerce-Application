const express = require("express");
const app = express();

const dotenv = require("dotenv");
const products = require("./data/Products");
dotenv.config();
const PORT = process.env.PORT
const mongoose = require("mongoose")

//connect db
mongoose.connect(process.env.MONGOOSEDB_URL).then(()=>console.log("db connected")).then((error)=>{
    error;
})

//harounola
//SZAN2QbVEJjJXiaR
//mongodb+srv://harounola:SZAN2QbVEJjJXiaR@cluster0.yulhc.mongodb.net/REACT-NODE-APP

const databaseSeeder = require('./databaseSeeder');
const userRoute = require('./routes/User');
app.use(express.json())

//database seeder routes
app.use('/api/seed', databaseSeeder)

//routes for users
//api/users/login
app.use('/api/users', userRoute)

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
});

//api product test route
// app.get("/api/products", (req, res)=>{
//     res.json(products);
// });

// app.get("/api/products/:id", (req, res)=>{
//     const product = products.find((product)=>product.id === req.params.id)
//     res.json(product);
// });