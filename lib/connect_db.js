const Sequelize = require('sequelize');
const sequelize = new Sequelize('nodejs_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  sync: { force: true },
  operatorsAliases: false,
  define: {
    freezeTableName: true,
    timestamps: false
  },
});
var db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;