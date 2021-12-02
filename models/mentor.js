const { ObjectId } = require('bson');
const mongoose = require('mongoose');
const mentor_schema = new mongoose.Schema({

    name:{
        type:String,
        required: true,

    },
    email:{
        type: String,
        required: true,
    },
    phone:{
        type: String,
        required: true,
    },
    organization:{
        type: Object
     
    },
    student:{
        type: ObjectId,
        ref:"Student"
    },
   
})
mongoose.model('MENTOR',mentor_schema);