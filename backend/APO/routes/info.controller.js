var express = require('express');
var router = express.Router();

// simple info about the project

router.get('/', function(req, res, next) {
    res.json({
        status: true
    });
});



module.exports = router;