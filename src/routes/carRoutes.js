// src/routes/carRoutes.js
const express = require('express');
const router = express.Router();
const carController = require('../controllers/carController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Car:
 *       type: object
 *       required:
 *         - model
 *         - year
 *         - price
 *       properties:
 *         id:
 *           type: integer
 *           description: O ID auto-gerado do carro.
 *         model:
 *           type: string
 *           description: O modelo do carro.
 *         year:
 *           type: integer
 *           description: O ano de fabricação do carro.
 *         price:
 *           type: number
 *           format: float
 *           description: O preço do carro.
 *       example:
 *         model: "Toyota Corolla"
 *         year: 2023
 *         price: 150000.00
 */

/**
 * @swagger
 * tags:
 *   - name: Carros
 *     description: API para gerenciar carros
 */

/**
 * @swagger
 * /api/cars:
 *   get:
 *     summary: Retorna a lista de todos os carros
 *     tags: [Carros]
 *     responses:
 *       200:
 *         description: A lista de carros
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Car'
 *   post:
 *     summary: Cria um novo carro
 *     tags: [Carros]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Car'
 *     responses:
 *       201:
 *         description: Carro criado com sucesso!
 *       500:
 *         description: Erro no servidor
 */
router.route('/cars')
    .get(carController.getAllCars)
    .post(carController.createCar);

/**
* @swagger
* /api/cars/{id}:
*   get:
*     summary: Obtém um carro pelo ID
*     tags: [Carros]
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: integer
*         required: true
*         description: O ID do carro
*     responses:
*       200:
*         description: Detalhes do carro por ID
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Car'
*       404:
*         description: Carro não encontrado
*   put:
*     summary: Atualiza um carro pelo ID
*     tags: [Carros]
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: integer
*         required: true
*         description: O ID do carro
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/Car'
*     responses:
*       200:
*         description: Carro atualizado com sucesso!
*       404:
*         description: Carro não encontrado
*   delete:
*     summary: Deleta um carro pelo ID
*     tags: [Carros]
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: integer
*         required: true
*         description: O ID do carro
*     responses:
*       200:
*         description: Carro deletado com sucesso!
*       404:
*         description: Carro não encontrado
*/
router.route('/cars/:id')
    .get(carController.getCarById)
    .put(carController.updateCar)
    .delete(carController.deleteCar);

module.exports = router;