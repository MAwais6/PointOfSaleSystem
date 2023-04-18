const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

const indexRoutes = require("./routes/index.routes")
const db = require("./models/index.model.js");

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


db.sequelize.sync({force: true}).then(() => {
  console.log('Database connected successfully!');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});


app.use('/',  indexRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
}
);

