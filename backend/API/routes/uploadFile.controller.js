var express = require('express');
var fs = require('fs');

var tmp_dir = require('../.config').tmp

var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res) {
    var fstream;
    var file_dir = tmp_dir;
    var form_parameters = {};

    req.pipe(req.busboy);
    req.busboy.on('field', function(key, value) {
        form_parameters[key] = value;
    });

    // console.log(form_parameters)

    req.busboy.on('file', function(fieldname, file, filename) {
        timestamp = fieldname;
        local_file = file_dir + timestamp;

        // console.log("Uploading: " + local_file);  
        fstream = fs.createWriteStream(local_file);
        file.pipe(fstream);
        fstream.on('close', function() {
            // ssh.call_external_resource(filename, form_parameters.emailAddress, local_file);
            // console.log(form_parameters);
            res.send('File uploaded!');
        });
    });



});

module.exports = router;