const express = require('express');
const util = require('util');
const app = express();
const port = 3000;

const db = require("./models/index.model.js");

db.sequelize.sync().then(() => {
  console.log('Database connected successfully!');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});

const indexRoutes = require("./routes/index.routes")

app.use('/',  indexRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

