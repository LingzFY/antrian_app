module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("tbl_example_model", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      uuid: {
        type: Sequelize.STRING,
      },

      string: {
        type: Sequelize.STRING,
      },
      date: {
        type: Sequelize.DATE,
      },
      text: {
        type: Sequelize.TEXT,
      },

      created_at: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable("tbl_example_model");
  },
};
