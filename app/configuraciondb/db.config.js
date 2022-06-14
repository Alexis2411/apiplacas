module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "1234",
    DB: "api",
    dialect: "postgres",
    pool: {
        Max: 5,
        Min: 0,
        acquire: 30000,
        idle: 10000
    }
};