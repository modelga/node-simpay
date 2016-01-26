var simpay = require('./simpay/index.js');

/*
	key - https://simpay.pl/panel/Client/API
	secret - https://simpay.pl/panel/Client/API
*/
var api = new simpay.API({key: 'ec0488c9', secret: 'b37cd0a8054356766e882c3875d1308d', version: '1'});

/*
	serviceId - identyfikator usługi premium sms
	number - numer na ktory wyslano sms 
	code - kod wprowadzony przez klienta

	isOk - true/false
	errorType - ERROR, USED, OK
	err - errory przez simpay
*/
api.getStatus({serviceId: '784', number: '7055', code: 'F713EE'}, function(isOk, errorType, err) {
	console.log(isOk);
	console.log(errorType);
	console.log(err);
});
