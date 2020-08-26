var express = require('express');
var router = express.Router();

const getModeration = (req, res) => {
  console.log('GET MODERATION')
  res.send({})
}

router.route('/tester').get(getModeration);

module.exports = router;
