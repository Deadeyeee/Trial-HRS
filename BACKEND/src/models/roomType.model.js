module.exports = (sequelize, DataTypes, Sequelize) => {

    const RoomType = sequelize.define("roomType", {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        roomType: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        roomNumber: {
            type: DataTypes.SMALLINT,
            allowNull: false,
        },
        roomStatus: {
            type: DataTypes.ENUM(['VACANT', 'OCCUPIED', 'MAINTENANCE']),
            allowNull: false,
        },
        roomRate: {
            type: DataTypes.DECIMAL(19, 4),
            allowNull: false,
        },
        maxAdultOccupancy: {
            type: DataTypes.TINYINT,
            allowNull: false,
        },
        maxKidsOccupancy: {
            type: DataTypes.TINYINT,
            allowNull: false,
        },
        roomDescription: {
            allowNull: false,
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
    return RoomType;
}