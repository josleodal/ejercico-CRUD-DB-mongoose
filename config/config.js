const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: './env/.env' });


const dbConnection = async () => {
    try {
        console.log('MONGO_URI:', process.env.MONGO_URI); 
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Base de datos conectada con éxito');
    } catch (error) {
        console.error(error);
        throw new Error('Error a la hora de iniciar la base de datos');
    }
};

module.exports = {
    dbConnection,
};
