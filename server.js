// Dependencies
const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./controllers/burgers_controllers.js");

const app = express();

const PORT = process.env.PORT || 8080;

// Starts the server and tells it to listen to client requests
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})

// MIDDLEWARE
app.use(express.static("public")); // Serve Static Content
app.use(express.urlencoded( { extended: true } ) ); // Parse JSON
app.use(express.json());
app.engine("handlebars", exphbs( { defaultLayout: "main" } ) );
app.set("view engine", "handlebars");
app.use(routes);