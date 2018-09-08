var db = require("../models");

module.exports = function(app) {
  // Get all classes
  app.get("/api/classes", function(req, res) {
    db.Class.findAll({}).then(function(data) {
      res.json(data);
    });
  });

  // Get a specific class
  app.get("/api/class/:id", function(req, res) {
    db.Class.findOne({
      where:{
        id: req.params.id
      }
    }).then(function(data) {
      res.json(data);
    });
  });

  // Create a new class
  app.post("/api/class", function(req, res) {
    db.Class.create(req.body).then(function(dbClass) {
      res.json(dbClass);
    });
  });

  // Delete a class by id
  app.delete("/api/class/:id", function(req, res) {
    db.Class.destroy({ where: { id: req.params.id } }).then(function(data) {
      res.json(data);
    });
  });
};
