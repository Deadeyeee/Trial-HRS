module.exports = (sequelize, DataTypes, Sequelize) => {

    const PaymentMode = sequelize.define("paymentMode", {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        paymentMode: {
            type: DataTypes.ENUM(['Bank Deposit (via Metro Bank)', 'Cash', 'E-Payment (Gcash)']),
            allowNull: false,
        },
        billerName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        accountName: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        accountNumber: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
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
    return PaymentMode;
}