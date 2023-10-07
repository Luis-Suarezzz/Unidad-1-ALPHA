const ModalidadesController = require('../controllers/modalidades.controller');
var express = require('express');

var router = express.Router();


router.get('/view', function(req, res, next) {
    const modalidades = ModalidadesController.mostrar();
    res.render('modalidades', {
        title: 'Modalidades',
        modalidades
    });
});

router.get('/', function(req, res, next) {
    const modalidades = ModalidadesController.mostrar();
    res.send(modalidades);
});

router.post('/', function(req, res, next) {
    const idModalidad = ModalidadesController.ingresar(req.body);
    res.json({ idModalidad });
})

module.exports = router;
