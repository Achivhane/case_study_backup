var express = require('express');
const Payment = require('../model/payment');
var router = express.Router();

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

module.exports = router;