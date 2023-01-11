const mongoose = require("mongoose");

const travelSchema = new mongoose.Schema({
   travelid:{
    type:Number,
    required:true,
   },
   city :{
    type: String,
    required : true,
   },
   numberofdays : {
    type: Number,
    required : true,
   },
   airlinecost : {
    type : Number,
    required : true,
   },
   image:{
    type:String,
    required : true,
   },
   totalcost:{
    type: Number,
    required:true,
   },

 
});

module.exports = mongoose.model('State',travelSchema);




