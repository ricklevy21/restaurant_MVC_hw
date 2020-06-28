//import database connection
var connection = require("./connection.js")

//Object Relational Mapper  ?? = columns & tables  ? = values
//Create an object called ORM that has CRUD methods for interacting with database
var orm = {
        selectAll: function(table, cb) {
            var queryString = "SELECT * FROM " + table + ";"
            connection.query(queryString, function(err, result){
                if (err) throw err;
                cb(result)
            });
    },

        insertOne: function(table, column, values, cb){
            var queryString = "INSERT INTO " + table + " (" + column.toString() + ") VALUES (" + createQs(values.length) + ") ";
            console.log(queryString);
            connection.query(queryString, values, function(err, result){
                if (err) throw err;
                cb(result)
            })
    },

        updateOne: function(table, objColVals, condition, cb){
            var queryString = "UPDATE " + table + " SET " + translateSql(objColVals) + " WHERE " + condition;
            console.log(queryString);
            connection.query(queryString, function(err, result){
                if (err) throw err;
                cb(result)
            })
    },
    {
        deleteOne: function(table, condition cb){
            var quesryString = "DELETE FROM " + table + " WHERE " + condition;
            console.log(queryString);
            connection.query(quesryString, function(err,result){
                if (err) throw err;
                cb(result)
            });
        };
    }
}

module.exports = orm;