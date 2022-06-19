'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('staf', { 
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      nik: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      nama_lengkap: {
        type: Sequelize.STRING,
        allowNull: false
      },
      jabatan: {
        type: Sequelize.STRING,
        allowNull: true
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('staf');
  }
};
