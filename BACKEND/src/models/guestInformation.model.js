
module.exports = (sequelize, DataTypes, Sequelize) => {

    const GuestInfo = sequelize.define("guestInformation", {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        firstName: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate:{
                isAlpha: {
                    msg: "Invalid name. Please type letters only."
                },
            },
        },
        lastName: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate:{
                isAlpha: {
                    msg: "Invalid name. Please type letters only."
                },
            },
        },
        birthDate: {
            type: DataTypes.DATEONLY,
            allowNull: true,
        },
        age: {
            type: DataTypes.INTEGER(3),
            allowNull: true,
        },
        gender: {
            type: DataTypes.ENUM({
                values: ["MALE", "FEMALE", "PREFFER NOT TO SAY"], //TODO - ADD MORE TYPES
              }),
            allowNull: true,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        profilePicture: {
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
    return GuestInfo;

}