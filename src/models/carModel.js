// src/models/carModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Car = sequelize.define('Car', {
  // O ID será criado automaticamente pelo Sequelize (chave primária, auto-incremento)
  model: {
    type: DataTypes.STRING,
    allowNull: false
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  price: {
    type: DataTypes.DECIMAL(10, 2), // Ex: 150000.50
    allowNull: false
  }
}, {
  // Opções adicionais do modelo
  timestamps: true, // Cria os campos createdAt e updatedAt automaticamente
});

module.exports = Car;