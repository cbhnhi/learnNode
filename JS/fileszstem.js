const fsPromises = require('fs').promises;
const path = require('path');
//asynch


const fileops = async () => {
    try{
        const data = await fsPromises.readFile(path.join(__dirname, '..', 'textfiles', 'smalltext.txt'), 'utf8');
        console.log('hi)');
        console.log(data);
    } catch (err){
        console.error(err);
        console.log(data);
    }
}

fileops();
//this path is required since i put all the JS files into a seperate directory to keep things orgenized
console.log(path.join(__dirname, '..', 'textfiles', 'smalltext.txt'));
//synch way
fsPromises.readFile(path.join(__dirname, '..', 'textfiles', 'smalltext.txt'), 'utf8', (err,data)=>{
    if(err) throw err;
    console.log(data);
});
/*
fs.writeFile(path.join(__dirname, '..', 'textfiles', 'reply.txt'), 'nice to meet you', (err,data)=>{
    if(err) throw err;
    console.log('write complete')
    fs.appendFile(path.join(__dirname, '..', 'textfiles', 'reply.txt'), '\n damm', (err,data)=>{
        if(err) throw err;
        console.log('append complete')
        fs.rename(path.join(__dirname, '..', 'textfiles', 'reply.txt'), path.join(__dirname, '..', 'textfiles', 'replyo.txt'), (err,data)=>{
            if(err) throw err;
            console.log('rename complete')
    
            
        });
        
    });
    
});
*/

process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
    process.exit(1);
});

