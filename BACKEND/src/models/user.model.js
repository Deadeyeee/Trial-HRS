
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
            unique: {
              args: true,
              msg: "Username already in use!",
            },
        },
        contactNumber: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            validate: {},
            unique: {
              args: true,
              msg: "Phone number already in use",
            },
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {},
            unique: {
                args: true,
                msg: "Email address already in use!",
            },
        },
        emailVerified:{
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        emailVerification: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        password: {
            allowNull: true,
            type: DataTypes.STRING,
        },
        role: {
            type: DataTypes.ENUM({
              values: ["ADMIN", "STAFF", "CUSTOMER"], //TODO - ADD MORE TYPES
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
            beforeUpdate:async (user) => {
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