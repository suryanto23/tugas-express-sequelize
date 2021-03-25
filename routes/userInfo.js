const express = require('express');
const router = express.Router();
const {getAllUserInfo , getUserInfoByID} = require('../controller/userInfo')

router.get("/", getAllUserInfo)
router.get("/:id", getUserInfoByID)

module.exports = router
