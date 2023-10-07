const { v4: uuidv4 } = require('uuid');

let modalidades = [
    {
        "modalidad": "Incapacidad",
        "id": "e7b26ae3-ee9a-48ac-97d6-c824641627c0"
    },
    {
        "modalidad": "Soluciones Industriales",
        "id": "186571f2-cf9a-43e2-bb0b-946ad3f7c622"
    }
];

class ModalidadesController {
    ingresar(modalidad) {
        modalidad.id = uuidv4();
        modalidades.push(modalidad);

        return modalidad.id;
    }

    mostrar() {
        return modalidades;
    }

    existeModalidad(idModalidad) {
        let existe = [];

        modalidades.find((m) => {
            if (m.id === idModalidad) {
                existe.push(true);
            }
        });

        return (existe.length)? true : false;
    }
}

module.exports = new ModalidadesController();
