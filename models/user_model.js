const express = require('express')

const mongoose = require('mongoose')

const user_schema = new mongoose.Schema({
    name : {
        type:String,
        required: true
    },

    phone:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required:true
      
        
    },

    token:{
        type:String,
        required:true
        
    },

    refresh_token:{
        type: String,
        required:true
    },
    password:{
        type:String,
        required:true
    },

    Linkdln:{
        type :String,
        required: true
        
    },
    github:{

        type :String ,
        required: true

    },
    
    isSelected:{
        type:Boolean,
        required:true,
        default:false
    },
    score:{
        type:String,
        required:true
    }

    //organization will be here 
})


mongoose.model('USER_POST', user_schema)