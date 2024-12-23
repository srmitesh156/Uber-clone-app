const captainModel = require('../models/captain.model');
const captainService = require('../services/captain.service');
const { validationResult } = require('express-validator');

module.exports.registerCaptain = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password, color, plate, capacity, vehicleType } = req.body;

    const hashdPassword = await captainModel.hashPassword(password);

    const captain = await captainService.createCaptain({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashdPassword,
        color,
        plate,
        capacity,
        vehicleType
    });

    const token = captain.generateAuthToken();

    res.status(201).json({ token: token, captain: captain });
};