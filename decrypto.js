/*bogdanovsi*/
const crypto = require('crypto')
const fs = require('fs')
crypto.publicDecrypt(fs.readFileSync('./cryptoFiles/key'),fs.readFileSync('./cryptoFiles/secret')).toString('utf8')