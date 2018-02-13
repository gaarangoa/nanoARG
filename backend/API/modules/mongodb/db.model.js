
Promise = require('promise');
var mongodb = require('mongojs');
ObjectID = mongodb.ObjectID;

class Table{
    constructor(collection){
        var dblink = require('./config');
        var db = mongodb(dblink.link);
        this.table = db[collection];
        this.db = db;
    }

    readElementByID(id){
        var TABLE = this.table;
        var DB = this.db;

        return new Promise(
            function(resolve, reject){
                TABLE.find({"_id":ObjectID(id)}, 
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

    createElement(element){
        var TABLE = this.table;
        var DB = this.db;
        
        return new Promise(
            function(resolve, reject){
                
                TABLE.insert(element, 
                    function(err,response){
                        if(response){
                                resolve(response)
                        }else{
                            resolve(false)
                        }
                        // DB.close()
                    }   
                ); // END TABLE.find
            }
        ); // END promise
    } // END getElementByID


    removeElementByID(id){
        var TABLE = this.table;
        var DB = this.db;

        return new Promise(
            function(resolve, reject){
                TABLE.remove({"_id":ObjectID(id)}, 
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


    updateElementByID(id, update){
        // update is an object with the {field:value}
        var TABLE = this.table;
        var DB = this.db;

        return new Promise(
            function(resolve, reject){
                TABLE.update(
                    {"_id": ObjectID(id)},                   
                    {$set: update},
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
                ); // END TABLE.updateOne
            }
        ); // END promise
    } // END getElementByID


}

exports.Table = Table;