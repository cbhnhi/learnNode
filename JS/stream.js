const fs = require('fs');
const path= require ('path');

const smalltextString=path.join(__dirname, '..', 'textfiles', 'smalltext.txt');

const replytextString=path.join(__dirname, '..', 'textfiles', 'reply.txt');
console.log(smalltextString);
const rs = fs.createReadStream(smalltextString, {encoding: 'utf8'});

const ws = fs.createWriteStream(replytextString);

rs.on('data', (dataChunk) =>{
    ws.write(dataChunk);
})

//more efficient way
rs.pipe(ws);