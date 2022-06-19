module.exports = (sequelize, DataTypes) => {
    const Paslon = sequelize.define('Paslon', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        ketua_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        wakil_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        visi: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        misi: {
            type: DataTypes.TEXT,
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
        tableName: 'paslon',
        timestamps: true
    });

    Paslon.associate = (models) => {
        Paslon.belongsTo(models.Mahasiswa,{foreignKey: 'ketua_id'});
        Paslon.belongsTo(models.Mahasiswa,{foreignKey: 'wakil_id'});
    };

    return Paslon;
}