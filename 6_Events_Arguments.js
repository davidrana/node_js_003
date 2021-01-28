const EventEmitter = require('events');
const emitter = new EventEmitter();


//Register a listener
emitter.on('messageLoggred',(arg) => {
    console.log('Listener calles',arg);
})
//Raise an event
emitter.emit('messageLoggred',{id:1, url:'http://'});