var express = require('express');
var router = express.Router();
var user = require('../model/auth.model').auth

router.post('/login/', function(req, res, next) {

    var email = req.body.email;
    var password = req.body.password;

    user.login(email, password)
        .then(
            function(response) {
                // console.log(response)
                res.json(response);
            }
        );
});


router.post('/signup/', function(req, res, next) {
    user.userExists(req.body.email)
        .then(
            function(response) {
                if (!response) {
                    user.createElement(req.body)
                        .then(
                            function(response) {
                                response.password = '123456';
                                res.json(response);
                            }
                        );
                } else {
                    res.json(false);
                }
            }
        )


});




module.exports = router;