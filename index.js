const express = require('express')
const foodRoutes= require('./routes/foodRoutes')
const restaurentRoutes=require('./routes/restaurentRoutes')
const userRoutes=require('./routes/userRoutes')
const cartRoutes= require('./routes/cartRoutes')
const authRoutes=require('./routes/authRoutes')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const cors = require('cors')
const mongoose = require('mongoose');
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.use('/foods', foodRoutes)
app.use('/restaurents', restaurentRoutes)
app.use('/signup', userRoutes)
app.use('/carts', cartRoutes)
app.use('/login',authRoutes)

app.listen(port,() => {
  console.log(`Example app listening on port ${port}`)
})

async function main() {
  await mongoose.connect('mongodb://localhost:27017/cucumber');
}

main().then(()=>console.log("connected successfully")).catch(err => console.log(err));