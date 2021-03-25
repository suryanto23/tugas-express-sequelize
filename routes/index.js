const express = require('express');
const router = express();

// const userInfoRouter = require('./data')
const userRouter = require("./user")
const userInfoRouter = require('./userInfo')


router.get("/" , (req,res)=>{
    res.json({
        message : "welcome to my app"
    })
})

// router.use("/data" , dataRouter);
router.use("/users" , userRouter );
router.use("/info" , userInfoRouter );

module.exports = router