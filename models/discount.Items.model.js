module.exports = (sequelize, Sequelize) => {
    const DiscountItems = sequelize.define("DiscountItems", {
        DI_Percentage: {
            type: Sequelize.INTEGER,
            allowNull: false,
        }
   });
    return DiscountItems;
}