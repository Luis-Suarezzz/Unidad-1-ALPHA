const CategoriasController = require('../controllers/categorias.controller');
var express = require('express');

var router = express.Router();


router.get('/', function(req, res, next) {
    const categorias = CategoriasController.mostrar();
    res.send(categorias);
});

router.post('/', function(req, res, next) {
    const { categoria, idModalidad } = req.body;
    const idCategoria = CategoriasController.ingresar(categoria, idModalidad);
    res.json({ idCategoria });
});

router.put('/:id', function(req, res, next) {
    const { categoria, idModalidad } = req.body;
    CategoriasController.editar(req.params.id, categoria, idModalidad);
    res.send(CategoriasController.mostrar());
});

router.delete('/:id', function(req, res, next) {
    CategoriasController.eliminar(req.params.id);
    res.send(CategoriasController.mostrar());
});

module.exports = router;
