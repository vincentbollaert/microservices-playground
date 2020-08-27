var express = require('express');
var router = express.Router();
const { handleEvent, postsData } = require('../utils')

const addEvents = (req, res) => {
  const { type, data } = req.body
  handleEvent({ type, data })
  res.send({})
}

const getPosts = (req, res) => {
  res.send(postsData)
}

router.route('/posts').get(getPosts)
router.route('/events').post(addEvents)

module.exports = router
