module.exports = (sequelize, DataTypes, Sequelize) => {

    const ReservationSummary = sequelize.define("reservationSummary", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        checkInDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        checkOutDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        numberOfNights: {
            type: DataTypes.INTEGER,
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