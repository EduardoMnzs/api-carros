// src/controllers/carController.js
const Car = require('../models/carModel');

// POST: Criar um novo carro
exports.createCar = async (req, res) => {
  try {
    const { model, year, price } = req.body;
    const newCar = await Car.create({ model, year, price });
    res.status(201).json({ message: 'Carro criado com sucesso!', car: newCar });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar carro: ' + error.message });
  }
};

// GET: Obter todos os carros
exports.getAllCars = async (req, res) => {
  try {
    const cars = await Car.findAll();
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar carros: ' + error.message });
  }
};

// GET: Obter um carro por ID
exports.getCarById = async (req, res) => {
  try {
    const { id } = req.params;
    const car = await Car.findByPk(id);
    if (!car) {
      return res.status(404).json({ message: 'Carro não encontrado.' });
    }
    res.status(200).json(car);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar carro: ' + error.message });
  }
};

// PUT: Atualizar um carro por ID
exports.updateCar = async (req, res) => {
  try {
    const { id } = req.params;
    const { model, year, price } = req.body;
    const car = await Car.findByPk(id);
    if (!car) {
      return res.status(404).json({ message: 'Carro não encontrado.' });
    }
    await car.update({ model, year, price });
    res.status(200).json({ message: 'Carro atualizado com sucesso!', car });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar carro: ' + error.message });
  }
};

// DELETE: Deletar um carro por ID
exports.deleteCar = async (req, res) => {
  try {
    const { id } = req.params;
    const car = await Car.findByPk(id);
    if (!car) {
      return res.status(404).json({ message: 'Carro não encontrado.' });
    }
    await car.destroy();
    res.status(200).json({ message: 'Carro deletado com sucesso!' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar carro: ' + error.message });
  }
};