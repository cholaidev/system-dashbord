const { Model } = require('objection');
const cache = require('./cache')
var config = require('../knexfile')
var loggerConfig = require('../loggerKnexfile')
const configHelper = require('./shared/helpers/config.helper');

// Initialize knex.
const masterKnex = require('knex')(config);
const loggerKnex = getKnexLogger()
function getKnexLogger(){
    let knex = cache.get(configHelper.loggerCache)
    if(!knex){
        knex = require('knex')(loggerConfig);
        cache.set(configHelper.loggerCache,knex);
    }
    return knex;
}
async function checkDbConnection() {
 return masterKnex.raw('select 1+1 as result')
    .then((res)=>{
        console.log('Db connected..')
    }).catch((err) => {
        console.log('[Fatal] Failed to establish connection to database! Exiting...');
        console.log(err);
        process.exit(1);
    });
}
async function checkDbConnectionForLogger() {
    return loggerKnex.raw('select 1+1 as result')
       .then((res)=>{
           console.log('Db connected logger..')
       }).catch((err) => {
           console.log('[Fatal] Failed to establish connection to database! Exiting...');
           console.log(err);
           process.exit(1);
       });
   }


// Give the knex object to objection.
Model.knex(masterKnex);

module.exports = {
    masterKnex,
    loggerKnex,
    Model,
    checkDbConnection,
    checkDbConnectionForLogger
}