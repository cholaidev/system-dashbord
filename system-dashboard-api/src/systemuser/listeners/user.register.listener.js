const sharedListener = require('../../shared/event.emitter');
const mailer = require('../../shared/helpers/email.helper');
const configHelper = require('../../shared/helpers/config.helper');

sharedListener.eventEmitter.on('USER_REGISTRATION',async (data) => {

    let html = '<h3>Hi '+ data.firstname +' '+ data.lastname + ',</h3><br>'+
                '<p>Your Password for Adoltech time tracker is <b>'+data.toSendPass+'</b>. <br> '+ 
                'Kindly use it to login via desktop app/ dashboard.</p>';

    let text = 'Hi'+ data.firstname + data.lastname +'. Your Password for Adoltech time tracker is '+data.toSendPass+
    '. Kindly use it to login via desktop app/ dashboard';          

    let msg = {
        from: configHelper.mailFrom, // sender address
        to: data.email, // list of receivers
        subject: "Welcome to Adol Time Tracker ✔", // Subject line
        text, // plain text body
        html // html body
    };

    try{
        await mailer.sendMail(msg);
        console.log('successfully mailed');
    }catch(error){
        console.error(error);
    }
});

module.exports = sharedListener;