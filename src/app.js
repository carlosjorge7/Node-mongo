/** SERVER EN NODEJS Y EXPRESS */
const express = require('express');
const morgan = require('morgan');

const app = express();

const { mongoose } = require('./db');

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares (morgan: nos da info del tipo de peticiones)
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/productos', require('./routes/productos.routes'));

// Starting server (nodemon) y express
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});