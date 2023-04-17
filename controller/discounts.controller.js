const db = require("../models/index.model.js");
const Discounts = db.Discount;
const Op = db.Sequelize.Op;
exports.create = (req, res) => {
  if (!req.body.StartDate) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  const discount = {
    StartDate: req.body.StartDate,
    EndDate: req.body.EndDate
  };
  Discounts.create(discount)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          "Some error occurred while creating the Discount.",
      });
    });
};
exports.findAll = (req, res) => {
    if(req.query.page && req.query.pageSize){
      page = req.query.page
      pageSize = req.query.pageSize
      condition = { offset:(page*1-1)*pageSize, limit:pageSize*1 }
    }
    else{
      EndDate = req.query.EndDate;
      condition = EndDate ? {where: { EndDate: { [Op.lte]: `%${EndDate}%` } } } : {}
    }
    console.log(condition)
    Discounts.findAll(condition)
      .then((data) => {
        res.send(data)
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Products.",
        })
      })
};
exports.findOne = (req, res) => {
  const D_ID = req.params.D_ID;
  Discounts.findByPk(D_ID)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Discount with id=${D_ID}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Discount with id=" + D_ID,
      });
    });
};
exports.update = (req, res) => {
  const D_ID = req.params.D_ID;
  Discounts.update(req.body, {
    where: { D_ID: D_ID },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Discount was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Discount with id=${D_ID}. Maybe Discount was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Discount with id=" + D_ID,
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const D_ID = req.params.D_ID;

  Discounts.destroy({
    where: { D_ID: D_ID },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Discount was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Discount with id=${D_ID}. Maybe Discount was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Discount with id=" + D_ID,
      });
    });
};
exports.deleteAll = (req, res) => {
    Discounts.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Discounts were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Discounts.",
      });
    });
};
