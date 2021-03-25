const UserInfo = require('../models/UserInfo')

module.exports = {
    getAllUserInfo: async (req,res) => {

        try {
        const users = await UserInfo.findAll()

        res.json({
            message: "GET all User Info",
            data: users
        })
            
        } catch (e) {
            console.log(e)
            
        }

     
    },

    getUserInfoByID : async (req,res) => {


        try {
        const user = await UserInfo.findOne({
            where : { id : req.params.id }
        })

        res.json({
            message: "GET User Info ID",
            data: user
        })
            
        } catch (e) {
            console.log(e)
            
        }

    },

}