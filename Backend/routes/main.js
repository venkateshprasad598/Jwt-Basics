const express = require("express")
const router = express.Router()

router.get("/dashboard", (req, res) => {
    const luckyNumber = Math.floor(Math.random() * 100)

    res.status(200).json({
      msg: `Hello, Venkatesh`,
      secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
    })
})

router.post("/login", (req, res) => {
    res.send("Fake/ROUTES")
})
module.exports = router