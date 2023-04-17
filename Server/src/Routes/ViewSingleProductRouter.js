const express = require('express')
const  ViewSingleProductRouter = express.Router()
const addproduct = require('../Models/addproduct')




ViewSingleProductRouter.get('/viewsingleproduct/:id', (req, res) => { 
    const id = req.params.id
    console.log("id", id);  
    addproduct.findOne({ _id: id }).then((data) => {
        return res.status(200).json({
            success:true,
            error:false,
            data:data,
        })
    })
})




module.exports = ViewSingleProductRouter;