const Logs = require('../services/LogsService.js');
const Movies = require('../services/MoviesService');

const getHome = async (req, res) => {
  return res.json("INDEX DASHBOARD");
}

const getSearch = async (req, res) => {
  try {
    let date = new Date()
    let logData = {
      url: req.headers.host,
      path: req.route.path,
      parameters: JSON.stringify(req.query),
      created_at: date,
    }

    await Logs.createLog(logData)

    let response = await Movies.getMovies(req.query)
    return res.json(response);
  } catch (e) {
    console.log(e)
    return res.status(500).json({
        success: false,
        message: e,
    });
  }
}

const getDetail = async (req, res) => {
  try {
    let date = new Date()

    let params = {
      i: req.params.id
    }

    let logData = {
      url: req.headers.host,
      path: req.path,
      parameters: JSON.stringify(params),
      created_at: date,
    }

    await Logs.createLog(logData)

    let response = await Movies.getMovies(params)
    return res.json(response);
  } catch (e) {
    return res.status(500).json({
        success: false,
        message: e,
    });
  }
}
module.exports = {
  getHome,
  getSearch,
  getDetail
}
