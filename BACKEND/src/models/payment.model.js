module.exports = (sequelize, DataTypes, Sequelize) => {

    const Payment = sequelize.define("payment", {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        paymentMade: {
            type: DataTypes.DECIMAL(19, 4),
            allowNull: false,
        },
        grandTotal: {
            type: DataTypes.DECIMAL(19, 4),
            allowNull: false,
        },
        
        balance: {
            type: DataTypes.DECIMAL(19, 4),
            allowNull: false,
        },
        discountValid: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        paymentType: {
            type: DataTypes.ENUM(['Full Payment', 'Down Payment']),
            defaultValue: 'Down Payment',
            allowNull: false,
        },
        paymentStatus: {
            type: DataTypes.ENUM(['paid', 'reserved', 'pending', 'cancelled']),
            defaultValue: 'pending',
            allowNull: false,
        },
        paymentImage: {
            type: DataTypes.STRING,
            allowNull: true,
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