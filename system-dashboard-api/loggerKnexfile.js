const configData = require('./src/shared/helpers/config.helper');

module.exports = {
    client: 'postgresql',
    connection: configData.loggerUrl,
    pool: {
        min: 1,
        max: 2
    }
    // getKnexConfig
}