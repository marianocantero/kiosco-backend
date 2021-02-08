const express = require('express');
require('dotenv').config()


//CREAR EL SERVIDOR DE EXPRESS
const app = express();

app.use( express.static('public'));

//Rutas
app.use('/api/productos', require('./routes/productos'))



//Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log('Escuchando en el puerto', process.env.PORT,);
})