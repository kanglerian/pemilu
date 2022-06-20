const express = require('express');
const router = express.Router();

const pemilihanHandlers = require('./handlers/pemilihan');
/* GET users listing. */
router.get('/', pemilihanHandlers.getPemilihan);

module.exports = router;
