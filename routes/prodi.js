const express = require('express');
const router = express.Router();

const prodiHandlers = require('./handlers/prodi');
/* GET users listing. */
router.get('/', prodiHandlers.getProdi);

module.exports = router;
