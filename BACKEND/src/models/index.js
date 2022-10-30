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
db.amenities = require('./amenities.model.js')(sequelize, Sequelize, DataTypes)
db.discount = require('./discount.model.js')(sequelize, Sequelize, DataTypes)
db.paymentMode = require('./paymentMode.model.js')(sequelize, Sequelize, DataTypes)
db.reservation = require('./reservation.model.js')(sequelize, Sequelize, DataTypes)
db.room = require('./room.model.js')(sequelize, Sequelize, DataTypes)
db.reservationSummary = require('./reservationSummary.model.js')(sequelize, Sequelize, DataTypes)
db.orderedAmenities = require('./orderedAmenities.model.js')(sequelize, Sequelize, DataTypes)
db.payment = require('./payment.model.js')(sequelize, Sequelize, DataTypes)
db.services = require('./services.model.js')(sequelize, Sequelize, DataTypes)
db.usedServices = require('./usedServices.model.js')(sequelize, Sequelize, DataTypes)
db.roomTypeImages = require('./roomTypeImages.model.js')(sequelize, Sequelize, DataTypes)
db.conversation = require('./conversation.model.js')(sequelize, Sequelize, DataTypes)
db.message = require('./message.model.js')(sequelize, Sequelize, DataTypes)


// db.amenities.bulkCreate([
//     {amenityName: "Extra Mattress", amenityRate: 500},
//     {amenityName: "Extra Pillow", amenityRate: 100},
//     {amenityName: "Extra Blanket", amenityRate: 100},
//     {amenityName: "Extra Person", amenityRate: 250},
//     {amenityName: "Extra Time(Rate/hour)", amenityRate: 100},
// ]).then(() => console.log("Users data have been saved"));

// db.services.bulkCreate([
//     { servicesName: "Free Wifi" },
//     { servicesName: "Television" },  
//     { servicesName: "Car Parking" },
//     { servicesName: "Aircondition" },
//     { servicesName: "Reception" },
//     { servicesName: "Smoking" },
//     { servicesName: "Toiletries" },
//     { servicesName: "Clean Washroom" },
//     { servicesName: "Water Bottle" },
//     { servicesName: "Quality Linen" },
//     { servicesName: "Towel" },
//     { servicesName: "Bed" },
//     { servicesName: "Refrigerator" },
//     { servicesName: "Oven" },
//   ]).then(() => console.log("Users data have been saved"));

// db.discount.bulkCreate([
//     { discountType: "Person With Disabilities (PWD)", discountPercentage: 0.2},
//     { discountType: "Senior Citizen", discountPercentage: 0.2},
//     { discountType: "No Discount", discountPercentage:  0},
// ]).then(() => console.log("Discount data have been saved"));
// // // 
// db.paymentMode.bulkCreate([
//     { paymentMode: "Bank Deposit (via Metro Bank)", billerName: "Metro Bank", accountName: "Elbert Egot", accountNumber: "23423849234298"},
//     { paymentMode: "E-Payment (Gcash)", billerName: "Gcash", accountName: "Elbert Egot", accountNumber: "09566728906"},
//     { paymentMode: "Pay at The Hotel", billerName: "Gcash", accountName: "Elbert Egot", accountNumber: "09566728906"},
// ]).then(() => console.log("Payment Mode data have been saved"));



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


// One user has many reservation
db.reservation.belongsTo(db.guestInformation, {
    foreignKey: { name: "guest_id", allowNull: false },
    foreignKeyConstraint: true,
});

db.guestInformation.hasOne(db.reservation, {
    as: "guest",
    foreignKey: "guest_id",
});


// One roomtype has many room
db.room.belongsTo(db.roomType, {
    foreignKey: { name: "roomType_id", allowNull: false },
    foreignKeyConstraint: true,
});

db.roomType.hasOne(db.room, {
    as: "room_Type",
    foreignKey: "roomType_id",
});


// One reservationSummary has many reservation
db.reservationSummary.belongsTo(db.reservation, {
    foreignKey: { name: "reservation_id", allowNull: false },
    foreignKeyConstraint: true,
});

db.reservation.hasOne(db.reservationSummary, {
    as: "reservation",
    foreignKey: "reservation_id",
});


// One reservationSummary has many room
db.reservationSummary.belongsTo(db.room, {
    foreignKey: { name: "room_id", allowNull: false },
    foreignKeyConstraint: true,
});

db.room.hasOne(db.reservationSummary, {
    as: "reservation",
    foreignKey: "room_id",
});


// One orderedAmenities has one amenity
db.orderedAmenities.belongsTo(db.reservationSummary, {
    foreignKey: { name: "reservationSummary_id", allowNull: false },
    foreignKeyConstraint: true,
});

db.reservationSummary.hasMany(db.orderedAmenities, {
    as: "amenity",
    foreignKey: "reservationSummary_id",
});


// One orderedAmenities has one amenity
db.orderedAmenities.belongsTo(db.amenities, {
    foreignKey: { name: "amenity_id", allowNull: false },
    foreignKeyConstraint: true,
});

db.amenities.hasOne(db.orderedAmenities, {
    as: "amenity",
    foreignKey: "amenity_id",
});



// One paymentmode has one payment
db.payment.belongsTo(db.paymentMode, {
    foreignKey: { name: "paymentMode_id", allowNull: false },
    foreignKeyConstraint: true,
});

db.paymentMode.hasOne(db.payment, {
    as: "paymentMode_",
    foreignKey: "paymentMode_id",
});


// One discount has one payment
db.payment.belongsTo(db.discount, {
    foreignKey: { name: "discount_id", allowNull: false },
    foreignKeyConstraint: true,
});

db.discount.hasOne(db.payment, {
    as: "discount_",
    foreignKey: "discount_id",
});


// One reservation has one payment
db.reservation.belongsTo(db.payment, {
    foreignKey: { name: "payment_id", allowNull: false },
    foreignKeyConstraint: true,
});

db.payment.hasOne(db.reservation, {
    as: "payment",
    foreignKey: "payment_id",
});





//usedservices has many services
db.usedServices.belongsTo(db.services, {
    foreignKey: { name: "services_id", allowNull: false },
    foreignKeyConstraint: true,
});

db.services.hasMany(db.usedServices, {
    as: "services",
    foreignKey: "services_id",
});


// One reservation has one payment
db.usedServices.belongsTo(db.roomType, {
    foreignKey: { name: "roomType_id", allowNull: false },
    foreignKeyConstraint: true,
});

db.room.hasMany(db.usedServices, {
    as: "usedServices",
    foreignKey: "roomType_id",
});


//roomTypeImages has many roomType
db.roomTypeImages.belongsTo(db.roomType, {
    foreignKey: { name: "roomType_id", allowNull: false },
    foreignKeyConstraint: true,
});

db.roomType.hasMany(db.roomTypeImages, {
    as: "roomTypeImages",
    foreignKey: "roomType_id",
});



//messages has one conversation
db.message.belongsTo(db.conversation, {
    foreignKey: { name: "conversation_id", allowNull: false },
    foreignKeyConstraint: true,
});

db.conversation.hasOne(db.message, {
    as: "message",
    foreignKey: "conversation_id",
});


//conversation has manny guest
db.conversation.belongsTo(db.guestInformation, {
    foreignKey: { name: "from_guest_id", allowNull: false },
    foreignKeyConstraint: true,
    as: "conversationFrom",
});

// db.guestInformation.hasMany(db.conversation, {
//     as: "conversationFrom",
//     foreignKey: "from_guest_id",
// });

//conversation has manny guest
db.conversation.belongsTo(db.guestInformation, {
    foreignKey: { name: "to_guest_id", allowNull: false },
    foreignKeyConstraint: true,
    as: "conversationTo",
});

// db.guestInformation.hasMany(db.conversation, {
//     as: "conversationTo",
//     foreignKey: "to_guest_id",
// });



db.sequelize.sync({ force: false }).then(() => {
    console.log('\n\nDatabase is Running smoothly!\n\n')
}).catch((err) => {
    console.log("\n\nDATABSE ERROR!!!!: " + err + "\n\n")
});

module.exports = db;