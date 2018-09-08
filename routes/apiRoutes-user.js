var db = require("../models");

module.exports = function(app) {
 

  // Get a specific user
  app.get("/api/class/:name/:password", function(req, res) {
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
      res.json(data);
    });
  });
};