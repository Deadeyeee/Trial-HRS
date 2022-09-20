module.exports = (sequelize, DataTypes, Sequelize) => {

    const Payment = sequelize.define("payment", {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        totalBalance: {
            type: DataTypes.DECIMAL(19, 4),
            allowNull: false,
        },
        paymentMade: {
            type: DataTypes.DECIMAL(19, 4),
            allowNull: false,
        },
        paymentStatus: {
            type: DataTypes.ENUM(['paid', 'reserved', 'pending', 'cancelled']),
            defaultValue: 'pending',
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
    return Payment;
}