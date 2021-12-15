const ProductService = require('../services/product.service')

class ProductController {
    async createProduct(req, res) {

        try {
            const data = await ProductService.createProduct(req.body)
            return res.status(200).send(data)
        } catch (e) {
            return res.status(500).send({
                message: err.message || "Some error occurred while creating the user.",
            });
        }
    }

    async deleteProduct(req, res) {

        try {
            const data = await ProductService.deleteProduct(req.body)
            return res.status(200).send(data)
        } catch (e) {
            return res.status(500).send({
                message: err.message || "Some error occurred while creating the user.",
            });
        }
    }
    async updateProduct(req, res) {

        try {
            const data = await ProductService.updateProduct(req.body)
            return res.status(200).send(data)
        } catch (e) {
            return res.status(500).send({
                message: err.message || "Some error occurred while creating the user.",
            });
        }
    }
    async getProduct(req, res) {

        console.log(JSON.stringify(req.body));
        try {
            const data = await ProductService.getProduct(req.body)
            // console.log("data " + [...data].slice(req.body.start, req.body.end).sort(function (a, b) {
            //     return a.price - b.price;
            // }));
            // if (req.body.sortType === 'low')

            //     data = [...data].slice(req.body.start, req.body.end).sort(function (a, b) {
            //         return a.price - b.price;
            //     })
            // else
            //     data = [...data].slice(req.body.start, req.body.end).sort(function (a, b) {
            //         return b.price - a.price;
            //     })
            return res.status(200).send([...data].slice(req.body.start+4, req.body.end+4))

        } catch (e) {
            return res.status(500).send({
                message: err.message || "Some error occurred while creating the user.",
            });
        }
    }
    async getOneProduct(req, res) {
        // var email = utils.verifyUser(req.body.token);
        // if (!email)
        //     return res.status(401).send({ "message": "please login first" })

        try {
            const data = await ProductService.getOneProduct(req.body)
            console.log("data " + JSON.stringify(data));
            return res.status(200).send(data)//[... data].slice(req.body.index*12,req.body.index*12+12))//.orderBy('price','asc'))
        } catch (e) {
            return res.status(500).send({
                message: err.message || "Some error occurred while creating the user.",
            });
        }
    }
}
module.exports = new ProductController();