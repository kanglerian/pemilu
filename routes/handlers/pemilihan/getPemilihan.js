const { Pemilihan, Paslon, Mahasiswa, Prodi } = require('../../../models');
module.exports = async(req, res) => {
    const pemilihan = await Pemilihan.findAll({
        include: [
            {
                model: Paslon,
                as: 'Paslon',
                attributes: ['id','no_urut','visi','misi'],
                include: [
                    {
                        model: Mahasiswa,
                        as: 'Ketua',
                        attributes: ['nama_lengkap'],
                        include: [
                            { model: Prodi, as: 'Prodi', attributes: ['nama_prodi'] },
                        ]
                    },
                    {
                        model: Mahasiswa,
                        as: 'Wakil',
                        attributes: ['nama_lengkap'],
                        include: [
                            { model: Prodi, as: 'Prodi', attributes: ['nama_prodi'] },
                        ]
                    },
                ]
            },
            {
                model: Mahasiswa,
                as: 'Pemilih',
                attributes: ['id','nim','nama_lengkap'],
                include: [
                    { model: Prodi, as: 'Prodi', attributes: ['nama_prodi'] },
                ]
            },
        ],
    });
    return res.render('pemilihan/index',{
        title: 'Pemilihan',
        layout: 'layouts/dashboard',
        data: pemilihan,
    });
    // return res.json({
    //     status: 'success',
    //     data: pemilihan,
    // });
}