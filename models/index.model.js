const db = require("../db.js")

db.Customers = require("./customer.model")(db.sequelize,db.Sequelize);
db.category = require("./category.model")(db.sequelize,db.Sequelize);
db.subCategory = require("./sub.category.model")(db.sequelize,db.Sequelize);

db.orders = require("./order.model")(db.sequelize,db.Sequelize);
db.ordersItems = require("./order.items.model")(db.sequelize,db.Sequelize);
// Associations 
db.category.hasMany(db.subCategory, {foreignKey: 'Cat_ID'});
db.subCategory.belongsTo(db.category, {foreignKey: 'Cat_ID'});

module.exports = db
