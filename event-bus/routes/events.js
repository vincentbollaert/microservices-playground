var express = require('express');
const axios = require('axios');
var router = express.Router();

const addEvent = (req, res) => {
  const event = req.body
  axios.post('http://localhost:8000/events', event)
  axios.post('http://localhost:8001/events', event)
  axios.post('http://localhost:8002/events', event)
  res.send({ status: 'okay '})
}
router.route('/').post(addEvent);

module.exports = router;
