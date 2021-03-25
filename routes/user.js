const express = require('express');
const router = express.Router();
const {getAllUser , getUserByID , addUser , updateUser , deleteUser} = require('../controller/user')

router.get("/", getAllUser)
router.get("/:id", getUserByID)
router.post("/", addUser)
router.put("/:id", updateUser)
router.delete("/:id", deleteUser)



module.exports = router
