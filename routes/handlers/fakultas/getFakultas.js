const { Fakultas } = require('../../../models');

module.exports = async(req, res) => {
    const fakultas = await Fakultas.findAll();
    return res.render('fakultas/index',{
        title: 'Fakultas',
        layout: 'layouts/dashboard',
        data: fakultas
    });
}