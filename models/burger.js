//import the ORM
var orm = require("../config/orm.js")

var burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    insertOne: function(column, value, cb){
        orm.insertOne("burgers", column, value, function(res){
            cb(res);
        });
    },
    updateOne: function(column, value, valueId, cb){
        orm.updateOne("burgers", column, value, valueId, function(res){
            cb(res);
        });
    }
};

//export model for the controller to utilize
module.exports = burger;