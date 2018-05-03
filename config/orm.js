// Import MySQL connection.
var connection = require("./connection.js");


// This file will have all the functions that we will use to work with the Data in the Database.
// Basically we will perform CRUD on our database using the functions that are in this file.
// ORM.JS is the file that is manuplating the DATABASE.


// orm.all method is used here to crreate a connection.querry to retrieve all the data from the table in
// the database.
var orm = {
    all: function (tableInput, cb) {
        connection.query('SELECT * FROM ' + tableInput + ';', function (err, result) {
            if (err) throw err;
            // this Call Back function is used here to input the result into the next files that are going to
            // be contained in the models folder.
            cb(result)
        })
    },

    // Adding the update method so that when we press the Devour IT! button it changes the status of the Burger

    update: function (tableInput, condition, cb) {
        connection.query('UPDATE ' + tableInput + ' SET devoured=true WHERE id=' + condition + ';', function (err, result) {
            //tableInput in this case is burgers
            if (err) throw err;
            cb(result);
        })
    },

    create: function (tableInput, val, cb){
        connection.query('INSERT INTO '+tableInput+ " (burger_name) VALUES ('"+val+"');", function (err, result){
            if (err) throw err;
            cb(result);
        })
    }


}


module.exports = orm;