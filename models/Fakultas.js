module.exports = (sequelize, DataTypes) => {
    const Fakultas = sequelize.define('Fakultas', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        nama_fakultas: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
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
        tableName: 'fakultas',
        timestamps: true
    });

    Fakultas.associate = (models) => {
        Fakultas.hasMany(models.Prodi, {foreignKey: 'fakultas_id'});
    };

    return Fakultas;
}