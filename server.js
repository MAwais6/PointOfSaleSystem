const express = require('express');
const util = require('util');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const indexRoutes = require("./routes/index.routes")
const db = require("./models/index.model.js");

var corsOptions = {
  origin: "http://localhost:3000"
};

const port = 3000;

db.sequelize.sync({force: false}).then(() => {
  console.log('Database connected successfully!');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});


app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use('/',  indexRoutes);


app.listen(port, () => console.log(`Example app listening on port ${port}!`));

