const Cars = require('../cars-model');

const validateCarId = async (res, req, next) => {
    const { id } = req.params;
    try {
        const car = await Cars.get(id);
        if (!car) {
            res.status(404).json({ message: `User with ID ${id} not found`});
        } else {
            req.car = car;
            next();
        }
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving the car' });
    }
};

const validateCar = (req, res, next) => {
    if (!req.body) {
        res.status(400).json({ message: 'Missing car data' });
    } else if
        (!req.body.vin || !req.body.make || !req.body.model || !req.body.mileage || !req.body.transmissionType) {
            res.status(400).json({ message: 'Missing required fields' })
        } else {
            next();
        }

};

module.exports = {
    validateCar,
    validateCarId
};
