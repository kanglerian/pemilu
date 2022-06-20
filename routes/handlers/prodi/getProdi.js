const { Prodi, Fakultas, Staf } = require('../../../models');

module.exports = async(req, res) => {
    const prodi = await Prodi.findAll({
        include: [
            {model: Fakultas, as: 'Fakultas'},
            {model: Staf, as: 'Staf'},
        ],
    });

    return res.render('prodi/index',{
        title: 'Program Studi',
        layout: 'layouts/dashboard',
        data: prodi
    });

}