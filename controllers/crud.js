const conextion = require('../database/db');
const prueba = 0;

exports.save = (req, res) => {
    const user = req.body.user;
    const rol = req.body.rol;
    conextion.query('INSERT INTO users SET ?', { users: user, rol: rol }, (error, results) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/');
        }
    })
}

exports.update = (req, res) => {
    const id = req.body.id;
    const user = req.body.users;
    const rol = req.body.rol;

    conextion.query('UPDATE users SET ? WHERE id = ?', [{ users: user, rol: rol }, id], (error, results) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/');
        }
    })
}