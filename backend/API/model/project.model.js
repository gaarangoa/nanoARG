'strict';

DB = require("../modules/mongodb/db.model.js")

// UserCRUD = new DB.Table('user')

class Project extends DB.Table {
        readElementByUserID(userID){
        var TABLE = this.table;
        var DB = this.db;

        return new Promise(
            function(resolve, reject){
                TABLE.find(
                    {"userID":{$exists:true, $in:[userID]}})
                    .sort({'_id':-1},
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
                ) // END TABLE.find
            }
        ); // END promise
    } // END getElementByID
}

project = new Project('project');
exports.project = project;

// project = new User('project')

// newProject = {  name:'Christiansburgh WasteWater ',
//                 description:'This is a test project for nanopore sequencing',
//                 userID:'58bef27831da5dd68ba621f9'
//             }

// project.createElement(newProject)
//     .then(
//         function(response){
//             console.log(response)
//         }
//     ); 
