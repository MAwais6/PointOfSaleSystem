module.exports = (sequelize, Sequelize) => {
    const DiscountItems = sequelize.define("DiscountItems", {
        P_ID:{

        },
        D_ID:{

        },
        DI_Percentage: {
            type: Sequelize.INTEGER,
            allowNull: false,
        }
   });

    return DiscountItems;
}