// app.js
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Configuración de CORS
app.use(cors());

// Middleware para procesar solicitudes con cuerpo JSON
app.use(bodyParser.json());

// Conexión a la base de datos
const baseDatos = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tienda', // Cambia esto a tu base de datos
    port: 3306 
});

// Conexión a la base de datos
baseDatos.connect((err) => {
    if (err) {
        throw err; // informar el error
    }
    console.log('Conectado a MySQL');
});

// Ruta para crear un nuevo cliente
app.post('/api/customers', (req, res) => {
    const customer = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone || null,
        address: req.body.address || null
    };

    // Procedemos a insertar en la BD
    const insertSQL = 'INSERT INTO customers (name, email, phone, address) VALUES (?, ?, ?, ?)';
    baseDatos.query(insertSQL, [customer.name, customer.email, customer.phone, customer.address], (err, result) => {
        if (err) {
            console.error('Error al insertar datos:', err);
            return res.status(500).send('Error en el servidor');
        }
        res.status(201).send({ message: 'Cliente Insertado Correctamente', customerId: result.insertId });
    });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
