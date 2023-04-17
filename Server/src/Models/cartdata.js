const mongoose=require('mongoose');
 mongoose.connect('mongodb+srv://jinsjoseph:8943480915@cluster0.lnb8wip.mongodb.net/Shopping-Site?retryWrites=true&w=majority')
const Schema = mongoose.Schema;


const cartSchema = new Schema({
    product_id:{type:Schema.Types.ObjectId,ref:"product_tb"},
    login_id:{type:Schema.Types.ObjectId,ref:"login_tb"},
    count:{type:String,required:true},

});
var cartdata=mongoose.model('cart_tb',cartSchema);
module.exports=cartdata;