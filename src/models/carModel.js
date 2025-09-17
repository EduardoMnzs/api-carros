const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Car = sequelize.define('Car', {
  model: {
    type: DataTypes.STRING,
    allowNull: false
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  }
}, {
  timestamps: true,
});

module.exports = Car;