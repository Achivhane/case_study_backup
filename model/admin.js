//    Admin Rest API

const express = require('express');
const mongoose = require('mongoose');

//create schema
var Schema = mongoose.Schema;
var AdminSchema = new Schema({
    // passenger:{type: mongoose.Schema.Types.ObjectId,
    //     ref: "Passenger"},
    train_name:{
        type: String
    },
    from:{
        type:String
    },
    to:{
        type:String
    },
    fare:{
        type:Number
    },
    arrival_time:{
        type:String
    },
    departure_time:{
        type:String
    },
    available:{
        type:String
    }
})

module.exports = mongoose.model('Admin', AdminSchema);