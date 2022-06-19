'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('pemilihan', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      pemilih_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      paslon_id: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('pemilihan');
  }
};
