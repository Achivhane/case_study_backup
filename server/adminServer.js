//      Admin server

var express    = require('express');
var app        = express();
var bodyParser= require("body-parser");
var mongoose   = require('mongoose');
// connect to our database
mongoose.connect('mongodb+srv://admin:admin@cluster0.d36b8.mongodb.net/booksample?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex:true }); 
//var Passenger = require('../case_study/model/Passenger');
var Admin = require('../model/admin');


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
 
router.get('/TrainDetails',function(req, res) {
    Admin.find(function(err, details) {
        if (err)
            res.send(err);

        res.json(details);
    });
});

//post request for register data
router.post('/admin',(req, res)=>{
    var admin=new Admin();
    admin.train_name=req.body.train_name;
    admin.from=req.body.from;
    admin.to=req.body.fare;
    admin.fare=req.body.to;
    admin.arrival_time=req.body.arrival_time;
    admin.departure_time=req.body.departure_time;
    admin.available=req.body.available;
    console.log("inside admin post");
    // Output the book to the console for debugging
    console.log(admin);
   // Passenger.push(register);
   admin.save(function(err) {
    if (err)
    {
        console.log("testing rest1");
        res.send(err);
    }
    else
    {
        console.log("no issue");
        res.send('new train detail is added to the database');
    }
});
});

app.use('/api', router);
app.listen(port);
console.log('Server Listening on port ' + port);