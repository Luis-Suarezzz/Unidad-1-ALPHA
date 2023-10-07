const EquiposController = require('./equipos.controller');
const { v4: uuidv4 } = require('uuid');

let patrocinantes = [
    {
        "id": "6d886d60-f0f4-4c42-8566-dcaf13232f67",
        "patrocinante": "Confitería el Loro",
        "idEquipo": "ce3c0cd8-14a8-4929-bd88-df8ba8e16a47"
    }
];

class PatrocinantesController {
    insertar(patrocinante, idEquipo) {
        if (EquiposController.existe(idEquipo)) {
            const id = uuidv4();
            patrocinantes.push({ id, patrocinante, idEquipo });
            return id;
        }
    }

    mostrar() {
        return patrocinantes;
    }
}

module.exports = new PatrocinantesController();
