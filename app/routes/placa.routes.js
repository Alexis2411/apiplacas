module.exports = app => {
    const placas = require("../controllers/placa.controller.js");

    var router = require("express").Router();
    //path para crear
    router.post("/", placas.create);

    //path para mostrar todos y encontrar por nombre
    router.get("/", placas.findAll);

    //path para encontrar anormalidades en refri
    router.get("/b", placas.findAllrefri);

    //path para encontrar anormalidades en puerta
    router.get("/a", placas.findAllpuerta);

    //path para encontrar por id
    router.get("/:id", placas.findOne);

    //path para actualizar
    router.put("/:id", placas.update);

    //path para borrar por id
    router.delete("/:id", placas.delete);

    //path para borrar todos
    router.delete("/", placas.deleteAll);

    // si ocupas alguna otra cosa mas o que te explique algo enviame mensaje xd
    app.use('/api/placas', router);

};