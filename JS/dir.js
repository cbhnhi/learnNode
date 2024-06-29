const fs = require('fs');


if(!fs.existsSynch('./new')){
fs.mkdir('./new', (err) =>{
    if(err) throw err;
    console.log('directory created')
})
};

