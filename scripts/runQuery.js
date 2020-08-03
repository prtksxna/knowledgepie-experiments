const fetch = require('node-fetch');

const runQuery = function ( query ) {
  query = encodeURIComponent(query);
  return fetch( 'https://query.wikidata.org/sparql?query=' + query + '&format=json' ).then( function (data) {
    return data.json();
  }).catch(function (error) {
    console.log(error);
  }).then( function (json) {
    return json.results.bindings;
  });
}

module.exports = runQuery;
