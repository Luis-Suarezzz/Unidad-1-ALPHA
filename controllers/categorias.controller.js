const ModalidadesController = require('./modalidades.controller');
const { v4: uuidv4 } = require('uuid');

let categorias = [
    {
        "id": "50bcfbdf-f87e-46f3-835b-55d90e037bd1",
        "categoria": "Zumo",
        "idModalidad": "e7b26ae3-ee9a-48ac-97d6-c824641627c0"
    },
    {
        "id": "19eb4bdb-7819-4e92-ace2-8fb025b82bac",
        "categoria": "Boxeo",
        "idModalidad": "e7b26ae3-ee9a-48ac-97d6-c824641627c0"
    },
    {
        "id": "463ef141-2e3e-43ab-8ee4-1ac8cc7064e8",
        "categoria": "Base",
        "idModalidad": "186571f2-cf9a-43e2-bb0b-946ad3f7c622"
    }
];

class CategoriasController {
    ingresar(categoria, idModalidad) {
        if (ModalidadesController.existeModalidad(idModalidad)) {
            const id = uuidv4();
            categorias.push({ id, categoria, idModalidad });

            return id;
        }
    }

    editar(id, categoria, idModalidad) {
        if (ModalidadesController.existeModalidad(idModalidad)) {
            for (const c of categorias) {
                if (c.id === id) {
                    c.categoria = categoria;
                    c.idModalidad = idModalidad;
                }
            }
        }
    }

    eliminar(id) {
        for (let i = 0; i < categorias.length; i++) {
            const categoria = categorias[i];
            
            if (categoria.id === id) {
                categorias.splice(i, 1);
            }
        }
    }

    mostrar() {
        return categorias;
    }

    existe(id) {
        let existe = [];

        categorias.find((c) => {
            if (c.id === id) {
                existe.push(true);
            }
        });

        return (existe.length)? true : false;
    }
}

module.exports = new CategoriasController();
