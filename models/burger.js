//import the ORM
var orm = require("../config/orm.js")

var burger = {
        selectAll: function(cb){
            orm.selectAll("burgers", function(res){
                cb(res);
            });
    },
        insertOne: function(column, values, cb){
            orm.insertOne("burgers", column, values, function(res){
                cb(res);
            });
    },
        updateOne: function(objColVals, condition, cb){
            orm.updateOne("burgers", objColVals, condition, function(res){
                cb(res);
            });
    },
        deleteOne: function(condition, cb){
            orm.deleteOne("burgers", condition, function(res){
                cb(res)
            });
        }
};

//export model for the controller to utilize
module.exports = burger;