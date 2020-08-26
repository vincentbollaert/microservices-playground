var express = require('express');
var router = express.Router();
const { randomBytes } = require('crypto')
const axios = require('axios')

const comments = {}

const addComment = async (req, res) => {
  const commentId = randomBytes(4).toString('hex')
  const { id: postId } = req.params
  const comment = { id: commentId, postId, content: req.body.content }
  const postComments = comments[postId] || []
  postComments.push(comment)
  comments[postId] = postComments

  await axios.post('http://localhost:8080/events', { type: 'commentCreated', data: comment })
  res.status(201).send(comment)
}

const getComments = (req, res) => {
  res.send(comments[req.params.id] || [])
}

const addEvent = (req, res) => {
  console.log('event received, ', req.body)
  res.send({})
}

router.route('posts/:id/comments').get(getComments).post(addComment)
router.route('/events').post(addEvent)

module.exports = router;
