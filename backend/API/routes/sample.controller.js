var project = require('../model/project.model');

var express = require('express');
var router = express.Router();
var sample = require('../model/sample.model').sample;
var Sender = require('../model/queue.model'); // import the class Queue
var fs = require('fs');

var sys = require('sys');
var exec = require('child_process').exec;

var remote_host = "gustavo1@newriver1.arc.vt.edu:/groups/metastorm_cscee/nanoARG/backend/scheduler/remote/storage/";

router.get('/:sampleID', function (req, res, next)
{
    var sampleID = req.params['sampleID'];
    // console.log(sampleID)
    sample.readElementByID(sampleID)
        .then(
            function (response)
            {
                res.json(response);
            }
        );
});

router.get('/read/results/:sample_id', function (req, res, next)
{
    var sample_id = req.params['sample_id'];

    sample.readElementByID(sample_id)
        .then(
            function (response)
            {
                // console.log(response)

                var fi = '/src/data/' + response[0].projectID + '_' + sample_id + '.json';
                var fi2 = '/src/data/' + response[0].projectID + '_' + sample_id + '.min.json';

                cmd = 'ls -lstg ' + fi;
                var dir = exec(cmd, function (err, stdout, stderr)
                {
                    if (err) {
                        res.json({
                            message: 'still working',
                            status: false
                        });
                    } else {

                        var fileSizeInMegabytes = parseInt(stdout.split(' ')[4]) / 1000000;

                        // res.json({ filesize: filesize, status: 'file is ' });

                        // If the results file is too big to be processed
                        if (fileSizeInMegabytes >= 20) {

                            fs.readFile(fi2, 'utf8', function (err, data)
                            {
                                if (err) {
                                    res.json({
                                        status: false,
                                        message: 'Error: rerun your sample'
                                    });
                                } else {
                                    obj = JSON.parse(data);
                                    obj[0] = obj[0];
                                    res.json({
                                        data: obj,
                                        message: 'results file is too big',
                                        status: true,
                                        size: fileSizeInMegabytes
                                    });
                                }
                            });

                        } else {
                            fs.readFile(fi, 'utf8', function (err, data)
                            {
                                if (err) {
                                    res.json({
                                        status: false,
                                        message: 'still working'
                                    });
                                } else {
                                    obj = JSON.parse(data);
                                    obj[0] = obj[0].slice(0, 20);
                                    res.json({
                                        data: obj,
                                        message: 'results are ready',
                                        status: true,
                                        size: fileSizeInMegabytes
                                    });
                                }
                            });
                        }
                    }

                });

                // var fileSizeInBytes = stats.size;

                // var fileSizeInMegabytes = fileSizeInBytes / 1000000.0;

                // res.json({
                //     results_size: fileSizeInMegaBytes
                // });

            }
        );
});


router.get('/read/results/download/:sample_id', function (req, res, next)
{
    var sample_id = req.params.sample_id;
    sample.readElementByID(sample_id)
        .then(
            function (response)
            {
                // console.log(response)
                var fi = '/src/data/' + response[0].projectID + '_' + sample_id + '.json';
                res.download(fi);
            }
        );
});

router.get('/project/:projectID', function (req, res, next)
{
    var sampleID = req.params['projectID'];
    // console.log(sampleID)
    sample.readSamplesByProjectID(sampleID)
        .then(
            function (response)
            {
                res.json(response);
            }
        );
});


router.post('/update/status', function (req, res, next)
{
    var sampleID = req.body._id;
    var status = req.body.status;
    sample.updateElementByID(sampleID, {
        "status": status
    })

    res.json({
        request: "success"
    })

});


router.post('/update/results', function (req, res, next)
{
    var sampleID = req.body._id;
    var results = req.body.results;
    var analysis = req.body.analysis

    if (analysis == "ARG") {
        sample.updateElementByID(sampleID, {
            "ARG": JSON.parse(results)
        })
    }

    res.json({
        request: "success"
    })

});

router.post('/update/', function (req, res, next)
{
    const sampleID = req.body['_id'];
    delete req.body['_id']
    // console.log(req.body)
    sample.updateElementByID(sampleID, req.body)
});

router.post('/create/', function (req, res, next)
{

    // console.log(req.body)
    sample.createElement(req.body)
        .then(
            function (response)
            {
                res.json(response);
            }
        )
});

router.post('/remove/', function (req, res, next)
{
    sample.removeElementByID(req.body['_id'])
        .then(
            function (response)
            {
                res.json({
                    removed: true
                })
            }
        );
});

router.get('/status/:sample_id/:project_id/:status', function (req, res)
{

    if (req.params.status != "done") {
        // update the status
        console.log('updating sample' + req.params.sample_id, req.params.status);
        sample.updateElementByID(req.params.sample_id, {
            "status": req.params.status
        });
        res.json(req.params);
    } else {
        // when the process is done retrieve the results
        var cmd1 = "scp " + remote_host + req.params.project_id + "/" + req.params.sample_id + "/all.bestHit.json /src/data/" + req.params.project_id + "_" + req.params.sample_id + ".json";
        var cmd2 = "scp " + remote_host + req.params.project_id + "/" + req.params.sample_id + "/all.bestHit.min.json /src/data/" + req.params.project_id + "_" + req.params.sample_id + ".min.json";
        var cmd3 = "scp " + remote_host + req.params.project_id + "/" + req.params.sample_id + "/all.bestHit-full.json /src/data/" + req.params.project_id + "_" + req.params.sample_id + "-full.json";

        var cmd = cmd1 + ' && ' + cmd2 + ' && ' + cmd3;

        console.log(cmd);

        var dir = exec(cmd, function (err, stdout, stderr)
        {
            if (err) {
                console.log('error retrieving file');
            }
            console.log(stdout);
        });

        dir.on('exit', function (code)
        {
            // exit code is code
            console.log('updating sample' + req.params.sample_id, req.params.status);
            sample.updateElementByID(req.params.sample_id, {
                "status": req.params.status
            });
            res.json(req.params);
        });
    }
});

// export the module
module.exports = router;