const { Sequelize } = require("sequelize/types");

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;