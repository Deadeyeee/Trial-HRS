module.exports = (sequelize, DataTypes, Sequelize) => {

    const OrderedAmenities = sequelize.define("orderedAmenities", {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        amenityName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        amenityRate: {
            type: DataTypes.DECIMAL(19, 4),
            allowNull: false,
        },
        total: {
            type: DataTypes.DECIMAL(19, 4),
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
    return OrderedAmenities;
}