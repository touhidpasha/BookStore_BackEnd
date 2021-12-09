// const fs = require('fs');
// const csv = require('csv-parser');

const ProductModel = require("../../models/product.model")


const csvToJson = require('csvtojson');

const processRecipients = async () => {
    const row = await csvToJson({
        trim: true
    }).fromFile('./books_data - books_data.csv');

    // Code executes after recipients are fully loaded.
    row.forEach( async (info) => {
        // console.log("Name is: "? + info.author + " and title is: " + info.title);

        console.log( await ProductModel.createProduct({
            author: info.author,
            title: info.title,
            image: info.image,
            basePrice: info.price,
            description: info.description
        }))

    });
}
processRecipients()