const express = require('express');
const router = express.Router();
const { Pemilihan } = require('../models');
/* GET home page. */
router.get('/', (req, res, next) => {
  const jumlah = Pemilihan.findAll();
  res.render('dashboard', { 
    title: 'Dashboard',
    layout: 'layouts/dashboard',
    jumlah: jumlah.length
  });
});

module.exports = router;
