const express= require('express')
const router = express.Router()
const mongoose=require('mongoose')

const Profile = require("../models/products")
const basic = require("../models/basic")
/*router.get('/', (req, res, next)=>
{
    Profile.find()
    .select('name age _id')
    .exec()
    .then(docs =>{
        const response = {
            count: docs.length,
            products: docs.map(doc =>{
                return {
                    name:doc.name,
                    age: doc.age,
                    _id:doc.id,
                    request: {
                        type: "GET",
                        url: "http://localhost:3000/product/"+doc._id
                    }
                }
            })
        }
        console.log(docs)
        res.status(200).json(response)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            error:err
        })
    })
})*/

router.post('/patientdetails', (req, res, next)=>
{
    const person = new Profile({
        _id: new mongoose.Types.ObjectId(),
        username: req.body.username,
        Patient_Name:req.body.Patient_Name,
        Patient_Id:req.body.Patient_Id,
        Age:req.body.Age,
        Adhar_Number:req.body.Adhar_Number,
        Data_of_admission:req.body.Date_of_admission,
        Admission_Details:req.body.Admission_Details,
        Discharge_Date:req.body.Discharge_Date,
        Patient_Status:req.body.Patient_Status
    })
    person.save().then(result =>{
        console.log(result)
        res.status(201).json({
            message: 'Handling POST requests to Hospital basic details dashboard',
            createdProfile: result
        })
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            error:err
        })
    })
    
})

router.post('/basicdetails', (req, res, next)=>
{
    const person = new basic({
        _id: new mongoose.Types.ObjectId(),
        username: req.body.username,
        Total_Patients: req.body.Total_Patients,
        Totel_Beds: req.body.Totel_Beds,
        Occupied_Beds: req.body.Occupied_Beds,
        Empty_Beds:req.body.Empty_Beds,
        Oxygen_Availability: req.body.Oxygen_Availability,
        Medicine_Status: req.body.Medicine_Status
    })
    person.save().then(result =>{
        console.log(result)
        res.status(201).json({
            message: 'Handling POST requests to Hospital basic details dashboard',
            createdProfile: result
        })
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            error:err
        })
    })
    
})

/*router.get('/:personId', (req,res,next)=>{
    const id = req.params.personId
    Profile.findById(id)
    .exec()
    .then(doc => {
        console.log("From database",doc)
        if(doc){
            res.status(200).json(doc)
        }
        else{
            res.status(404).json({message: "No valid entry found for provided id"})
        }
        res.status(200).json(doc)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({error:err})
    }) 
})

router.patch('/:personId', (err,req,res,next)=>{
    const id = req.params.productsId
    const updateOps ={}
    for(const ops of req.body)
    {
        updateOps[ops.propName] = ops.value
    }
    Product.update({ _id:id}, { $set : updateOps})
    .exec()
    .then( result=> {
        console.log(result)
        res.status(200).json(result)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            error:err
        })
    })  
})

router.delete('/:personId', (req,res,next)=>{
    const id=req.params.personId
    Profile.findByIdAndDelete({ _id:id})
    .exec()
    .then( result => {
        res.status(200).json(result)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            error:err
        })
    })    
})*/

module.exports = router;