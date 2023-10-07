const PatrocinantesController = require('../controllers/patrocinantes.controller');
var express = require('express');

var router = express.Router();


router.get('/view', function(req, res, next) {
    const patrocinantes = PatrocinantesController.mostrar();
    res.render('patrocinantes', {
        title: 'Patrocinantes',
        patrocinantes: patrocinantes
    });
});

router.get('/', function(req, res, next) {
    res.send(PatrocinantesController.mostrar());
});

router.post('/', function(req, res, next) {
    const { patrocinante, idEquipo } = req.body;
    const idPatrocinante = PatrocinantesController.insertar(patrocinante, idEquipo);
    res.json({ idPatrocinante });
});

module.exports = router;
