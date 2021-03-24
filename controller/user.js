const User = require('../models/User')

module.exports = {
    getAllUser: async (req,res) => {
        const users = await User.findAll()

        res.json({
            message: "sucsess get all data",
            data: users
        })
    },

    getUserByID : (req,res) => {

    },



}