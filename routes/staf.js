const express = require('express');
const router = express.Router();

const stafHandlers = require('./handlers/staf');
router.get('/', stafHandlers.getStaf);

module.exports = router;