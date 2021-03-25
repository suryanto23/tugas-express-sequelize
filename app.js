const express = require('express');
const app = express();
const cors = require('cors');
const User = require('./models/User');
const UserInfo = require('./models/UserInfo');
const sequelize = require('./config/db');
const routes = require("./routes");

const PORT = process.env.PORT || 3000

// CORS : open all public URL accsess
app.use(cors())

// Hello machine, We are Express
app.use(express.json())

// Initiating routes ..?
app.use(routes)

async function testConnection() {

    try {
        // Initiating database from db.js
        await sequelize.authenticate();
        // console log mark if the process above has pass
        console.log('Connection has been established successfully.');

        // Initiating model from User.js (user model)
        // Set model type as Alter
        await User.sync({ alter: true });
        await UserInfo.sync({ alter : true });
        // console log mark if the process above has pass
        console.log("All models were synchronized successfully.");

    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

}

testConnection()

// This function will triggered first if connection sucsess 
app.listen(PORT , ()=>{
    console.log("Trigerring server on port" ,PORT)
})




