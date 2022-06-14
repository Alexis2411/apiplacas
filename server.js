const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ message: "welcome." });


});
const db = require("./app/models");
db.sequelize.sync();

require("./app/routes/placa.routes")(app);

const PORT = process.env.port || 8080;
app.listen(PORT, () => {
    console.log(`servidor corriendo en el puerto ${PORT}.`);
});