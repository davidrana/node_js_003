const EventEmitter = require('events');

const Logger = require('./2_logger.js');
const logger = new Logger();

//Register a listener
logger.on('messageLoggred',(arg) => {
    console.log('Listener calles',arg);
});

logger.log('message');
