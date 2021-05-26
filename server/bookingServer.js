//     booking Server


var express    = require('express');
var app        = express();
var bodyParser= require("body-parser");
var mongoose   = require('mongoose');
// connect to our database
mongoose.connect('mongodb+srv://admin:admin@cluster0.d36b8.mongodb.net/booksample?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex:true }); 
//var Passenger = require('../case_study/model/Passenger');
var Booking = require('../model/booking');


app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
var port = process.env.PORT || 8080;        // set our port
var router = express.Router();
 router.use(function(req, res, next) {
     // do logging
     console.log('Something is happening.');
     next(); // make sure we go to the next routes and don't stop here
});

//get request
 
router.get('/booking',function(req, res) {
    Booking.find(function(err, booking) {
        if (err)
            res.send(err);

        res.json(booking);
    });
});

//post request for register data
router.post('/booking',(req, res)=>{
    var reg=new Booking();
    reg.train_name=req.body.train_name;
    reg.number_of_seats=req.body.number_of_seats;
    reg.from=req.body.from;
    reg.to=req.body.to;
    reg.booking_date=req.body.booking_date;
    reg.book=req.body.book;
    console.log("inside reg post");
    // Output the book to the console for debugging
    console.log(reg);
   // Passenger.push(register);
   reg.save(function(err) {
    if (err)
    {
        console.log("testing rest1");
        res.send(err);
    }
    else
    {
        console.log("no issue");
        res.send('new passenger is added to the database');
    }
});
});

app.use('/api', router);
app.listen(port);
console.log('Server Listening on port ' + port);