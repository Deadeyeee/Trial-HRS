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
            type: DataTypes.ENUM(['PENDING', 'RESERVED', 'CHECKED-IN', 'CHECKED-OUT', 'NO-SHOW', 'CANCELLED']),
            allowNull: false,
            defaultValue: 'PENDING',
        },
        bookingReferenceNumber: {
            type: DataTypes.BIGINT(12),
            unique: true,
            autoIncrement: true,
        },
        others: {
            type: DataTypes.DECIMAL(19, 2),
            allowNull: false,
            defaultValue: 0,
        },
        roomType: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        roomNumber: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        roomRate: {
            type: DataTypes.DECIMAL(19, 2),
            allowNull: false,
        },
        total: {
            type: DataTypes.DECIMAL(19, 4),
            allowNull: false,
        },

    },
        {
            initialAutoIncrement: 100000000000,
            timestamps: true,
            underscrored: true,
            createdAt: "created_at",
            updatedAt: "updated_at",
        },
    )
    return ReservationSummary;
}