var connection = require('./../lib/connect_db');

const User = connection.sequelize.define('users', {
    username: {
      type: connection.Sequelize.STRING
    },
    password: {
      type: connection.Sequelize.STRING
    },
    email: {
      type: connection.Sequelize.STRING
    },
    full_name: {
      type: connection.Sequelize.STRING
    },
    role: {
      type: connection.Sequelize.STRING
    }
  });
  
  module.exports = User;
