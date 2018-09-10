/*
sk key: sk_test_bZW5BqNybsg5V1bHDoij1xyz
pk key: pk_test_drOZ8fjels9TRp9id5EdnO0Y
*/

require("dotenv").config();
var express = require("express");
var stripe = require("stripe")("sk_test_bZW5BqNybsg5V1bHDoij1xyz");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");
app.set("views", __dirname + '/views');


app.get('/', function(req, res){
  res.render('payment', {
  });
});

app.get('/paysuccess', function(req, res){
  res.render('paysuccess', {
  });
});

app.post('/charge', function(req, res){
});

app.listen(3000, function(){
  console.log("Stripe server is running!!");
});

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
// db.sequelize.sync(syncOptions).then(function() {
//   app.listen(PORT, function() {
//     console.log(
//       "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
//       PORT,
//       PORT
//     );
//   });
// });

module.exports = app;
