const express = require('express');
const router = express.Router();
const controller = require('../controller/controller')

router.get('/books', controller.simple)
router.get('/clothes', controller.sendMyName)

module.exports = router;