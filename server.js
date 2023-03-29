const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

const db = require("./models/index.model.js");
var corsOptions = {
  origin: "http://localhost:8081",
};
app.use(cors(corsOptions));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use("/api/discounts", require("./routes/discounts.routes"))
app.use("/api/discountItems", require("./routes/discountItems.routes"))
app.use("/api/products", require("./routes/products.routes"))
app.use('/',  require("./routes/index.routes"));

db.sequelize.sync().then(() => {
  console.log('Database connected successfully!');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});