// const Sequelize = require('sequelize');
// module.exports = new Sequelize('postgres://localhost:5432/mjpfp'); // why does this not work? will need to ask the TA 

const Sequelize = require('sequelize');
const connection =
  process.env.DATABASE_URL || 'postgres://localhost:5432/mjpfp';
const db = new Sequelize(connection, { logging: false });

module.exports = { db };
