
exports.up = function(knex) {
    return knex.schema.createTable('systemUserTokens', t => {
        t.increments('id').primary();
        t.integer('systemUserId').references('systemUser.id').onUpdate('CASCADE').onDelete('CASCADE');;
        t.text('token');
        t.dateTime('createdAt').notNull().defaultTo(knex.fn.now());
        t.dateTime('expiresAt').nullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('systemUserTokens');
};
