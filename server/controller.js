const axios = require('axios');

module.exports = {
  waveformPlayer: function(req, res) {
    console.log('waveform player')
    axios(`http://18.219.124.16/api/waveformplayer/${req.params.id}`)
    .then(function(response) {
     res.send(response.data)
    })  
    .catch(function(error) {
      console.log(error);
    })
  },
  comments: function(req, res) {
    console.log('comments')
    axios.get(`http://comments-server.2u82f9p8mx.us-east-2.elasticbeanstalk.com/api/comments/${req.params.id}`)
    .then(function (response) {
     res.send(response.data);
    })
    .catch(function (error) {
     // console.log(error);
    });
  }
}