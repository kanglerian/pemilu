const { Prodi, Mahasiswa, Fakultas, Staf } = require('../../../models');

module.exports = async(req, res) => {

    const mahasiswa = await Mahasiswa.findAll({
        include: [
            {
                model: Prodi,
                attributes: ['nama_prodi'],
                include: [
                    { model: Fakultas, as: 'Fakultas', attributes: ['id','nama_fakultas'] },
                    { model: Staf, as: 'Staf', attributes: ['nama_lengkap','jabatan']}
                ]
            },
        ],
        attributes: ['nim','nama_lengkap'],
    });

    // return res.json({
    //     status: 'success',
    //     data: mahasiswa
    // });

    return res.render('mahasiswa/index',{
        title: 'Data Mahasiswa',
        layout: 'layouts/dashboard',
        data: mahasiswa
    });
}