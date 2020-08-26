var express = require('express');
const axios = require('axios');
var router = express.Router();

const events = []

const addEvent = (req, res) => {
  const event = req.body
  events.push(event)

  axios.post('http://localhost:8000/events', event)
  axios.post('http://localhost:8001/events', event)
  axios.post('http://localhost:8002/events', event)
  axios.post('http://localhost:8010/events', event)
  res.send({ status: 'okay '})
}

const getEvents = (req, res) => {
  res.send(events)
}

router.route('/events').post(addEvent).get(getEvents);

module.exports = router;
