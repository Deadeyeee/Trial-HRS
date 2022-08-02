const dbConf = require('../../config/db.config.js')
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
    dbConf.database,
    dbConf.user,
    dbConf.password, {
    host: dbConf.host,
    dialect: dbConf.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConf.pool.max,
        min: dbConf.pool.min,
        acquire: dbConf.pool.acquire,
        idle: dbConf.pool.idle,

    }
}

)

sequelize.authenticate().then(() => {
    console.log('Connected..');
}).catch(err => {
    console.log('Error' + err)
});

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;


//Init models here
db.user = require('./user.model.js')(sequelize, Sequelize, DataTypes);
db.guestInformation = require('./guestInformation.model.js')(sequelize, Sequelize, DataTypes)
db.roomType = require('./roomType.model.js')(sequelize, Sequelize, DataTypes)


// RELATIONSHIPS
// One user has one guest information

db.guestInformation.belongsTo(db.user, {
    foreignKey: { name: "user_id", allowNull: false },
    foreignKeyConstraint: true,
});

db.user.hasOne(db.guestInformation, {
    as: "guest",
    foreignKey: "user_id",
});




db.sequelize.sync({ force: false }).then(() => {
    console.log('yes resync done')
});
module.exports = db;