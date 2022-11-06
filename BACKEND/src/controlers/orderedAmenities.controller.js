const { amenities } = require("../models");
const db = require("../models");
const OrderedAmenities = db.orderedAmenities;
// import Logo from "../../../FRONTEND/src/images/logo.png";

// const test = async () => {

//     const amenity = await amenities.findByPk('1fa05924-2dce-49ff-91e5-e3d1a9bd905b')

//     console.log('\n\n\n\n\n', amenity.amenityName, '\n\n\n\n\n',)
//     console.log('\n\n\n\n\n', amenity.amenityRate, '\n\n\n\n\n',)
//     console.log('\n\n\n\n\n', amenity.amenityRate, '\n\n\n\n\n',)
// }

// test()

exports.create = async (req, res) => {
    try {

        let data = req.body;
        const amenity = await amenities.findByPk(req.body.amenity_id)
        data.amenityName = amenity.amenityName
        data.amenityRate = amenity.amenityRate

        data.total = parseFloat(amenity.amenityRate) * req.body.quantity

        const new_orderedAmenities = await OrderedAmenities.create(req.body);

        return res.status(200).send({ new_orderedAmenities });
    } catch (error) {
        return res.status(200).send(error.message);
    }
};

exports.findAll = async (req, res) => {
    const orderedAmenities = await OrderedAmenities.findAll(
        { include: { all: true, nested: true } });
    return res.status(200).send(orderedAmenities);
};

exports.findOne = async (req, res) => {
    const orderedAmenities = await OrderedAmenities.findByPk(req.params.id,
        { include: { all: true, nested: true } }
    );
    return res.status(200).send(orderedAmenities);
};

exports.update = async (req, res) => {
    try {
        let data = req.body

        const orderedAmenitiesdata = await OrderedAmenities.findByPk(req.params.id)

        data.total = parseFloat(orderedAmenitiesdata.amenityRate) * req.body.quantity

        await OrderedAmenities.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        return res.status(200).send("Ordered amenities information updated successfully");
    } catch (error) {
        return res.status(400).send(error.message);
    }
};

exports.delete = async (req, res) => {
    try {
        await OrderedAmenities.destroy({
            where: {
                id: req.params.id,
            },
        });
        return res.status(200).send("Ordered amenities deleted successfully.");
    } catch (error) {
        return res.status(400).send(error.message);
    }
};
