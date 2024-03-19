const router = require('express').Router();
const api_routes = require('./api-route');
const html_routes = require('./html-route');


router.use('/api', api_routes);
router.use('/', html_routes);


module.exports = router;