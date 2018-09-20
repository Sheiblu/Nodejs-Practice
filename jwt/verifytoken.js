var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

router.use(function (req, res, next) {
     var token = req.headers['x-access-token'];
    //var token = global.config.token;
    console.log(token);
    if (token) {
        jwt.verify(token, global.config.secretKey,
            {
                algorithm: global.config.algorithm

            }, function (err, decoded) {
                if (err) {
                    let errordata = {
                        message: err.message,
                        expiredAt: err.expiredAt
                    };
                    console.log(errordata);
                    return res.status(401).json({
                        message: 'Unauthorized Access'
                    });
                }
                req.decoded = decoded;
                console.log(decoded);
                next();
            });
    } else {
        return res.status(403).json({
            message: 'Plz login Fast'
        });
    }
});

module.exports = router;