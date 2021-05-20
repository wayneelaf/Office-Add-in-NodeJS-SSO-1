/*
 * Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See full license in root of repo. -->
 *
 * This file defines the home page request handling.
 */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/get-data', function (req, res, next) {
    console.log("get-data")
    var item = {
        text1: req.query.text1
    };
    console.log(item);

    
});
module.exports = router;
