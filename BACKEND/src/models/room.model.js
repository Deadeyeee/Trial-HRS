module.exports = (sequelize, DataTypes, Sequelize) => {

    const Room = sequelize.define("room", {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        roomNumber: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        roomStatus: {
            type: DataTypes.ENUM(['Vacant', 'Occupied', 'Maintenance']),
            allowNull: false,
            defaultValue: 'Vacant'
        },
    },
    {
        timestamps: true,
        underscrored: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    },
    )
    return Room;
}