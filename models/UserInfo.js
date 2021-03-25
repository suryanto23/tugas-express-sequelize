const {Sequelize , DataTypes} = require('sequelize');
const sequelize = require('../config/db');

const UserInfo = sequelize.define('userInfo' ,  {

        // userID : DataTypes.INTEGER,
        Fullname: DataTypes.STRING,
        Gender: DataTypes.STRING,
        Age: DataTypes.TINYINT,
        Address: DataTypes.STRING 
    }, {
        freezeTableName : true,
        timestamps:false
    }
)

module.exports = UserInfo