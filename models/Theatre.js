const mongoose = require('mongoose')
const Schema = mongoose.Schema

const theatreSchema = new Schema({
     name:{
         type:String,
         required:true
     },
     latitude:{
         type:Number,
         required:true
     },
     longitude:{
         type:Number,
         required:true
     },
     address:{
        type:String,
        required:true
    }


},{timestamps:true});

const Theatre = mongoose.model('Theater',movieSchema);
module.exports = Theater;