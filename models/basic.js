const mongoose = require("mongoose");


const hospitalSchema = new mongoose.Schema({
    username:{type:Number},
    Total_Patients:{type:Number},
    Totel_Beds:{type:Number},
    Occupied_Beds:{type:Number},
    Empty_Beds:{type:Number},
    Oxygen_Availability:{type:Number},
    Medicine_Status:{type:String}

}, {collection:"HospitalBasicDetails"})

const hospitaldetails = new mongoose.model("hospitaldetails" ,hospitalSchema);
module.exports = hospitaldetails;