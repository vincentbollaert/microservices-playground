var express = require('express');
var router = express.Router();

const getEvents = (req, res) => {
  if (req.body.type === 'postCreated') {
    console.log('POST CREATEDS!!!!!!')
  }
  if (req.body.type === 'commentCreated') {
    console.log('COMMENT CREATEDS!!!!!!')
  }
  res.send({})
}

const postEvents = (req, res) => {
  res.send({})
}

router.route('/').get(getEvents).post(postEvents)

module.exports = router;
