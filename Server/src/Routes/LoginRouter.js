const bcrypt = require('bcrypt')
const express = require('express')
const Logindata = require('../Models/logindata')
const loginRouter = express.Router()
const login = require('../Models/logindata')
const Registerdata = require('../Models/registerdata')
const register = require('../Models/registerdata')



loginRouter.post('/loginpage', async (req, res) => {
    try {
        console.log("logindtaa",req.body.Email);
        const oldemail = await Logindata.findOne({ username: req.body.Email })
        console.log("oldemail",oldemail);
        if (!oldemail) {
            return res.status(400).json({
                success: false,
                message: "user doesnot exist"
            })
        }

        const thisPasswordiscorrect = await bcrypt.compare(req.body.password, oldemail.password)
        if (thisPasswordiscorrect) {
            return res.status(200).json({
                message: "login success",
                values: oldemail,
                success: true,
                errror: false
            })
        }
    
    else {
        return res.status(400).json({
            success:false,
            message: "password incorrect"
            
        })
    }
}
catch{
    return res.status(400).json({
        success:false,
        message: "user not found"
    })
}
})
module.exports = loginRouter
