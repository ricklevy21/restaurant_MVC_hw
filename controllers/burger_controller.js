//dependencies
var express = require("express");


//methods to utilize
var router = express.Router();

//import the model to use its database functions
var burger = require("../models/burger.js")

//-------------------------------------------------------------------
//create all routes and set up logic within routes
//-------------------------------------------------------------------

//route to main page: displays all burgers from db table burger
router.get("/", function(req,res){
    burger.selectAll(function(data){
        var handlebarsObject = {
            burgers: data
        };
        console.log(handlebarsObject);
        res.render("index", handlebarsObject)
    });
});

//route to add a burger
router.post("/api/burgers", function(req,res){
    burger.insertOne(["burger"],[req.body.burger],function(result){
        //send back the ID of the new burger
        res.json({ id: result.insertId });
    });
});

//route to update a burger, set devoured to be true from false
router.put("/api/burgers/:id", function(req, res){
    var condition = "id = "+ req.params.valueId;

    console.log("condition: "+ condition);

    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function(result){
        if (result.changedRows == 0){
            //if no rows were changed, then the ID must not exist, so send 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export routes for server.js to use.
module.exports = router;