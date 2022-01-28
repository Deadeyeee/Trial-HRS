const db = require("../models");

const User = db.users

exports.create = async(req,res)=>{
    try {
        const new_user =  await User.create(req.body);
        return res.status(200).send(new_user);
    } catch (error) {
        return res.status(400).send(error.message);
    }
};

exports.findAll = async(req, res) =>{
    const user = await User.findAll();
    return res.status(200).send(user);
};
