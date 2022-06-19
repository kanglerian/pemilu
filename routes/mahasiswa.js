const express = require('express');
const router = express.Router();

const mahasiswaHandlers = require('./handlers/mahasiswa');
/* GET users listing. */
router.get('/', mahasiswaHandlers.getMahasiswa);

module.exports = router;
