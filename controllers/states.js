const State = require("../models/state");


const getAllState = async (req,res)=>{
    const myData = await State.find({}).sort("travelid");
       res.status(200).json({myData});
};




module.exports = {getAllState}; 