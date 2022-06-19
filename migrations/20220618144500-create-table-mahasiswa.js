'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('mahasiswa', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      nim: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      nama_lengkap: {
        type: Sequelize.STRING,
        allowNull: false
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
    await queryInterface.dropTable('mahasiswa');
  }
};
