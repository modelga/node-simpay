var simpay = require('./index.js');

/*
	key - https://simpay.pl/panel/Client/API
	secret - https://simpay.pl/panel/Client/API
*/
var api = new simpay.API({key: '333333333333333333', secret: '2222222222222222', version: '1'});

/*
	serviceId - identyfikator usługi premium sms
	number - numer na ktory wyslano sms
	code - kod wprowadzony przez klienta

	isOk - true/false
	errorType - ERROR, USED, OK
	err - errory przez simpay
*/
api.getStatus({serviceId: '41241', number: '7055', code: 'F713EE'}, function(isOk, errorType, err) {
	console.log(isOk);
	console.log(errorType);
	console.log(err);
});
