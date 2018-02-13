'strict';

DB = require("../modules/mongodb/db.model.js")

// UserCRUD = new DB.Table('user')

class User extends DB.Table {

    readElementByEmail(email){
        var TABLE = this.table;
        var DB = this.db;

        return new Promise(
            function(resolve, reject){
                TABLE.find(
                    {"email":{$exists:true, $in:[email]}},
                    {password:0, association:0},
                    function(err,response){
                        if(response){
                            if(response[0]){
                                resolve(response)
                            }else{
                                resolve(false)}
                        }else{
                            resolve(false)
                        }
                        // DB.close()
                    }    
                ); // END TABLE.find
            }
        ); // END promise
    } // END getElementByID

    userExists(email){
        var TABLE = this.table;
        var DB = this.db;

        return new Promise(
            function(resolve, reject){
                TABLE.findOne({"email":{$exists:true, $in:[email]}}, 
                    function(err,user){
                        if(user){resolve(true)}else{resolve(false)}
                    }    
                ); // END TABLE.find
            }
        ); // END promise
    } // END getElementByID

    readElementByID(id){
        var TABLE = this.table;
        var DB = this.db;

        return new Promise(
            function(resolve, reject){
                TABLE.find({"_id":ObjectID(id)},
                            {password: 0}, 
                    function(err,response){
                        if(response){
                            if(response[0]){
                                resolve(response)
                            }else{
                                resolve(false)}
                        }else{
                            resolve(false)
                        }
                        // DB.close()
                    }    
                ); // END TABLE.find
            }
        ); // END promise
    } // END getElementByID


    



}


user = new User('user');

exports.user = user;
exports.User = User; 