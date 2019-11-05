var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/goodburger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    //console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/goodburger", function(req, res) {
  burger.insertOne(
    "burgers",
    "burger_name",
    "devoured",
    req.body.name,
    req.body.devoured,
    function(result) {
      // Send back the ID of the new quote
      console.log(req.body.name);
      res.json({ id: result.insertId });
    }
  );
});

//tableName, devouredColumn, devouredState, burgerID
router.put("/api/burgers/:id", function(req, res) {
  var eatThisBurger = req.params.id;

  burger.updateOne("burgers", "devoured", 1, eatThisBurger, function(result) {
    if (result.changedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/goodburger/:id", function(req, res) {
  var condition = req.params.id;

  burger.deleteOne("burgers", condition, function(result) {
    if (result.affectedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
