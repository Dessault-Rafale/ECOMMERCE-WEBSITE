const bcrypt = require('bcrypt')
const express = require('express')
const RegisterRouter = express.Router()
const login = require('../Models/logindata')
const register = require('../Models/registerdata')


RegisterRouter.post('/save-register', async(req, res) => {
    console.log("request=====>",req);
    try { 
        bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
            if (err) {
                return res.status(400).json({
                    success: false,
                    error: true,
                    message: 'password hashing error'
                })
            }
    
            let logindata = {
                username: req.body.email,
                password: hashedPass,
            }
            console.log("logindata",logindata);
    
            login.findOne({ username: req.body.email })
                .then(username => {
                    if (username) {
                        return res.status(400).json({
                            success: false,
                            error: true,
                            message: 'email already exist!'
                        })
                    }
    
    
                    else {
                        var item = login(logindata)
                        item.save()
                        .then((loginvalue) => {
                                console.log("loginvalue====>",loginvalue);
                                        var id = loginvalue._id
                                        let registerdata = {
                                            FirstName: req.body.first,
                                            LastName: req.body.last,
                                            Phone:req.body.phone,
                                            login_id: id
    
                                        }
    
                                        register.findOne({ Phone: registerdata.Phone })
                                            .then((mobile) => {
                                                console.log("mobile",mobile);
                                                if (!mobile) {
                                                    var register_item = register(registerdata)
                                                    register_item.save()
                                                        .then((data) => {
                                                            
                                                                res.json({
                                                                    success:true,
                                                                    error:false,
                                                                    message:"registration success"
                                                                })
                                                                                                                    // res.status(200).json({
                                                            //     success: true,
                                                            //     error: false,
                                                            //     message: 'registration success!'
                                                            // })
                                                        })
                                                }
                                                else {
                                                    console.log("id",id)
                                                    login.deleteOne({ _id: id })
                                                        .then(() => {
                                                            res.status(401).json({
                                                                success: false,
                                                                error: true,
                                                                message: 'mobile number is already registered with us!'
                                                            })
                                                        })
                                                }
                                            })
                                    
                            })
                    }
    
    
    
    
    
                })
    
    
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: true,
            message: 'password hashing error'
        })
    }
    
})

module.exports = RegisterRouter


