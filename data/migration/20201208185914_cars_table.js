
exports.up = function(knex) {
  return knex.schema.createTable('cars', table => {
      table.increments();
      table.varchar('vin').notNullable();
      table.text('make', 128).notNullable();
      table.text('model', 128).notNullable();
      table.integer('mileage').notNullable();
      table.text('typeOfTransmission').notNullable();
      table.text('statusOfTitle', 128);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
