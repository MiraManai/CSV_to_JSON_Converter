const csv = require('csvtojson')
const fs = require('fs')
const csvFilePath = './customer-data.csv'

var data = ''

csv()
.fromFile(csvFilePath)
.on('json', (csvRow) => {
  // creation of json Object
  data += JSON.stringify(csvRow) + '\n'
})

.on('done', (error) => {
  console.log('end')
  fs.writeFile('./customer-data.json', data, 'utf8', function (err) {
    if (err) {
      return console.log(err)
    }
    console.log('The file was saved!')
  })
})
