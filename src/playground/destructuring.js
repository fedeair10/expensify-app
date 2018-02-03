// Object destructuring

const person = {
	name: 'Federico',
	age: 31,
	location: {
		city: 'Udine',
		temp: 9
	}
};
const { name: firstName = 'Anonymus', age } = person;
const { city, temp: temperature } = person.location;
console.log(`${firstName} is ${age}.`);
if( temperature && city )
	console.log(`It's ${temperature} in ${city}.`);



const book = {
	title : 'Ego is the enemy',
	author : 'Ryan Holiday',
	publisher : {
		name : 'Penguin'
	}
};
const { name : publisherName = 'Self-Published' } = book.publisher;
console.log(publisherName);


// Array destructuring

const address = ['1299 S Jupiter Street', 'Philadelphia', 'Pennsylvania', '19147'];
const [, yourCity, yourState = 'New York'] = address; 
console.log(`You are in ${yourCity} ${yourState}.`);



const item = ['Coffe (Hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);