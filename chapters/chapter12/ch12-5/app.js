// fs (file system) 模組
let fs = require('fs');

fs.writeFile('hello.txt', 'Hello, World!', (err) => {
    if (err) throw err;
    console.log('File has been saved!');
});

