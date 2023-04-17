const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://jinsjoseph:8943480915@cluster0.lnb8wip.mongodb.net/Shopping-Site?retryWrites=true&w=majority')
const Schema = mongoose.Schema;


const addproductschema = new Schema({
    product_name:{type: String,required:true},
    product_image:{type:String,required:true},
    price:{type:String,required:true},
    title:{type:String,required:true},
    description:{type:String,required:true},
    quantity:{type:String,required:true},
    category:{type:String,required:true},


},{strict:false});
var addproduct=mongoose.model('addproduct_tb',addproductschema);
module.exports=addproduct;