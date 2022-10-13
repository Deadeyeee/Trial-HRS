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
        kids: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        adults: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        specialInstrcution: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        bookingStatus: {
            type: DataTypes.ENUM(['PENDING','RESERVED', 'CHECKED-IN', 'CHECKED-OUT', 'NO-SHOW']),
            allowNull: false,
            defaultValue: 'PENDING',
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