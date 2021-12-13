const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { dbConection } = require('./src/database/config');
const router = require('./src/routes/routes');


dbConection();

const app = express();

// configuracion para que las peticiones se realicen el formato json
app.use(express.json());

// configurando los cors para que las consulta se puedan realizar de diferentes dominios
app.use(cors());

// ruta principal
app.use('/api', router);

// configurando el puerto del backend
app.listen(process.env.PORT, () =>{
    console.log(`Servidor corriendo en el puerto ${4000}`);
});