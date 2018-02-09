import * as firebase from 'firebase';

const config = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.FIREBASE_DATABASE_URL,
	projectId: process.env.FIREBASE_PROJECT_ID,
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default }




// child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });


// child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });


// child_added
// database.ref('expenses').on('child_added', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
// 	.on('value',(snapshot) => {
// 		const expenses = [];
// 		snapshot.forEach((childSnapshot) => {
// 			expenses.push({
// 				id: childSnapshot.key,
// 				...childSnapshot.val()
// 			});
// 		});

// 		console.log(expenses);
// 	});



// database.ref('expenses').push({
// 	description: 'buy gum',
// 	note: 'test',
// 	amount: 123,
// 	createdAt: 0
// })



// database.ref().on('value', (snapshot) => {
// 	const val = snapshot.val();
// 	console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// }, (e) => {
// 	console.log('Error with data fetching', e);
// });



// returns the function subscribed
// const onValueChange = database.ref().on('value', (snapshot) => {
// 	console.log(snapshot.val());
// }, (e) => {
// 	console.log('Error with data fetching',e);
// });

// setTimeout(() => {
// 	database.ref('age').set(29);
// }, 3500);

// setTimeout(() => {
// 	//database.ref().off(); // removes all subscriptions
// 	database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
// 	database.ref('age').set(30);
// }, 10500);



// database.ref()
// 	.once('value')
// 	.then((snapshot) => {
// 		const val = snapshot.val();
// 		console.log(val);
// 	})
// 	.catch((e) => {
// 		console.log('Error fetching data',e);
// 	});



// database.ref().set({
// 	name: 'Federico Sandri',
// 	age: 32,
// 	stressLevel: 6,
// 	job: {
// 		title: 'Web developer',
// 		company: 'Google'
// 	},
// 	isSingle: false,
// 	location: {
// 		city: 'Udine',
// 		country: 'Italy'
// 	}
// }).then(() => {
// 	console.log('Data is saved!');
// }).catch((e) => {
// 	console.log('This failed.', e);
// });



// database.ref().update({
// 	name: 'Fede Sandri',
// 	age: 30,
// 	isSingle: null,
// 	'location/country' : 'New York'
// })
// .then(() => {
// 	console.log('Data has been updated!');
// }).catch((e) => {
// 	console.log('Update failed.', e);
// });



// database.ref('isSingle')
// 	.remove()
// 	.then(() => {
// 		console.log('removed correctly!');
// 	})
// 	.catch((e) => {
// 		console.log('Error.', e);
// 	});