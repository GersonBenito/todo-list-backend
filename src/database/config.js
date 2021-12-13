const { connect } = require('mongoose');

const dbConection = async() =>{

    try {
        await connect(process.env.DB_CONEXION, {
            useNewUrlParser: true,
        });

        console.log('Conectado a la base de datos');
    } catch (error) {
        console.log('Ocurrio un error al intentar conectarse a la base de datos',error);
    }
}

module.exports = { dbConection }