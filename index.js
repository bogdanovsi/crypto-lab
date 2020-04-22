const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

let answer = fs.readFileSync(path.join(__dirname, 'decrypto.js'))
let key = fs.readFileSync(path.join(__dirname, 'cryptoFiles', 'key'))

fs.writeFileSync(path.join(__dirname, 'cryptoFiles', 'answer'), crypto.publicEncrypt(key.toString('utf8'), answer));