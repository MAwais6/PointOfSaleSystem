const express = require('express');
const app = express();
const port = 3000;

const indexRoutes = require("./routes/index.routes")

app.get('/',  indexRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

