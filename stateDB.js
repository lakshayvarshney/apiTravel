require("dotenv").config();
const connectDB = require("./db/connect");
const State = require("./models/state");


const StateJson = require("./states.json");


const start = async ()=>{
    try {
        await connectDB(process.env.MONGODB_URL);
        await State.create(StateJson);
        console.log("success");
    } catch (error) {
        console.log(error);
        
    }
}

start();