var express = require('express');
var router = express.Router();
const { randomBytes } = require('crypto')
const axios = require('axios')

const posts = {}

const getPosts = (req, res) => {
  res.send(posts)
}

const addPosts = async (req, res) => {
  const id = randomBytes(4).toString('hex')
  const post = { title: req.body.title, id }
  posts[id] = post
  
  await axios.post('http://event-bus-serv:8080/events', { type: 'postCreated', data: post })
  res.status(201).send('post added')
}

router.route('/').get(getPosts)
router.route('/create').post(addPosts)

module.exports = router;
