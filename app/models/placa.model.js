module.exports = (sequelize, Sequelize) => {
    const Placa = sequelize.define("placas", {
        license_plate: {
            type: Sequelize.STRING
        },
        score: {
            type: Sequelize.DOUBLE
        },
        dscore: {
            type: Sequelize.DOUBLE
        }
    });
    return Placa;
};