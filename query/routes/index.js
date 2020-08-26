var express = require('express');
var router = express.Router();

const posts = {}

const addEvents = (req, res) => {
  const { type, data } = req.body
  if (type === 'postCreated') {
    posts[data.id] = data
    console.log('POST CREATEDS!!!!!!')
  }
  if (req.body.type === 'commentCreated') {
    const postToUpdate = posts[data.id]
    postToUpdate.comments ? postToUpdate.comments.push(data) : [data]
    console.log('COMMENT CREATEDS!!!!!!')
  }
  res.send({})
}

const getPosts = (req, res) => {
  console.log(req.body)
  if (req.body.type === 'postCreated') {
    console.log('POST CREATEDS!!!!!!')
  }
  if (req.body.type === 'commentCreated') {
    console.log('COMMENT CREATEDS!!!!!!')
  }
  res.send({})
}

router.route('/posts').get(getPosts)
router.route('/events').post(addEvents)

module.exports = router
