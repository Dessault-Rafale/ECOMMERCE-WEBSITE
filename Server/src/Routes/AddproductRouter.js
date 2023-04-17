const express = require('express')
const  AddproductRouter = express.Router()
const addproduct = require('../Models/addproduct')
const multer = require("multer")


var storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,"../Client/public/images")
    },
    filename: function(req,file,cb){
        cb(null,req.body.name)
    }
})

var  upload = multer({ storage: storage})

AddproductRouter.post('/upload',upload.single("file"),(req,res) =>{
    return res.json("file uploaded")
})


AddproductRouter.post('/add-product' ,function (req, res) {
    console.log("req.body=====>",req.body);
    var item = {
        product_name: req.body.productname,
        product_image: req.body.image,
        price: req.body.price,
        title: req.body.title,
        description: req.body.description,
        quantity: req.body.quantity,
        category: req.body.category
        
    }
    console.log("itemmmmm==============>",item);
    addproduct(item).save().then((data) => {
        console.log(data);
        if (data) {
            return res.status(200).json({
                details: data,
                success: true,
                error: false,
                message:" product added"
            })

        }
    })
})



module.exports = AddproductRouter