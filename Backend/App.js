const express = require('express')
const app = express()
const dotenv = require('dotenv')
const path = require('path')
const ConnectDatabase = require('./Config/ConnectDatabase')
const cors = require('cors')
dotenv.config({path: path.join(__dirname,'Config','Config.env')})

const orders = require('./Routes/Orders')
const products = require('./Routes/Product')

ConnectDatabase();

app.use(express.json())
app.use(cors())
app.use('/api/v1/',products)
app.use('/api/v1/',orders)

app.listen(process.env.PORT,() => {
    console.log(`Server listening to port ${process.env.PORT} in ${process.env.NODE_ENV}`)
})