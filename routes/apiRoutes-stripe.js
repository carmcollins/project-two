var stripe = require("stripe")("pk_test_3kQuYbD9iDbwfdk6squr49KV");

// module.exports = function (app) {

//     app.post("/charge", function(req, res) {
//         const token = req.body.stripeToken; 
//         stripe.charges.create({
//             amount: req.body.amount,
//             currency: req.body.currency,
//             description: req.body.description,
//             source: token,
//           }).then(function (data) {

//             res.json(data);
//         });
//     });
//     };

// var stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");
// app.post("api/charge", function(req, res) {

// const token = request.body.stripeToken; 


// stripe.charges.create({
//     amount: 10,
//     currency: 'usd',
//     customer: customer.id,
//     source: token
// }, function(err, charge) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("successful charge")
//     }
// });



