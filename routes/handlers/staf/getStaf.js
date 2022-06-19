const { Staf } = require('../../../models');

module.exports = async(req,res) => {
    const staf = await Staf.findAll();

    return res.json({
        status: 'succes',
        data: staf
    });
}