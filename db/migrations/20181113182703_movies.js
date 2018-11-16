
exports.up = function (knex, Promise) {
    return knex.schema.createTable('movies', table => {
        table.increments()
        table.string('title').notNullable()
        table.string('director').notNullable()
        table.integer('year').notNullable()
        table.float('rating', 2, 1).notNullable()
        table.text('poster_url').notNullable()
    })

};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('movies')
};