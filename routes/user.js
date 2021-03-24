const express = require('express');
const router = express.Router();
const {getAllUser , getUserByID} = require('../controller/user')

router.get("/", getAllUser)
router.get("/:id", getUserByID)

module.exports = router
