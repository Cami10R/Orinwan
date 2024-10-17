const express  = require('express');

const app = express()

app.get('/', (req, res)=>{
    res.send('Welcome to my project'); 
});

//### RUTA
app.get('/uno', (req, res)=>{
    res.send('Welcome Talento Tech 284 ');
});

//### RUTA
app.get('/final', (req, res)=>{
    res.send('Welcome a la creacion de tu proyecto final ');
});

app.listen(3000, ()=>{
    console.log('listening on port 3000 EN http://localhost:3000');
});

