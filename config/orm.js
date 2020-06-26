//import database connection
var connection = require("./connection.js")

//Object Relational Mapper  ?? = columns & tables  ? = values
var orm = {
    selectAll: function(cb) {
        var queryString = "SELECT * FROM burgers"
        connection.query(queryString, function(err, result){
            if (err) throw err;
            //do something with results
        });
    },

    insertOne: function(column, value, cb){
        var queryString = "INSERT INTO burgers (??) VALUES (?)"
        connection.query(queryString, [column, value], function(err, result){
            if (err) throw err;
            //do something with results
        })
    },

    updateOne: function(column, value, valueID, cb){
        var queryString = "UPDATE burgers SET ?? = ? WHERE id = ?"
        connection.query(queryString, [column, value, valueID], function(err, result){
            if (err) throw err;
            //do something with results
        })
    }
}

module.exports = orm;