require("dotenv").config();

const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const connectDB = require("./db/connect");

const cors = require("cors");



app.use(cors());


const PORT = process.env.PORT || 5000;

const states_routes = require("./routes/states")

app.get("/",(req,res)=>{
      res.send("hi i am live");
});

app.use(express.static('public'));

app.use("/api/states",states_routes);


const start = async()=>{
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT,()=>{
            console.log(`${PORT} yes i am connected`);
        })
    } catch (error) {
        console.log(error);
    }
}



start();