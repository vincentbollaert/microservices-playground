var express = require('express');
var router = express.Router();

const posts = {}

const addEvents = (req, res) => {
  // console.log('req', req.body)
  const { type, data } = req.body
  if (type === 'postCreated') {
    posts[data.id] = { ...data, comments: [] }
    console.log('POST CREATEDS!!!!!!')
  }
  if (req.body.type === 'commentCreated') {
    posts[data.postId].comments.push(data)
    console.log('COMMENT CREATEDS!!!!!!', posts, data)
    console.log('posts', posts)
  }
  res.send({})
}

const getPosts = (req, res) => {
  res.send(posts)
}

router.route('/posts').get(getPosts)
router.route('/events').post(addEvents)

module.exports = router
