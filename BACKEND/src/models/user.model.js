
const bcrypt = require('bcrypt');
module.exports = (sequelize, DataTypes, Sequelize) => {

    const User = sequelize.define("user", {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {},
        },
        contactNumber: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isNumeric: true, 
                len: [11, 13],
            },
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {},
        },
        emailVerified:{
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        password: {
            allowNull: true,
            type: DataTypes.STRING,
        },
        role: {
            type: DataTypes.ENUM({
              values: ["ADMIN", "STAFF", "CUSTOMER", "NON-USER"], //TODO - ADD MORE TYPES
            }),
            defaultValue: "CUSTOMER",
            allowNull: false,
          }, 
    },
    {
        hooks: {
            beforeCreate: async (user) => {
                if (user.password) {
                const salt = await bcrypt.genSaltSync(10, 'a');
                user.password = bcrypt.hashSync(user.password, salt);
                }
            },
            beforeUpdate: async (user) => {
                if (user.password) {
                const salt = await bcrypt.genSaltSync(10, 'a');
                user.password = bcrypt.hashSync(user.password, salt);
                }
            }
            },
            instanceMethods: {
                validPassword: (password) => {
                 return bcrypt.compareSync(password, this.password);
                }
               }
    },
    {
        timestamps: true,
        underscrored: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    },
    )
    User.prototype.validPassword = async (password, hash) => {
        return await bcrypt.compareSync(password, hash);
       }
    return User;
}