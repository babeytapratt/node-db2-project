
exports.seed = function(knex) {
  // Truncate the db to reset those ids
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {vin: '4523584V2456ZLP34555', make: 'Ford', model: 'Mustang GT', milage: '15,000', TransmissionType: '6 speed manual', conditionOfTitle: 'new' },
        {vin: '2584628Z7821BIL58799', make: 'Chevy', model: 'Corvette', milage: '20,500', TransmissionType: 'automatic', conditionOfTitle: 'clean' },
        {vin: '5892365V2516TIL89126', make: 'Dodge', model: 'Dakota', milage: '78,258', TransmissionType: 'automatic', conditionOfTitle: 'salvage' },
        {vin: '8436258L2546POI52168', make: 'Dodge', model: 'Viper', milage: '15,200', TransmissionType: '6 speed manual', conditionOfTitle: 'clean' },
      ]);
    });
};
