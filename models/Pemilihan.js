module.exports = (sequelize, DataTypes) => {
    const Pemilihan = sequelize.define('Pemilihan', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        pemilih_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        paslon_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            field: 'created_at',
            allowNull: false
        },
        updatedAt: {
            type: DataTypes.DATE,
            field: 'updated_at',
            allowNull: false
        }
    }, {
        tableName: 'pemilihan',
        timestamps: true
    });

    Pemilihan.associate = (models) => {
        Pemilihan.belongsTo(models.Paslon, {as: 'Paslon', foreignKey: 'paslon_id'});
        Pemilihan.belongsTo(models.Mahasiswa, {as: 'Pemilih', foreignKey: 'pemilih_id'});
    };

    return Pemilihan;
}