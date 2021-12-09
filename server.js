const express = require('express');
const mongoose = require('mongoose')
const app = express();

const userRouter = require('./app/routes/user.route')
const productRouter=require('./app/routes/product.route')
const staticData = require('./config/database.config.json')

app.use(express.urlencoded({
    extended: false
}))
app.use(express.json())
app.use("/user", userRouter)
app.use("/product",productRouter)

// Connecting to the database
const dbConnect = async() => {
    try {
        await mongoose.connect(staticData.url, {
            useNewUrlParser: true
        });
    } catch (err) {
        console.log('Could not connect to the database. Exiting now...', err);
        // logger.error("could not connect to DB");
        process.exit();
    }

    console.log("Successfully connected to the database");
    // logger.info("database connected");
}

app.listen(6000, () => {
    dbConnect();
    console.log("server started");
});