var express = require('express');
var router = express.Router();
var sample = require('../model/sample.model').sample
var Sender = require('../model/queue.model'); // import the class Queue

router.get('/', function(req, res, next) {
    res.json({ a: 1 })
});


router.post('/run', function(req, res, next) {
    // This step requires that the fasta barcode files are already uploaded.
    // in other words the whole information filled up

    var sender = new Sender.Queue();
    var sampleID = req.body._id;
    delete req.body._id;

    // console.log(req.body)
    sample.updateElementByID(sampleID, req.body);

    req.body._id = sampleID;
    sender.RabbitMQ(req.body, 'nanopore', res)
        .then(
            function(response) {
                res.json(response);
            }
        );

});

module.exports = router;