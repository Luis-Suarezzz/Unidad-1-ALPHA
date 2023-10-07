var express = require('express');

const modalidadesRouter = require('./modalidades.router');
const categoriasRouter = require('./categorias.router');
const equiposRouter = require('./equipos.router');
const patrocinantesRouter = require('./patrocinantes.router');

var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Concurso Robótica' });
});

router.use('/modalidades', modalidadesRouter);
router.use('/categorias', categoriasRouter);
router.use('/equipos', equiposRouter);
router.use('/patrocinantes', patrocinantesRouter);

module.exports = router;
