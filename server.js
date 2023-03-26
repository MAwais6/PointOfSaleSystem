const express = require('express');
const util = require('util');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const indexRoutes = require("./routes/index.routes")

const port = 3000;

const db = require("./models/index.model.js");

db.sequelize.sync().then(() => {
  console.log('Database connected successfully!');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});


app.use(cors());
app.use(bodyParser.json());
app.use('/',  indexRoutes);

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

