var express = require('express');
var router = express.Router();
const { randomBytes } = require('crypto')
const axios = require('axios')

const comments = {}

const addComment = async (req, res) => {
  const commentId = randomBytes(4).toString('hex')
  const { id: postId } = req.params
  const comment = { id: commentId, postId, content: req.body.content, status: 'pending' }
  const postComments = comments[postId] || []
  postComments.push(comment)
  comments[postId] = postComments

  await axios.post('http://event-bus-serv:8080/events', { type: 'commentCreated', data: comment })
  res.status(201).send(comment)
}

const getComments = (req, res) => {
  res.send(comments[req.params.id] || [])
}

const addEvent = async (req, res) => {
  const { type, data } = req.body

  if (type === 'commentModerated') {
    const commentToUpdate = comments[data.postId].find(x => x.id === data.id)
    console.log('commentToUpdate', commentToUpdate)
    commentToUpdate.status = data.status
    await axios.post('http://event-bus-serv:8080/events', { type: 'commentUpdated', data: commentToUpdate })
  }
  res.send({})
}

router.route('/posts/:id/comments').get(getComments).post(addComment)
router.route('/events').post(addEvent)

module.exports = router;
