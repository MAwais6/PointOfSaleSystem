// const Customer = require("../models/CustomerModel")

// exports.signupPage = (req,res) => {
//     Customer.create({
//         CustomerName: req.body.CustomerName,
//         CustomerEmail: req.body.CustomerEmail, 
//         CustomerPhone: req.body.CustomerPhone ,
//         CustomerAddress: req.body.CustomerAddress,
//         CustomerPassword:req.body.CustomerPassword ,
//         CustomerUsername:req.body.CustomerUsername ,
//         CustomerStatus: "inactive"
//       }).then(res => {
//         console.log(res)
//       }).catch((error) => {
//         console.error('Failed to create a new record : ', error);
//       });
// }