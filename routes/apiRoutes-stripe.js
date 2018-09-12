var env = process.env.NODE_ENV || "development";
var { secret } = require('../config/config.json').stripe
var stripe = require('stripe')(secret)

module.exports = function(app) {
  // creates charge on stripe
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