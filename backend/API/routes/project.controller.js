
var express = require('express');
var router = express.Router();
var project = require('../model/project.model').project


router.get('/:userID', function(req, res, next) {
    var userID = req.params['userID'];
    
    project.readElementByID(userID)
        .then(
            function(response){
                res.json(response);
            }
        );
}); 

router.get('/user/:userID', function(req, res, next) {
    var userID = req.params['userID'];
    
    project.readElementByUserID(userID)
        .then(
            function(response){
                res.json(response);
            }
        );
}); 



router.post('/create/', function(req, res, next) {

    project.createElement(req.body)
        .then(
            function(response){
                res.json(response);
            }
        )
}); 


router.post('/remove/', function(req, res, next) {
    project.removeElementByID(req.body['_id'])
        .then(
            function(response){
                res.json({removed: true})
            }
        )
}); 

router.post('/update/', function(req, res, next) {
    
}); 

module.exports = router;