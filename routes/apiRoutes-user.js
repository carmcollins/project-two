var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
 
  // Get a specific user
  app.get("/api/user/:name/:password", function(req, res) {
    db.User.findOne({
      where:{
        name: req.params.name,
        password: req.params.password
      }
    }).then(function(data) {
      res.json(data);
    });
  });

  // Create a new user
  app.post("/api/user", function(req, res) {
    db.User.create(req.body).then(function(data) {
      res.redirect(307, "/api/login");
    });
  });

  //After user logs in, they are sent to the home page
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json("/");
  });

  //Allows user to logout
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  //Getting data about user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      res.json({});
    }
    else {
      var newObj = {
        id: req.user.id,
        name: req.user.name,
        email: req.user.email,
        phone: req.user.phone,
        photo: req.user.photo
      }
    };

    res.json(newObj);
  });

};