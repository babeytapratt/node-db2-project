
exports.seed = function(knex) {
  return knex('cars').insert([
    {vin: '4523584V2456ZLP34555', make: 'Ford', model: 'Mustang GT', milage: 15000, typeOfTransmission: '6 speed manual', statusOfTitle: 'new' },
    {vin: '2584628Z7821BIL58799', make: 'Chevy', model: 'Corvette', milage: 20500, typeOfTransmission: 'automatic', statusOfTitle: 'clean' },
    {vin: '5892365V2516TIL89126', make: 'Dodge', model: 'Dakota', milage: 78258, typeOfTransmission: 'automatic', statusOfTitle: 'salvage' },
    {vin: '8436258L2546POI52168', make: 'Dodge', model: 'Viper', milage: 15200, typeOfTransmission: '6 speed manual', statusOfTitle: 'clean' },
  ]);
};
