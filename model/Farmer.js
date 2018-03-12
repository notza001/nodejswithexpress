var connection = require('./../lib/connect_db');

const Farmer = connection.sequelize.define('farmer', {
  firstname: {
    type: connection.Sequelize.STRING
  },
  lastname: {
    type: connection.Sequelize.STRING
  },
  phone: {
    type: connection.Sequelize.STRING
  },
  address: {
    type: connection.Sequelize.STRING
  },
  create_at: {
    type: connection.Sequelize.STRING
  },
  update_at: {
    type: connection.Sequelize.STRING
  },
});

module.exports = Farmer;
