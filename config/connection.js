const mysql = require("mysql");

let connection;


// Connects to the JAWS Database
if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else{
    
    // Connects to the Local Database
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        port: 3306,
        password: "mysql",
        database: "burgers_db"
    })
}

// Connects to the Database
connection.connect(function(error) {
    
    if(error){
        console.log("Error Connecting: " + error.stack);
    } else {
        console.log("Connection id: " + connection.threadId);
    }

});
module.exports = connection;
