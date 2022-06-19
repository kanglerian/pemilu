'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('prodi', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      nama_prodi: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      kaprodi_id: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      fakultas_id: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('prodi');
  }
};
