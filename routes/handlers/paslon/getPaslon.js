const { Paslon, Mahasiswa} = require('../../../models');
module.exports = async(req, res) => {
    const paslon = await Paslon.findAll({
        include: [
            {
                model: Mahasiswa,
                as: 'Ketua',
            },
            {
                model: Mahasiswa,
                as: 'Wakil',
            },
        ],
        where: {
            id: 1
        }
    });

    return res.render('paslon/index',{
        title: 'Pasangan Calon BEM',
        layout: 'layouts/dashboard',
        data: paslon,
        url: req.url
    });
}