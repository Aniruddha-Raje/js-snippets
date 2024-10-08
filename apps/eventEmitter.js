var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEvent = function () {
  console.log('I hear a scream!');
}
//Assign the event handler to an event:
eventEmitter.on('scream', myEvent);
//Fire the 'scream' event:
eventEmitter.emit('scream');


// Bind the connection event with the listner1 function
eventEmitter.addListener('listenerEvent', listner1);
// Bind the connection event with the listner2 function
eventEmitter.on('listenerEvent', listner2);