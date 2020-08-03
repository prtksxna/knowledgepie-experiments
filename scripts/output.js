const fs = require('fs').promises;

console.log('Reading vital10.lang.json…');
fs.readFile( './data_out/vital10.lang.json').then(d => {
  console.log('Opening vital10.lang.json.');
  const v10 = JSON.parse(d)

  console.log('Printing TSV');
  v10.forEach((a, i) => {
    const artName = Object.keys(a)[0];
    const noOfLangs = a[artName].length;
    console.log( artName + '\t' + noOfLangs);
  });

  // Find out which languages have which articles
  let langs = {};
  v10.forEach((a, i) => {
    const artName = Object.keys(a)[0];
    a[artName].forEach((l, i) => {
      if ( langs[l] === undefined ) {
        langs[l] = [artName];
      } else {
        langs[l].push(artName)
      }
    });
  });

  // Count the number of articles in each language
  let counts = {};
  for(const l in langs){
    if ( counts[langs[l].length] === undefined ) {
      counts[langs[l].length] = 1;
    } else {
      counts[langs[l].length] += 1;
    }
  };

  // Display TSV of counts
  for( const c in counts ){
    console.log(c + '\t' + counts[c]);
  }

});
