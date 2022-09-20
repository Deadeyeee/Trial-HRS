module.exports = (sequelize, DataTypes, Sequelize) => {

    const Reservation = sequelize.define("reservation", {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        reservationNumber: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        reservationDate: {
            type: DataTypes.DATE,
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
        reservationStatus: {
            type: DataTypes.ENUM(['PENDING', 'PAID', 'UNSETTLED']),
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
    return Reservation;
}