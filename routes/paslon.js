const express = require('express');
const router = express.Router();

const paslonHandlers = require('./handlers/paslon');
/* GET users listing. */
router.get('/', paslonHandlers.getPaslon);

module.exports = router;
