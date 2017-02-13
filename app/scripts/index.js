var Person = require('./models/person').Person;

var jimmy = new Person({'name': 'Jimmy', 'gender': 'male', 'type': 'sub'});
var wendy = new Person({'name': 'Wendy', 'type': 'burger'});
var jason = new Person({'name': 'Jason'});

// Built in methods
console.log(wendy.toJSON());

// Custom method
console.log(jimmy.makeSandwich());
console.log(wendy.makeSandwich());

// Set attributes
jason.set('type', 'sandwich');

// Don't do this!
console.log('jason.type', jason.type);
// Do this instead
console.log(jason.get('type'));
