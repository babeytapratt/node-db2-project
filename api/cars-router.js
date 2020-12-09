const express = require('express');

const Cars = require('./cars-model');

const middleware = require('./middleware/middleware');

const router = express.Router();

router.get('/', (req, res) => {
    Cars.get()
        .then(cars => {
            res.status(200).json(cars);
        })
        .catch(error => {
            console.log(error.message);
            res.status(500).json({ message: 'Error retrieving the cars'});
        });
});

router.get('/:id', middleware.validateCarId, (req, res) => {
    res.status(200).json(req.car);
});

router.post('/', middleware.validateCar, (req, res) => {
    Cars.insert(req.body)
        .then(car => {
            res.status(201).json(car);
        })
        .catch(error => {
            console.log(error.message);
            res.status(500).json({ message: 'There was an error while saving the cars to the database' });
        });
});

router.put('/:id', middleware.validateCarId, (req, res) => {
    const changes = req.body;
    Cars.update(req.params.id, changes)
        .then(car => {
            res.status(200).json(car);
        })
        .catch(error => {
            console.log(error.message);
            res.status(500).json({ message: 'The car information could not be updated' });
        });
});

router.delete('/:id', middleware.validateCarId, (req, res) => {
    Cars.remove(req.params.id)
        .then(count => {
            count > 0;
                res.status(200).json({ message: 'The car has been removed' });
        })
        .catch(error => {
            console.log(error.message);
            res.status(500).json({ message: 'The car could not be removed' });
        });
});

module.exports = router;
