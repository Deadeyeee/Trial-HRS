module.exports = (sequelize, DataTypes, Sequelize) => {

    const Services = sequelize.define("services", {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        servicesName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                args: true,
                msg: "This service already exist.",
              },
        },
    },
    {
        timestamps: true,
        underscrored: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    },
    )
    return Services;
}