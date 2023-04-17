const express = require('express')
const  ViewproductRouter = express.Router()
const addproduct = require('../Models/addproduct')



ViewproductRouter.get('/view-products',(req,res) => {
    const id = req.params.category
    console.log("id", id);
     addproduct.find()
        .then(function(data){
            if(data == 0){
            return res.status(401).json({
                  success:false,
                  error:true,
                  message:"No item Found!"
        })
    }
        else {
            return res.status(200).json({
                success:true,
                error:false,
                data:data,
            })
        }
    })
    
})



ViewproductRouter.get('/view-products1',(req,res) => {
    addproduct.find({ category: "Grocery" })
       .then(function(data){
           if(data == 0){
           return res.status(401).json({
                 success:false,
                 error:true,
                 message:"No item Found!"
       })
   }
       else {
           return res.status(200).json({
               success:true,
               error:false,
               data:data,
           })
       }
   })
   
})


ViewproductRouter.get('/view-products2',(req,res) => {
    addproduct.find({ category: "Electronics" })
       .then(function(data){
           if(data == 0){
           return res.status(401).json({
                 success:false,
                 error:true,
                 message:"No item Found!"
       })
   }
       else {
           return res.status(200).json({
               success:true,
               error:false,
               data:data,
           })
       }
   })
   
})


ViewproductRouter.get('/view-products3',(req,res) => {
    addproduct.find({ category: "Travels" })
       .then(function(data){
           if(data == 0){
           return res.status(401).json({
                 success:false,
                 error:true,
                 message:"No item Found!"
       })
   }
       else {
           return res.status(200).json({
               success:true,
               error:false,
               data:data,
           })
       }
   })
   
})


ViewproductRouter.get('/view-products4',(req,res) => {
    addproduct.find({ category: "Fashions" })
       .then(function(data){
           if(data == 0){
           return res.status(401).json({
                 success:false,
                 error:true,
                 message:"No item Found!"
       })
   }
       else {
           return res.status(200).json({
               success:true,
               error:false,
               data:data,
           })
       }
   })
   
})



ViewproductRouter.get('/view-products5',(req,res) => {
    addproduct.find({ category: "Mobiles" })
       .then(function(data){
           if(data == 0){
           return res.status(401).json({
                 success:false,
                 error:true,
                 message:"No item Found!"
       })
   }
       else {
           return res.status(200).json({
               success:true,
               error:false,
               data:data,
           })
       }
   })
   
})




module.exports = ViewproductRouter