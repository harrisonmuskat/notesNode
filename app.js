console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

// console.log(_.isString(true));
// console.log(_.isString('Harrison'));
var filteredArray = _.uniq(['Harrison', 1, 'Harrison', 1, 2, 3, 4]);
console.log(filteredArray);
//console.log('Result:', notes.add(3,4));

// var user = os.userInfo();

// fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`);