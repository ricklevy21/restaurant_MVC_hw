//import database connection
var connection = require("./connection.js")

//Object Relational Mapper  ?? = columns & tables  ? = values
var orm = {
    selectAll: function(table) {
        var queryString = "SELECT * FROM ??"
        connection.query(queryString, [table], function(err, result){
            if (err) throw err;
            //do something with results
        });
    },

    insertOne: function(table, column, value){
        var queryString = "INSERT INTO ?? (??) VALUES (?)"
        connection.query(queryString, [table, column, value], function(err, result){
            if (err) throw err;
            //do something with results
        })
    }

    updateOne: function(){
        var queryString = "UPDATE ?? SET ?? = ? WHERE id = ?"
        connection.query(queryString, [table, column, value, valueID], function(err, result){
            if (err) throw err;
            //do something with results
        })
    }
}