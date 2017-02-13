var Backbone = require('backbone');

var Person = Backbone.Model.extend({
  defaults: {
    gender: 'female',
    hair: true,
    birthday: new Date('1/1/1970')
  },
  initialize: function(){
    console.log('A new person was born!');
  },
  makeSandwich: function(){
    console.log('Hi, I made you a tasty ' + this.get('type'));
  },
  sayName: function(){
    return this.get('name');
  }
});

// var Car = Backbone.Model.extend({
//   defaults: {
//     wheels: 4,
//     doors: 4
//   }
// });
//
// var Honda = Car.extend({
//   defaults: {
//     doors: 2
//   }
// });


module.exports = {
  Person: Person
};
