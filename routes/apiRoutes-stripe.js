//Stripe keys
var keys = require("./keys.js");
var stripeKey = keys.stripe;
//Stripe npm
var stripe = require("stripe")(stripeKey.secret);

// Posts user's payment info to the Stripe API dashboard
module.exports = function (app) {

    app.post("/api/charge", function(req, res) {
        const token = req.body.stripeToken; 
        stripe.charges.create({
            amount: req.body.amount,
            currency: "usd",
            description: req.body.description,
            source: token
        }).then(function(err, charge) {
            if (err) {
                console.log(err);
                res.send("error");
            } else {
                console.log("successful charge")
                res.redirect("/");
            }
        }).catch(function(err){
            res.send("error");
        });
    });
    
};