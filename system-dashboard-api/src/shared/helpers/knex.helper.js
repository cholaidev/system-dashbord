const configHelper = require('./config.helper');

const getKnexConfig = (tenantId) => {
    return require('knex')({
        client: 'postgresql',
        connection: {
            host : configHelper.postgresHost,
            user : configHelper.postgresUser,
            database : tenantId.toString(), //as pg-connection lib expects a string as db name in buffer
            password : configHelper.postgresPassword,
            port : configHelper.postgresPort
        },
        pool: {
            min: 2,
            max: 5
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    });
}


module.exports = {
    getKnexConfig
}