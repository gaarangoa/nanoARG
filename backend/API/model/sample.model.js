'strict';

DB = require("../modules/mongodb/db.model.js")

// UserCRUD = new DB.Table('user')

class Sample extends DB.Table {
    
    readSamplesByProjectID(projectID){
        var TABLE = this.table;
        var DB = this.db;

        return new Promise(
            function(resolve, reject){
                TABLE.find(
                    {"projectID":{$exists:true, $in:[projectID]}},
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

sample = new Sample('sample');
exports.sample = sample;




// sample = new User('sample')

// newSample = { name:'wastewater.3',
//             input:'/Volumes/data/dev/nanopore/storage/rawreads.fasta',
//             barcode:'/Volumes/data/dev/nanopore/storage/barcodes.fasta',
//             projectID:'58bf0c8363bb51101339e41c',
//             status:'Created'}

// sample.createElement(newSample)
//     .then(
//         function(response){
//             console.log(response)
//         }
//     ); 
