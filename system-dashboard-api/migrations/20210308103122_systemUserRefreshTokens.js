
exports.up = function(knex) {
    return knex.schema.createTable('systemUserRefreshTokens', t => {
        t.increments('id').primary();
        t.integer('systemUserId').references('systemUser.id').onUpdate('CASCADE').onDelete('CASCADE');;
        t.text('refreshToken');
        t.dateTime('createdAt').notNull().defaultTo(knex.fn.now());
        t.dateTime('expiresAt').nullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('systemUserRefreshTokens');
};
