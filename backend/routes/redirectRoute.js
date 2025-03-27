const express= require('express');
const router = express.Router();
const urlController = require('../controllers/redirecturlController')


router.get('/:shorturl', urlController.redirectUrl);

module.exports = router;