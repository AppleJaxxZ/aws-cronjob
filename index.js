const axios = require('axios');

exports.handler = function (event, context) {
    axios.post().then((data) => {
        console.log(data).catch(error => console.log(error))
    })
}

