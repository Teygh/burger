// this file that is placed inisde the modals folder is going to require the orm which will use 
// all the methods to modify the orm to be used for this specific (Burger) project or app to use with
//the burgers database.

var orm = require ('../config/orm.js');

var burger = {
    all: function(cb){
        orm.all ('burgers', function (res){
            cb(res);
        })
    },

    update: function (id, cb){
        orm.update('burgers', id, cb);
    },

    create: function (name, cb){
        orm.create('burgers', name, cb);
    }
}


// The table: burgers is called and the response is sent to routes.js(burger_controller) file.
module.exports = burger;