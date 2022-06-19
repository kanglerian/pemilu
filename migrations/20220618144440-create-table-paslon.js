'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('paslon', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      ketua_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      wakil_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      visi: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      misi: {
        type: Sequelize.TEXT,
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
    await queryInterface.dropTable('paslon');
  }
};
