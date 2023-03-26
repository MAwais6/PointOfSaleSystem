const db = require("../models/index.model.js");
const Customer = db.Customers;
const Op = db.Sequelize.Op;

// Create and Save a new Customer
exports.create = (req, res) => {
    // Validate request
    if (!req.body.C_Name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Customer
    const customer = {
        C_Name: req.body.C_Name,
        C_Username: req.body.C_Username,
        C_Address: req.body.C_Address,
        C_Email: req.body.C_Email,
        C_Phone: req.body.C_Phone,
        C_Password: req.body.C_Password,
        C_Status: req.body.C_Status ? req.body.C_Status : false
    };

    // Save Customer in the database
    Customer.create(customer)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Customer."
            });
        });
}