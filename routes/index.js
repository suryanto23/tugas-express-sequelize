const express = require('express');
const router = express();

const userRouter = require("./user")

router.get("/" , (req,res)=>{
    res.json({
        message : "welcome to my app"
    })
})

router.use("/users" , userRouter)

module.exports = router