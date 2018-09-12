var stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

$(document).ready(function () {
    
    
    
    const token = request.body.stripeToken; 
    
    
    stripe.charges.create({
        amount: 10,
        currency: "usd",
        description: "Charge for blah blah",
        source: token
    }, function(err, charge) {
        if (err) {
            console.log(err);
        } else {
            console.log("successful charge")
        }
    });
    
   

    


});