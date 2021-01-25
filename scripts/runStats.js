const fs = require('fs').promises;

// How many languages cover a certain topic
const articleCoverage = function (data) {
  var coverage = {};
  data.forEach((a, i) => {
    const artName = Object.keys(a)[0];
    const noOfLangs = a[artName].length;
    coverage[artName] = noOfLangs;
  });
  return coverage;
}

// Find out which languages have which articles
const languageDetails = function (data) {
  let langs = {};
  data.forEach((a, i) => {
    const artName = Object.keys(a)[0];
    a[artName].forEach((l, i) => {
      if ( langs[l] === undefined ) {
        langs[l] = [artName];
      } else {
        langs[l].push(artName)
      }
    });
  });
  return langs;
}

module.exports = {
  articleCoverage: articleCoverage,
  languageDetails: languageDetails
}

/*
console.log('Reading vital10.lang.json…');
fs.readFile( './data_out/vital10.lang.json').then(d => {
  console.log('Opening vital10.lang.json.');
  const v10 = JSON.parse(d)

  console.log(articleCoverage(v10));
  console.log(languageDetails(v10));
});
*/
