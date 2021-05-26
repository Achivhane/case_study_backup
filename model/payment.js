//                      payment Rest API

const express = require('express');
const mongoose = require('mongoose');

//create schema
var Schema = mongoose.Schema;
var PaymentSchema = new Schema({
    fare:{
        type: Number
    },
    passenger_id:{
        type: Number,    
    }
})
module.exports = mongoose.model('Payment', PaymentSchema);