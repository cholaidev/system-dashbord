/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('item', t => {
        t.increments('id').primary();
        t.string('name').notNullable();
        t.text('sku').nullable();
        t.string('unit').nullable();
        t.integer ('category_id').nullable().references('category.id');
        t.integer('hsn').nullable();
        t.json('dimensions').nullable();
        t.text('manufacturer_name').nullable();
        t.text('brand_name').nullable();
        t.integer('weight').nullable();
        t.bigInteger('upc').nullable()
        t.bigInteger('ean').nullable()
        t.text('mpn').nullable()
        t.text('isbn').nullable()
        t.float('selling_price').nullable();
        t.text('selling_price_description').nullable()
        t.float('cost_price').nullable();
        t.text('cost_price_description').nullable();
        t.text('gsto').nullable()
        t.text('igsto').nullable();

       
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('item')
  
};
