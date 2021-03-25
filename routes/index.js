const express = require('express');
const router = express();

// const userInfoRouter = require('./data')
const userRouter = require("./user")
const userInfoRouter = require('./userInfo')


router.get("/" , (req,res)=>{
    res.send(
       `
       <div style="margin-top:5%;">
        <h1 style="font-family: Arial; margin-left:40%;">Welcome to My Database</h1><br>
        <p style="margin-left:42%;">Simply browse data by click or adding to URL : </p>
            <ul style="margin-left:43%;">
                <li><p><a href="https://suryanto-sequelize.herokuapp.com/users">User </a> : /users</p></li>
                <li><p>User ID : /users/(id)</p></li>
                <li><p><a href="https://suryanto-sequelize.herokuapp.com/users/info">User Info</a> : /users/info</p></li>
                <li><p>User Info ID : /users/info/(id)</p></li>
            </ul>
        </div>
       `
    )
})

// router.use("/data" , dataRouter);
router.use("/users/info" , userInfoRouter );
router.use("/users" , userRouter );

module.exports = router