const express = require("express")
const router = express.Router()
const jwt = require("jsonwebtoken")
// require("dotenv").config()

router.get("/dashboard", (req, res) => {
    const luckyNumber = Math.floor(Math.random() * 100)

    res.status(200).json({
      msg: `Hello, Venkatesh`,
      secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
    })
})

router.post("/login",async (req, res) => {
  const {username, password} = req.body

// We can Apply here Mongoose validation too in the schema
  if(!username || !password){
    throw new Error("Enter All Detailss")
  }

  //Normally Given by a DB
  const id = new Date().getDate()

// try to keep payload small, better experience for user
  // just for demo, in production use long, complex and unguessable string value!!!!!!!!!

  // whatever we are writing inside sign is an payload
  const token = await jwt.sign({id , username}, process.env.JWT_SECRET, {expiresIn : "30d"})
 
    res.status(200).json({msg : "User Registered", token})
})
module.exports = router