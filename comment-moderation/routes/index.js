var express = require('express');
var router = express.Router();
const axios = require('axios')

const addEvent = async (req, res) => {
  const { type, data } = req.body

  if (type === 'commentCreated') {
    console.log('moderate comment')
    const status = data.content.includes('orange') ? 'rejected' : 'approved'

    await axios.post('http://event-bus-serv:8080/events', {
      type: 'commentModerated',
      data: { ...data, status }
    })
  }

  res.send({})
}

router.route('/events').post(addEvent);

module.exports = router;
