const UserInfo = require('../models/UserInfo')

module.exports = {
    getAllUserInfo: async (req,res) => {
        const users = await UserInfo.findAll()

        res.json({
            message: "GET all User Info",
            data: users
        })
    },

    getUserInfoByID : async (req,res) => {

        const user = await UserInfo.findOne({
            where : { id : req.params.id }
        })

        res.json({
            message: "GET User Info ID",
            data: user
        })

    },



}