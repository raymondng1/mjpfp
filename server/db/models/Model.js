const Sequelize = require('sequelize');
const { db } = require('./../db.js');

const Model = db.define('model', {
	date: {
		type: Sequelize.STRING,
		allowNull: false
	},
	to_do: {
		type: Sequelize.STRING
	}
});

module.exports = { Model };
