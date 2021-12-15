const express = require('express');
const res = require('express/lib/response');
const conexion = require('./database/db');

const router = express.Router();

router.get('/', (rep, res) => {
    conexion.query('SELECT * FROM users', (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('index', { results: results });
        }
    })
});

// RUTA PARA CREAR REGISTROS

router.get('/create', (req, res) => {
    res.render('create');
})

// RUTA PARA EDITAR REGISTRO
router.get('/edit/:id', (req, res) => {

    const id = req.params.id;

    conexion.query('SELECT * FROM users WHERE id=?', [id], (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('edit', { user: results[0] });
        }
    })
})

//RUTA PARA ELIMINAR REGISTRO
router.get('/delete/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('DELETE FROM users WHERE id = ?', [id], (error, results) => {
        if (error) {
            throw error;
        } else {
            res.redirect('/');
        }
    })
})


const crud = require('./controllers/crud');
router.post('/save', crud.save);
router.post('/update', crud.save);

module.exports = router;