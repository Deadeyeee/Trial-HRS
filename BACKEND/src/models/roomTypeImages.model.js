module.exports = (sequelize, DataTypes, Sequelize) => {

    const RoomTypeImages = sequelize.define("roomTypeImages", {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        roomImages: {
            allowNull: true,
            type: DataTypes.STRING,
        },
    },
    {
        timestamps: true,
        underscrored: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    },
    )
    return RoomTypeImages;
}   