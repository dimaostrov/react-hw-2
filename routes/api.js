var express = require('express');
var router = express.Router();

const Article = require('../models/articles');

/* GET users listing. */
router.get('/articles', function(req, res, next) {
  Article.find({})
  .then(data => res.json(data))
});

router.post('/articles', function(req, res, next) {
  Article.create(req.body)
  .then(data => res.json(data))
});

router.delete('/articles/:id', function(req, res, next) {
  console.log(req.params.id);
  Article.findByIdAndRemove(req.params.id, (err, success) => {
    if (err) return res.status(500).send(err);
    const response = {
      message: "Article successfully deleted",
      id: req.params._id
    };
    return res.status(200).send(response);
  }) 
});

module.exports = router;

