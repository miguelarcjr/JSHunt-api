const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

//Conectando com o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// Importando models
requireDir('./src/models');

// recebendo todas as requisições e enviando para routes.js
app.use('/api', require("./src/routes"));

app.listen(3001);