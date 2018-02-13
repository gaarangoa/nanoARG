
var express = require('express');
var router = express.Router();
var user = require('../model/user.model').user


router.get('/:email', function(req, res, next) {
    var email = req.params['email'];
    
    user.readElementByEmail(email)
        .then(
            function(response){
                res.json(response);
            }
        );
}); 


router.get('/exists/:email', function(req, res, next) {
    var email = req.params['email'];
    
    user.userExists(email)
        .then(
            function(response){
                res.json(response);
            }
        );
}); 


router.post('/create/', function(req, res, next) {

}); 

router.post('/remove/', function(req, res, next) {
    
}); 

router.post('/update/', function(req, res, next) {
    
}); 

module.exports = router;