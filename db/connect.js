const mongoose = require("mongoose");

mongoose.set('strictQuery', false);



const connectDB = (uri)=>{
    console.log("connect db")
    return mongoose.connect(uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

module.exports = connectDB;