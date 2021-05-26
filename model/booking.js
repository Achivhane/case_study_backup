//       Booking Rest API

const express = require('express');
const mongoose = require('mongoose');

//create schema
var Schema = mongoose.Schema;
var BookingSchema = new Schema({
    // passenger:{type: mongoose.Schema.Types.ObjectId,
    //     ref: "Passenger"},
    train_name:{
        type: String
    },
    number_of_seats:{
        type: Number
    },
    from:{
        type:String
    },
    to:{
        type:String
    },
    booking_date:{
        type:Date
    },
    book:{
        type:Boolean
    }
})

module.exports = mongoose.model('Booking', BookingSchema);