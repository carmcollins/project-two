var db = require("../models");

module.exports = function (app) {
  // Get all classes
  app.get("/api/classes", function (req, res) {
    db.Class.findAll({}).then(function (data) {
      res.json(data);
    });
  });

  // Get a specific class
  app.get("/api/class-details/:id", function (req, res) {
    db.Class.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (data) {
      res.json(data);
    });
  });

  // Create a new class
  app.post("/api/class", function (req, res) {
    console.log("new class: " + JSON.stringify(req.body));
    db.Class.create(req.body).then(function (data) {
      res.json(data);
    });
  });

  // When a user signs up for a class, take the user's ID and the class's ID and combine them on a third table in the DB
  app.post("/api/register/:id", function (req, res) {
    
    console.log("class id: " + req.params.id);
    console.log("user id: " + req.body.userId);
    var userid = req.body.userId;
    db.Class.findOne({
      where: {
        id: req.params.id
      }
    }).catch(function (err) {
      console.log("1st err");
      console.log(err);
    }).then(function (classResponse) {
      db.User.findOne({
        where: {
          id: userid
        }
      }).catch(function (err) {
        console.log("2nd err");
        console.log(err);
      }).then(function (userResponse) {
        classResponse.addUser(userResponse).then(function (data) {
          res.json(data);
        });
      });
    })
  });
  
};
