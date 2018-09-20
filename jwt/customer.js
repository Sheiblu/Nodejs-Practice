var express = require('express');
var router = express.Router();
let verifyToken = require('./verifytoken');

/* GET customers listing. */
router.get('/', function (req, res, next) {
res.send('respond with a resource');
});

router.get('/data', verifyToken, function (req, res, next) {
    let customerdata = [
      {
        customerid: 1,
        customername: 'Mahfuz Bappy'
      },
      {
        customerid: 2,
        customername: 'Shamim Uddin'
      },
      {
        customerid: 3,
        customername: 'Ishani Isha'
      }
    ];
  
    res.json(customerdata);
  });

module.exports = router;

