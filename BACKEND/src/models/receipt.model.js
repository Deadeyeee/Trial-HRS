module.exports = (sequelize, DataTypes, Sequelize) => {

    const Receipt = sequelize.define("receipt", {
        id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        type: {
            type: DataTypes.ENUM({
                values: ["or", "ack"], //TODO - ADD MORE TYPES
              }),
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
    return Receipt;
}   