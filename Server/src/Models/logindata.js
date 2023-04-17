const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://jinsjoseph:8943480915@cluster0.lnb8wip.mongodb.net/Shopping-Site?retryWrites=true&w=majority')
const Schema=mongoose.Schema 

const LoginSchema=new Schema({
    username:String,
    password:String
})

var Logindata=mongoose.model('login_tb',LoginSchema)
module.exports=Logindata;