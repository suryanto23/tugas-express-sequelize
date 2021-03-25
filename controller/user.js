const User = require('../models/User')
const UserInfo = require('../models/UserInfo')

module.exports = {
    getAllUser: async (req,res) => {

     const users = await User.findAll( {
         include: {
             model : UserInfo,
             attributes : ['Fullname' , 'Gender' , 'Age']
         }
        })

        res.json({
            message: "sucsess get all data",
            data: users
        })
    },

    getUserByID : async (req,res) => {

        const user = await User.findOne({
            where : { id : req.params.id },
            include : {
                model : UserInfo,
                attributes : ['Fullname' , 'Gender' , 'Age']
            }
        })

        res.json({
            message: "GET ID sucsess",
            data: user
        })

    },

    addUser : async (req,res) => {

        const newVal = await User.create(req.body)
        console.log("we got something new " ,newVal)

        res.status(200).json({
            message: "POST sucsess",
            data: newVal
        })

    },

    updateUser : async (req,res) => {

        try {
            const idVal = req.params.id
            console.log("id val" ,idVal)
            const newVal = req.body
            console.log("this is newVal" ,newVal)
            const updateVal = await User.update(
                newVal , 
               {where:{id:idVal}}
            )

            console.log("this is updateVal" ,updateVal)
    
            res.status(200).json({
                message: "UPDATE sucsess",
                data: updateVal
            })
        } catch (e) {
            console.log(e)
        }
        
    },

    deleteUser : async (req,res) => {
        try {
            const idVal = req.params.id
            const deleteVal = await User.destroy({
                where:{id:idVal}
            })

            res.status(200).json({
                 message: "DELETE sucsess",
                data: deleteVal
            })
        

        } catch (e) {
            console.log(e)
        }
    }

}