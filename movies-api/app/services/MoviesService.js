const fetch = require('node-fetch');
const config = require('../config/config.js');

const getMovies = async (data) => {
    let queryParams = new URLSearchParams(data).toString()

    let fetchData = fetch(`${config.API_URL}?apikey=${config.API_KEY}&${queryParams}`, {
      method: 'GET',
      headers: {
          'Content-type': 'application/json',
          'Accept': 'application/json',
          'Accept-Charset': 'UTF-8'
      }
    }).then(response => {
      return response.json()
    }).then(responseJson => {
        return responseJson;
    })

    return fetchData
}

module.exports = {
  getMovies
}
