const express = require('express');
const cors = require('cors');
const carRoutes = require('./routes/carRoutes');
const { swaggerUi, swaggerDocs } = require('./config/swagger');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', carRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

module.exports = app;