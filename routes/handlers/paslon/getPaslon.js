const { Paslon, Mahasiswa} = require('../../../models');
module.exports = async(req, res) => {
    const paslon = await Paslon.findAll({
        include: [
            {
                model: Mahasiswa,
            },
        ],
    });

    return res.json({
        status: 'success',
        data: paslon
    });
}