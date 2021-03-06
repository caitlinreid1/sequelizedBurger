var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var sequelize = require("sequelize");

// var port = 3000;
var port = process.env.port || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes =============================================================
require("./routes/author-api-routes.js")(app);
require("./routes/html-routes.js")(app);
require("./routes-/post-api-routes.js")(app);

app.use("/", routes);

// Starts the server to begin listening
// =============================================================
app.listen(process.env.PORT || 3000, function(){
 console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});


// app.listen(process.env.PORT || 3000, function() {
//     console.log("App listening on PORT " + port);
// });
