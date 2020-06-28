//import database connection
var connection = require("./connection.js")


//helper functions
function createQs(num){
    var arr = [];
    for (var i = 0; i < num; i++){
        arr.push("?");
    }
    return arr.toString();
}

function translateSql(obj){
    var arr = [];
    for (var key in ob){
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)){
            if(typeof value === "string" && value.indexOf(" ") >= 0 ){
                value = "'" + value + "'" ;
            }
            arr.push(key + "=" + value)
        }
    }
    return arr.toString();
}

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