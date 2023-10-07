const CategoriasController = require('./categorias.controller');
const { v4: uuidv4 } = require('uuid');

let equipos = [
    {
        "id": "ce3c0cd8-14a8-4929-bd88-df8ba8e16a47",
        "integrantes": [
            "José",
            "Simón"
        ],
        "categorias": [
            "50bcfbdf-f87e-46f3-835b-55d90e037bd1",
            "19eb4bdb-7819-4e92-ace2-8fb025b82bac"
        ]
    },
    {
        "id": "8d6eeeec-a554-47ec-b3e9-558b7fbc522b",
        "integrantes": [
            "Luis",
            "Alirio"
        ],
        "categorias": [
            "463ef141-2e3e-43ab-8ee4-1ac8cc7064e8"
        ]
    },
    {
        "id": "431f9cb1-f93b-462a-add1-caebc03ce117",
        "integrantes": [
            "Juan",
            "Samuel"
        ],
        "categorias": [
            "463ef141-2e3e-43ab-8ee4-1ac8cc7064e8"
        ]
    }
];

class EquiposController {
    insertar(integrantes, categorias) {
        let existenCategorias = [1];

        for (const categoria of categorias) {
            if (!CategoriasController.existe(categoria)) {
                existenCategorias.splice(0, 1);
                break;
            }
        }

        if (existenCategorias.length) {
            const id = uuidv4();
            equipos.push({ id, integrantes, categorias });
            return id;
        }
    }

    mostrar() {
        return equipos;
    }

    editar(idEquipo, integrantes, categorias) {
        let existenCategorias = [1];

        for (const categoria of categorias) {
            if (!CategoriasController.existe(categoria)) {
                existenCategorias.splice(0, 1);
                break;
            }
        }

        if (existenCategorias.length) {
            equipos.find((e) => {
                if (e.id === idEquipo) {
                    e.integrantes = integrantes;
                    e.categorias = categorias;
                }
            });
        }
    }

    eliminar(id) {
        for (let i = 0; i < equipos.length; i++) {
            const equipo = equipos[i];
            
            if (equipo.id === id) {
                equipos.splice(i, 1);
            }
        }
    }

    mostrarPorCategoria(idCategoria) {
        if (CategoriasController.existe(idCategoria)) {
            let equiposInscritos = [];

            for (const equipo of equipos) {
                for (const categoria of equipo.categorias) {
                    if (categoria === idCategoria) {
                        equiposInscritos.push(equipo);
                    }
                }
            }

            return equiposInscritos;
        }
    }

    eliminarInscripcion(idEquipo, idCategoria) {
        if (CategoriasController.existe(idCategoria)) {
            for (const equipo of equipos) {
                if (equipo.id === idEquipo) {
                    const i = equipo.categorias.indexOf(idCategoria);
                    console.log('i ' + i);
                    equipo.categorias.splice(i, 1);
                }
            }
        }
    }

    existe(id) {
        let existe = [];

        equipos.find((e) => {
            if (e.id === id) {
                existe.push(true);
            }
        });

        return (existe.length)? true : false;
    }
}

module.exports = new EquiposController();
