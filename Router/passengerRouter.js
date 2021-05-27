var express = require('express');
var router = express.Router();
const Passenger = require('../model/passenger');
//get request
 
router.get('/passengers',function(req, res) {
    Passenger.find(function(err, passenger) {
        if (err)
            res.send(err);

        res.json(passenger);
    });
});

//post request for register data
router.post('/register',(req, res)=>{
    var reg=new Passenger();
    reg.name=req.body.name,
    reg.email=req.body.email,
    reg.password=req.body.password,
    reg.phone=req.body.phone,
    reg.age=req.body.age
    
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

//post request for login data
router.post("/login",(req, res)=>{
    var login = Passenger();
    const body=req.body
    const email=body.email
    const password = body.password
    login.save(function(err) {
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

//if passenger details found or not found
 Passenger.findOne({email:email,password:password},(err,found)=>{
      if(found){
          console.log(found);
         res.json("successful");
     }
     else{
         res.send("unauthorized");
     }
 });    
});
//put request

router.put('/passengers/:_id', function(req, res) {
	// create mongose method to update a existing record into collection
	let id = req.params._id;
	var data = {
		name : req.body.name,
        email : req.body.email,
        password : req.body.password,
        phone : req.body.phone,
		age : req.body.age
	}
 
	// save the user
	
    Passenger.findOneAndUpdate(id, data, function(err, found) {        
	if (err){
        res.send(err);
        console.log("error inside put");
    } else{
	res.send('Successfully! Employee updated - '+found.name);
    console.log("successful put");
    }
	});
});
//delete request

router.delete('/passengers/:_id', function(req, res) {
	console.log(req.params._id);
	let id = req.params._id;
	Passenger.deleteOne({
		_id : id
	}, function(err) {
		if (err){
            console.log("error inside delete");
			res.send(err);
        }
		else{
			res.send('Successfully! passenger has been Deleted.');
            console.log("successful delete");	
        }
	});
});

module.exports = router;