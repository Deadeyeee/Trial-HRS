module.exports = (sequelize, DataTypes, Sequelize) => {

    const Amenities = sequelize.define("amenities", {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        amenityName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        amenityRate: {
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
    return Amenities;
}