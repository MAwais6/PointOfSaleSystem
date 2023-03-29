const db = require("../models/index.model.js");
const Products = db.Products;
const Op = db.Sequelize.Op;
exports.create = (req, res) => {
  if (!req.body.P_Name) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  const product = {
        P_Name: req.body.P_Name,
        P_Description: req.body.P_Description,
        P_BasePrice: req.body.P_BasePrice,
        P_SellPrice: req.body.P_SellPrice,
        P_Quantity: req.body.P_Quantity,
        P_BarCode: req.body.P_BarCode
  };
  Products.create(product)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Product.",
      });
    });
};
exports.findAll = (req, res) => {
  const P_Name = req.query.P_Name;
  var condition = P_Name ? { P_Name: { [Op.like]: `%${P_Name}%` } } : null;
  Products.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Products.",
      });
    });
};
exports.findOne = (req, res) => {
  const P_ID = req.params.P_ID;
  Products.findByPk(P_ID)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Product with id=${P_ID}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Product with id=" + P_ID,
      });
    });
};
exports.update = (req, res) => {
  const P_ID = req.params.P_ID;
  Products.update(req.body, {
    where: { P_ID: P_ID },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Product was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Product with id=${P_ID}. Maybe Product was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Product with id=" + P_ID,
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const P_ID = req.params.P_ID;

  Products.destroy({
    where: { P_ID: P_ID },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Product was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Product with id=${P_ID}. Maybe Product was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Product with id=" + P_ID,
      });
    });
};
exports.deleteAll = (req, res) => {
    Products.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Products were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Products.",
      });
    });
};