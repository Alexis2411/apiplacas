const db = require("../models");
const Placa = db.placas;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    console.log(req.body);
    if (!req.body.license_plate) {
        res.status(400).send({
            message: "content can not be emty"
        });
        return;
    }

    const placa = {
        license_plate: req.body.license_plate,
        score: req.body.score,
        dscore: req.body.score
    };

    Placa.create(placa)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || " some error ocurred while creating the tutorial."
            });
        });
};

exports.findAll = (req, res) => {
    const license_plate = req.query.license_plate;
    var condition = license_plate ? {
        nombreC: {
            [Op.iLike]: `%${license_plate}%` + `%`
        }
    } : null;

    Placa.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })

    .catch(err => {
        res.status(500).send({
            message: err.message || "some error mientras retrieving tutorials."
        });
    });
};

exports.update = (req, res) => {
    const id = req.params.id;
    Tutorial.update(req.body, {
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "tutorial was update succefylly."

                });
            } else {
                res.send({
                    message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "error actualizando xd" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Tutorial.destroy({
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "tutorial se borro xd"
                });
            } else {
                res.send({
                    message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "no se pudo borrar por id xd " + id
            });
        });
};

exports.deleteAll = (req, res) => {
    Tutorial.destroy({
            where: [],
            truncate: false
        })
        .then(nums => {
            res.send({ message: `${nums} Tutorials were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "error alv"
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Placa.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);

            } else {
                res.status(404).send({
                    message: `Cannot find Tutorial with id=${id}.`
                });
            }
        })

    .catch(err => {
        res.status(500).send({
            message: "error tutorial with id " + id
        });
    });

};

exports.findAllrefri = (req, res) => {
    Tutorial.findAll({ where: { estadoR: false } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "errorxd"
            });
        });
};

exports.findAllpuerta = (req, res) => {
    Tutorial.findAll({ where: { estadoP: false } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "errorxd"
            });
        });
};