
var db = require("../models");
var passport = require("../config/passport");

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
      console.log("all:" + JSON.stringify(data));
      res.render("classes", {
        data: data
      });
    });
  });

  // Load classes based on filter parameters on classes page
  app.get("/classes/:filter", function(req, res) {
    db.Class.findAll({ where: {category: req.params.filter}}).then(function(data) {
      console.log("filtered classes:" + JSON.stringify(data));
      res.render("classes", {
        data: data
      });
    });
  });

  // Load class page and pass in an example by id
  app.get("/class-details/:id", function(req, res) {
    db.Class.findOne({ where: { id: req.params.id } }).then(function(data) {
      res.render("class-details", {
        data: data
      });
    });
  });

  
  // Load create class page 
  app.get("/create-class", function(req, res) {
    res.render("create-class")
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
