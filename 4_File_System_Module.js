//file and directories
//asynchronous methods


//1--synchronous method

// const fs = require('fs');

// const file = fs.readdirSync('./');
// console.log(file);

//2--asynchronous methods
const fs = require('fs');
fs.readdir('./',function(err,files){
    if(err) console.log('Error',err);
    else console.log('Result',files);
})

