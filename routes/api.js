var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([{
    id: 1,
    username: "sampsepiol"
  }, {
    id: 2,
    username: "DoloresH4ze"
  }
]);
});

module.exports = router;
