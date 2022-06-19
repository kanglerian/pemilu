module.exports = (sequelize, DataTypes) => {
    const Mahasiswa = sequelize.define('Mahasiswa', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        nim: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        nama_lengkap: {
            type: DataTypes.STRING,
            allowNull: false
        },
        prodi_id: {
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
        tableName: 'mahasiswa',
        timestamps: true
    });

    Mahasiswa.associate = (models) => {
        Mahasiswa.belongsTo(models.Prodi, {foreignKey: 'prodi_id'});
        models.Prodi.belongsTo(models.Fakultas, {foreignKey: 'fakultas_id'});
        models.Prodi.belongsTo(models.Staf, {foreignKey: 'kaprodi_id'});
    };

    return Mahasiswa;
}