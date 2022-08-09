const sharedListener = require('../../shared/event.emitter');

sharedListener.eventEmitter.on('USER_LOGIN',(data) => {
    console.log(data);
    console.log('user login listened');
});

module.exports = sharedListener;