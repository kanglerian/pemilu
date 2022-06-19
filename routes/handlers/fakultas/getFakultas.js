const { Fakultas } = require('../../../models');

module.exports = async(req, res) => {
    const fakultas = await Fakultas.findAll();

    return res.json({
        status: 'success',
        data: fakultas
    });
}