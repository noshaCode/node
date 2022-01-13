const express = require('express');
const routerFr = express.Router();

const controller = require('../controller/controller')

routerFr.get('/', controller.sendMyName)

routerFr.get('/books', controller.sendMyName)

routerFr.get('/clothes', controller.simple)

module.exports = routerFr;