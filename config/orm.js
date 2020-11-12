// Dependencies
const connection = require("../config/connection.js");

// Creates an Object Relational Mapper
const orm = {
    // A method that selects all rows from the specified table in the database
    selectALL: function(table, callback){
        const queryString = "SELECT * FROM ??"
        connection.query(queryString, [table], function(error, result){
            if(error) throw error;
            callback(result);
        })
    },
    // A method that inserts specified values into the database
    insertOne: function(table, col, val, callback){
        const queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [table, col, val], function(error, result){
            if(error) throw error;
            callback(result);
        });
    },
    // A method that updates values of a specified row in the database
    updateOne: function(table, col, val, id, callback){
        const queryString = "UPDATE ?? SET ?? = ? WHERE id = ?";
        connection.query(queryString, [table, col, val, id], function(error, result){
            if(error) throw error;
            callback(result);
        });
    },
    // A method that deletes a specified row in the database
    deleteOne: function(table, id, callback){
        const queryString = "DELETE FROM ?? WHERE id = ?";
        connection.query(queryString, [table, id], function(error, result){
            if(error) throw error;
            callback(result);
        });
    }
}

module.exports = orm;
