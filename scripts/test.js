const fs = require('fs').promises;
const findLanguageCoverage = require('./findLanguageCoverage');

console.log('Reading vital10.json…');
fs.readFile( './data_in/vital10.json').then(d => {
  console.log('Opened vital10.json.');
  const v10 = JSON.parse(d);
  let coveragePromises = [];
  v10.data.forEach((a,i) => {
    setTimeout(function () {
      console.log('Checking language coverage for ' + a[0] + '/' + a[1] + '…');
      let coverage = findLanguageCoverage(a[1]).then((d) => {
        console.log('Got data for ' + a[0] + '/' + a[1] + '.');
        var results = {};
        results[a[0]] = d
        return results;
      });
      coveragePromises.push(coverage);
    }, i*2000)
  });

  setTimeout(function () {
    Promise.all(coveragePromises).then((v) => {
      console.log(v);
      console.log(JSON.stringify(v));
      // TODO: Save this
    });
  }, 11 * 2000)
})
/*
findLanguageCoverage('Q2').then(function (l) {
  console.log('Earth',l);
});


findLanguageCoverage('Q5').then(function (l) {
  console.log('Human',l);
});
*/
