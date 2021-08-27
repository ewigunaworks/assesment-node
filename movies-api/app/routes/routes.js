const router = require('express').Router();
const movies = require("../controllers/MoviesController.js");

router.get('/', movies.getHome)
router.get('/movies/search', movies.getSearch)
router.get('/movies/detail/:id', movies.getDetail)


module.exports = router
