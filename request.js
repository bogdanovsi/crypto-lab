const https = require('https')

const data = "https://bogdanovsi.herokuapp.com/crypto-lab"

const options = {
  hostname: 'fork.???.ru',
  port: 443,
  path: '/mystery?bogdanovsi',
  method: 'POST',
  headers: {
    'Content-Type': 'multipart/form-data',
    'Content-Length': data.length
  }
}

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', d => {
    process.stdout.write(d)
  })
})

req.on('error', error => {
  console.error(error)
})

req.write(data)
req.end()