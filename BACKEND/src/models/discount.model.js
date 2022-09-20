module.exports = (sequelize, DataTypes, Sequelize) => {

    const Discount = sequelize.define("discount", {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        discountType: {
            type: DataTypes.ENUM(['PWD', 'SENIOR CITIZEN']),
            allowNull: false,
        },
        discountPercentage: {
            type: DataTypes.DECIMAL(5, 2),
            allowNull: false,
        },
    },
    {
        timestamps: true,
        underscrored: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    },
    )
    return Discount;
}