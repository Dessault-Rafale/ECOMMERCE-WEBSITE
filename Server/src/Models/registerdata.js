const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://jinsjoseph:8943480915@cluster0.lnb8wip.mongodb.net/Shopping-Site?retryWrites=true&w=majority')
const Schema=mongoose.Schema 

const RegisterSchema=new Schema({
    FirstName:String,
    LastName:String,
    Phone:String,
    login_id:{type: Schema.Types.ObjectId, ref: "login_tb"}

})

var Registerdata=mongoose.model('register_tb',RegisterSchema)
module.exports=Registerdata;