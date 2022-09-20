module.exports = (sequelize, DataTypes, Sequelize) => {

    const ReservationSummary = sequelize.define("reservationSummary", {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
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
    return ReservationSummary;
}