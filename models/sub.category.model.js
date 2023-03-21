module.exports = (sequelize, Sequelize) => {
    const SubCategory = sequelize.define("SubCategory", {
        SubCat_ID: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            get() {
                return 'myPrefix' + this.getDataValue('SubCat_ID').toString().padStart(6, '0');
            }
        },
        SubCat_Name : {
            type: Sequelize.STRING(64),
            allowNull: false,
            validate:{
                is: `^[A-Za-z]+(?:[\\s-][A-Za-z]+)*$`
            }
        },
        SubCat_Description: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                len: [10, 200] // validates that the address is between 10 and 200 characters long
            }
        }
    });

    return SubCategory;
}