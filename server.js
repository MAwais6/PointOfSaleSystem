const express = require('express');
const app = express();
const port = 3000;

const connection = require('./db');


const indexRoutes = require("./routes/index.routes")


app.use('/',  indexRoutes);


app.listen(port, () => console.log(`Example app listening on port ${port}!`));

