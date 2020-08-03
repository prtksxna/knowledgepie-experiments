runQuery = require('./runQuery');

const findLanguageCoverage = function (qid) {
  const query = `SELECT DISTINCT ?lang ?name WHERE {
    ?article schema:about wd:${qid} ;
    schema:inLanguage ?lang ;
    schema:name ?name ;
    schema:isPartOf [ wikibase:wikiGroup "wikipedia" ] .
    FILTER (!CONTAINS(?name, ':')) .
  }`;

  return runQuery(query).then(function (res) {
    const languages = res.map(function (item) {
      return item.lang.value;
    })
    return languages;
  })
}

module.exports = findLanguageCoverage;
