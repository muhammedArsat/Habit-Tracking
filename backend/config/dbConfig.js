const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async() => {

    try{

        await mongoose.connect(process.env.DB_URL);
        console.log("Database is Connected Successfully");

    }catch(error){
        console.log(error.message);
        process.exit(1);
    }
};

module.exports = connectDB;