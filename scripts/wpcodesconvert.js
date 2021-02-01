// This script takes wpcodes.csv and converts
// it into a usable JSON.

const fs = require('fs').promises;
const parse = require('csv-parse')


fs.readFile( './data_in/wpcodes.csv').then(d => {
  var data = {}
  parse(d).on('data', function (row) {
    data[row[2]] = {
      'name': row[0],
      'localName': row[1]
    }
  }).on('end', function () {
    console.log(JSON.stringify(data));
  })
});
