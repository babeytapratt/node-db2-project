
exports.up = function(knex) {
  return knex.schema.createTable('cars', table => {
      table.increments();
      table.varchar('VIN').notNullable();
      table.text('Make', 128).notNullable();
      table.text('Model', 128).notNullable();
      table.integer('Mileage').notNullable();
      table.text('Status of Title', 128);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
