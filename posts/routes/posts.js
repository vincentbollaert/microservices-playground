var express = require('express');
var router = express.Router();
const { randomBytes } = require('crypto')

const posts = {}

const getPosts = (req, res) => {
  res.send(posts)
}

const addPosts = (req, res) => {
  const id = randomBytes(4).toString('hex')
  posts[id] = { title: req.body.title, id }
  res.send('post added')
}

router.route('/').get(getPosts).post(addPosts)

module.exports = router;
