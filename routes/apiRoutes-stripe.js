// Stripe Keys
var keys = require("../keys.js");
var stripeKey = keys.stripe;

// Require Stripe
var stripe = require("stripe")(stripeKey.secret);

// Posts user's payment info to the Stripe API dashboard
module.exports = function(app) {
    
  // Creates charge on Stripe
  app.post("/api/charge", function(req, res) {
    var source = req.body.source
    var { amount, currency, description } = req.body.product

    stripe.charges.create({
      description,
      amount,
      currency,
      source
    }, function(err, charge) {
      if (err) {
        var data = {
          err: `Payment Failed`
        }
        res.status(409).json(data);
        console.log('Error occured during the payment', err)
      } else {
        var data = {
          success: `Payment has been completed`
        }
        res.json(data);
        console.log('Payment has been completed!')
      }
    });
  });
  
};