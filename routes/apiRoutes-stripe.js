var stripe = require("stripe")("pk_test_3kQuYbD9iDbwfdk6squr49KV");

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
                res.redirect("/");//(charge);
            }

        }).catch(function(err){
            res.send("error");
        })
    });
    
   
};



