const NodeCache = require('node-cache');

//by default cache for a day
const ttlSeconds = 60 * 60 * 24; 
const cache = new NodeCache({ stdTTL: ttlSeconds, checkperiod: ttlSeconds * 0.2, useClones: false });

module.exports =  cache ;