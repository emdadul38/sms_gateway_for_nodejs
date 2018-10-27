/**
 * [Twilio sms gateway]
 * @type {[string]}
 * author @Emdadul Huq
 * email: emdadul225@gmail.com
 * link https://www.twilio.com/
 */
const twilio = require('twilio');

const accountSid = '*******************************'; // Your Account SID from www.twilio.com/console
const authToken = '********************************';   // Your Auth Token from www.twilio.com/console

module.exports = function sendTwilioSMS(receiver_no, text_msg, callback){
	const client = new twilio(accountSid, authToken);

	client.messages.create({
	    body: text_msg,
	    to: receiver_no,  // Text this number
	    from: '+13862******' // From a valid Twilio number
	}).then((message) => {
		return callback('200');
	}).catch(e => { 
		return callback(e.code);
	}).done();
};