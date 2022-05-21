//creating schema for nosql
const mongoose=require('mongoose');

const alienschema= new mongoose.Schema({
    
    name: 
    {
        type:String,
        required:true //asking if it's mandatory field
    },
    tech:
    {
        type:String,
        required:true
    },
    sub: //subscription to the channel
    {
        type:Boolean,
        required:true,
        default: false //by default no one would have subscribed to the channel
    }

})

//different kind of export statement for schemas
module.exports= mongoose.model('anyname', alienschema);