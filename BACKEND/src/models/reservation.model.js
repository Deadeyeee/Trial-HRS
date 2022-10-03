module.exports = (sequelize, DataTypes, Sequelize) => {

    const Reservation = sequelize.define("reservation", {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        reservationReferenceNumber: {
            type: DataTypes.STRING,
            defaultValue: Math.random().toString(36).slice(2),
            unique: true,
            allowNull: false,
        },
        reservationDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        reservationStatus: {
            type: DataTypes.ENUM(['PENDING', 'RESERVED', 'UNSETTLED', 'BOOKED', 'DEPARTED', 'NO SHOW']),
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
    return Reservation;
}