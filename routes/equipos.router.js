const EquiposController = require('../controllers/equipos.controller');
var express = require('express');

var router = express.Router();


router.get('/view', function(req, res, next) {
    const equipos = EquiposController.mostrar();
    res.render('equipos', {
        equipos: equipos,
        title: 'Equipos'
    });
});

router.get('/', function(req, res, next) {
    const equipos = EquiposController.mostrar();
    res.send(equipos);
});

router.get('/:idCategoria', function(req, res, next) {
    const equipos = EquiposController.mostrarPorCategoria(req.params.idCategoria);
    res.send(equipos);
});

router.post('/', function(req, res, next) {
    const { integrantes, categorias } = req.body;
    const idEquipo = EquiposController.insertar(integrantes, categorias);
    res.send({ idEquipo });
});

router.put('/:id', function(req, res, next) {
    const { integrantes, categorias } = req.body;
    EquiposController.editar(req.params.id, integrantes, categorias);
    res.send(EquiposController.mostrar());
});

router.delete('/:id', function(req, res, next) {
    EquiposController.eliminar(req.params.id);
    res.send(EquiposController.mostrar());
});

router.delete('/:idEquipo/:idCategoria', function(req, res, next) {
    const { idEquipo, idCategoria } = req.params;
    EquiposController.eliminarInscripcion(idEquipo, idCategoria);
    res.send(EquiposController.mostrar());
})

module.exports = router;
