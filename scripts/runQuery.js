// Given a SPARQL query it makes a request to Wikidata
// Returns the results in JSON

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
