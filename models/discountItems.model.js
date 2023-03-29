module.exports = (sequelize, Sequelize) => {
    const DiscountItems = sequelize.define("DiscountItems", {
        DI_ID: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            get() {
                return this.getDataValue('DI_ID');
            }
        },
        P_ID: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        DI_Percentage: {
            type: Sequelize.INTEGER,
            allowNull: false,
        }
   });

    return DiscountItems;
}