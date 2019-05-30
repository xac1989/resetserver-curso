require('./config/config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const pathBaseUsuarios = '/usuarios';

app.get(pathBaseUsuarios, function(req, res) {
    res.json('get usuario');
});

app.post(pathBaseUsuarios, function(req, res) {
    let body = req.body;
    if (body.nombre === undefined) {
        res.status(400).json({ ok: false, mensaje: "nombre es necesario" });
    } else {
        res.json({ user: body });
    }
});

app.put(pathBaseUsuarios + '/:id', function(req, res) {
    let id = req.params.id;
    res.json({
        id
    });
});

app.delete(pathBaseUsuarios, function(req, res) {
    res.json('delete usuario');
});

app.listen(process.env.PORT, () => console.log('escuchando puerto', process.env.PORT));