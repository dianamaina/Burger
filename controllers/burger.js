// Dependencies
const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();

// Read Route
router.get("/", function (request, response) {
  burger.all(function (data) {
    response.render("index", { burgers: data });
  });
});

// Create Route
router.post("/api/burgers", function (request, response) {
  burger.create(request.body.burger_name, function (result) {
    response.json({ id: result.insertId }); // Send back the id of the new burger
  });
});

// Update Route
router.put("/api/burgers/:id", function (request, response) {
  burger.update(request.params.id, function (result) {
    if (result.changedRows == 0) {
      return response.status(404).end();
    } else {
      response.status(200).end();
    }
  });
});

// Delete Route
router.delete("/api/burgers/:id", function (request, response) {
    burger.delete(request.params.id, function (result) {
    if (result.affectedRows == 0) {
      return response.status(404).end();
    } else {
      response.status(200).end();
    }
  });
});

module.exports = router;