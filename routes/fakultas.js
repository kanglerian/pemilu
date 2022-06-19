const express = require('express');
const router = express.Router();

const fakultasHandlers = require('./handlers/fakultas');
/* GET users listing. */
router.get('/', fakultasHandlers.getFakultas);

module.exports = router;
