
exports.up = function(knex) {
    return knex.schema.createTable('systemUser', t => {
        t.increments('id').primary()
        t.string('username').unique(),
        t.string('email').unique()
        t.string('password')
        t.boolean('status')
        t.dateTime('createdAt').notNull().defaultTo(knex.fn.now());
        t.dateTime('updatedAt').nullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('systemUser');
};
