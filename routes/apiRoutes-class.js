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

  // Create a new registration
  app.post("/api/register/:id", function (req, res) {
    db.Class.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (classResponse) {
      db.User.findOne({
        where: {
          id: req.user.id
        }
      }).then(function (userResponse) {

        classResponse.addUser(userResponse).then(function (data) {
          res.json(data);
        });
      });
    });
  });
};
