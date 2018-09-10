
var db = require("../models");

module.exports = function(app) {


  // Load index page send classes so we can select featured classes
  app.get("/", function(req, res) {
    db.Class.findAll({ where: {featured: true}}).then(function(data) {
      console.log("all:" + JSON.stringify(data));
      res.render("index", {
        data: data
      });
    });
  });

  // Load classes page and send classes
  app.get("/classes", function(req, res) {
    db.Class.findAll({}).then(function(data) {
      console.log("all:" + data)
      res.render("classes", {
        Classes: data
      });
    });
  });

  // Load class page and pass in an example by id
  app.get("/class/:id", function(req, res) {
    db.Class.findOne({ where: { id: req.params.id } }).then(function(data) {
      res.render("class", {
        Class: data
      });
    });
  });

  
  // Load create class page 
  app.get("/create-class", function(req, res) {
    db.Class.create({req}).then(function(data) {
      res.render("create-class", {
        Class: data
      });
    });
  });

  // Load create new user page 
  app.get("/create-user", function(req, res) {
    db.Class.create({req}).then(function(data) {
      res.render("create-user", {
        User: data
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
