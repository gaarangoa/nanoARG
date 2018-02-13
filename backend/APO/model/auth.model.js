'strict';

User = require("../model/user.model")

// UserCRUD = new DB.Table('user')

class Auth extends User.User {

    login(email, password){
        var TABLE = this.table;
        var DB = this.db;

        return new Promise(
            function(resolve, reject){
                TABLE.find(
                    {"email":email, "password":password},
                    {password:0},
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


auth = new Auth('user'); // uses the table "user" for making the auth

exports.auth = auth;