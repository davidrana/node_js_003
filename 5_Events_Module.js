const EventEmitter = require('events');
const emitter = new EventEmitter();


//Register a listener
emitter.on('messageLoggred',function(){
    console.log('Listener calles');
})
//Raise an event
emitter.emit('messageLoggred');