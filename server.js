const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')


const userRouter = require('./app/routes/user.route')
const productRouter=require('./app/routes/product.route')
const cartRouter = require('./app/routes/cart.router')
const addressRouter = require('./app/routes/address.route')
const orderRouter = require('./app/routes/order.route')
const staticData = require('./config/database.config.json')
const logger = require('./config/logger.config')

const app = express();
var corsOptions = {
    origin: 'http://localhost:3000',
    // credentials:true,  
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions))
app.use(express.urlencoded({
    extended: false
}))
app.use(express.json())
app.use("/user", userRouter)
app.use("/product",productRouter)
app.use("/cart", cartRouter)
app.use("/address",addressRouter)
app.use("/order",orderRouter)

// Connecting to the database
const dbConnect = async() => {
    try {
        await mongoose.connect(staticData.url, {
            useNewUrlParser: true
        });
    } catch (err) {
        logger.error("could not connect to DB");
        process.exit();
    }
    logger.info("database connected");
}

app.listen(5000, () => {
    dbConnect();
    console.log("server started");
});