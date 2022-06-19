module.exports = (sequelize, DataTypes) => {
    const Staf = sequelize.define('Staf', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        nik: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        nama_lengkap: {
            type: DataTypes.STRING,
            allowNull: false
        },
        jabatan: {
            type: DataTypes.STRING,
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
        tableName: 'staf',
        timestamps: true
    });

    Staf.associate = function(models) {
        Staf.hasMany(models.Prodi, {foreignKey: 'kaprodi_id'});
    };
    
    return Staf;
}