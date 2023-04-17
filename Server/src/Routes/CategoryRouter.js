const express = require('express')
const   CategoryRouter = express.Router()
// const categorydata = require('../Models/categorydata')
const addproduct = require('../Models/addproduct')



CategoryRouter.get('/view/:category', (req, res) => { 
    const id = req.params.category
    console.log("id", id);  
    addproduct.find({ category: id }).then((data) => {
        return res.status(200).json({
            success:true,
            error:false,
            data:data,
        })
    })
})




module.exports = CategoryRouter;