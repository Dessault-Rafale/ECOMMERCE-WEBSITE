const express = require('express')
const CartRouter = express.Router()
const Cart = require('../Models/cartdata')
const objectId = require('mongodb').ObjectId

CartRouter.post('/add-cart', function (req, res) {
    console.log(req.body);
    var item = {
        product_id: req.body.product_id,
        login_id: req.body.user_id,
        count: 1,
    }
    console.log(item);
    Cart(item).save().then((data) => {
        console.log(data);
        if (data) {
            return res.status(200).json({
                details: data,
                success: true,
                error: false,
                message: "added to cart"
            })

        }
    })
})



CartRouter.get('/view-cart/:id', (req, res) => {
    const id = req.params.id
    console.log("id", id);
    Cart.aggregate([
        {
            '$lookup': {
                'from': 'addproduct_tbs',
                'localField': 'product_id',
                'foreignField': '_id',
                'as': 'products'
            }
        },
        {
            "$unwind": "$products"
        },
        {
            "$match": {
                "login_id": new objectId(id)
            }
        },
        {
            '$group': {
                "_id": "$_id",
                "product_name": { "$first": "$products.product_name" },
                "product_image": { "$first": "$products.product_image" },
                "price": { "$first": "$products.price" },
                "description": { "$first": "$products.description" },
                "title": { "$first": "$products.title" }, 
                "quantity": { "$first": "$products.quantity" },
                "count": { "$first": "$count" },

            }
        }
    ]
    ).then((data) => {

        return res.status(200).json({
            success: true,
            error: false,
            data: data,

        })
    })
})


module.exports = CartRouter