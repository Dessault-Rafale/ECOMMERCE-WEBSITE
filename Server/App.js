const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const Registration = require('./src/Routes/RegisterRouter')
const Login = require('./src/Routes/LoginRouter')
const AddproductRouter = require('./src/Routes/AddproductRouter')
const ViewproductRouter = require('./src/Routes/ViewproductRouter')
const CategoryRouter = require('./src/Routes/CategoryRouter')
const ViewSingleProductRouter = require('./src/Routes/ViewSingleProductRouter')
const CartRouter = require('./src/Routes/CartRouter')
const  CartremoveRouter =require('./src/Routes/CartremoveRouter')






app.use(express.static('./public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(bodyParser.json())
app.use(cors())



app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});


app.use("/register", Registration)
app.use("/login", Login)
app.use('/Addproduct', AddproductRouter)
app.use('/view', ViewproductRouter)
app.use('/Category',CategoryRouter)
app.use('/viewsingleproduct', ViewSingleProductRouter)
app.use('/cart', CartRouter)
app.use('/cartremove',CartremoveRouter)









app.listen(2000, () => {
  console.log("Server Started at http://localhost:2000");
})