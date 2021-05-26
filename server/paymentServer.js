var express    = require('express');
var app        = express();
var bodyParser= require("body-parser");
var mongoose   = require('mongoose');
// connect to our database
mongoose.connect('mongodb+srv://admin:admin@cluster0.d36b8.mongodb.net/booksample?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex:true }); 
//var Passenger = require('../case_study/model/Passenger');
var Payment = require('../model/payment');


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
 
router.get('/PaymentDetails',function(req, res) {
    Payment.find(function(err, details) {
        if (err)
            res.send(err);

        res.json(details);
    });
});

//post request for register data
router.post('/payment',(req, res)=>{
    var pay=new Payment();
    pay.fare=req.body.fare;
    pay.passenger_id=req.body.passenger_id;
    console.log("inside admin post");
    // Output the book to the console for debugging
    console.log(pay);
   // Passenger.push(register);
   pay.save(function(err) {
    if (err)
    {
        res.send("payment not Successful");
    
    }
    else
    {
       
        res.send('Payment Successful');
    }
});
});

app.use('/api', router);
app.listen(port);
console.log('Server Listening on port ' + port);