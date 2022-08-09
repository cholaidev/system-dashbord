const ObjectID = require('mongodb').ObjectID;

const getTestObjectId = (objectId) => {
    return new ObjectID(objectId);
}

module.exports = {
    getTestObjectId
};