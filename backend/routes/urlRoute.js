const express= require('express');
const router = express.Router();
const urlController = require('../controllers/urlController')


router.post('/shorten', urlController.shortenUrl);

router.get('/all/myurls', urlController.getallUrls);

module.exports = router;