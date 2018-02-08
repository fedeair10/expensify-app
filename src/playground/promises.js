/*
 * resolve: metodo usato quando promise va a buon fine
 * reject: metodo usato quando promise fallisce
 * then: metodo usato con callback per gestire caso di successo
 * catch: metodo usato con callback per gestire caso di errore
 * then con due parametri: la seconda callback sostituisce catch
 */


const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		// resolve('This is my resolved data');
		reject('something went wrong');
	}, 1500);
});

console.log('before');

promise.then((data) => {
	console.log('1',data);
}).catch((error) => {
	console.log('error: ', error);
});

console.log('after');