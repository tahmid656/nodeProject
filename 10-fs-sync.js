const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./content/first.txt', 'utf-8'); // reads an existing file with provided encoding
const second = readFileSync('./content/second.txt', 'utf-8'); // reads an existing file with provided encoding

console.log(first, second);

writeFileSync('./content/result-sync.txt', `Bruh sir situation`, { flag: 'a' }); // writes to an existing file or creates a new one if the named file does not exist. Can be used for append as well


