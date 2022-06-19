module.exports = (sequelize, DataTypes) => {
    const Prodi = sequelize.define('Prodi', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        nama_prodi: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        kaprodi_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        fakultas_id: {
            type: DataTypes.INTEGER,
            allowNull: true
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
        tableName: 'prodi',
        timestamps: true
    });

    Prodi.associate = function(models) {
        Prodi.belongsTo(models.Fakultas, {foreignKey: 'fakultas_id'});
        Prodi.belongsTo(models.Staf, {foreignKey: 'kaprodi_id'});
    };

    return Prodi;
}