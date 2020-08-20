var express = require('express');
var router = express.Router();

const receiveEvent = (req, res) => {
  console.log('event received, ', req.body)
  res.send({})
}
router.route('/').post(receiveEvent)

module.exports = router;
