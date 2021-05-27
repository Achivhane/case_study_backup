var express = require('express');
var router = express.Router();
var Admin = require('../model/admin');


// get request for trains details
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
    admin.to=req.body.to;
    admin.fare=req.body.fare;
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

module.exports = router;