$(function () {
  $.getJSON('/data_out/vital10.lang.json', function (data) {
    langCoverage(data.languageDetails);
  })
})

langCoverage = function (data) {
    var tally = [];
    $.each(data, function (n, v) {
      tally.push({
        language: n,
        noOfArticles: v.length
      })
    });

    tally.sort( function(a, b){
      return b.noOfArticles - a.noOfArticles;
    });

    tally.forEach(function (lang) {
      var $el = $('<div>').text(lang.language + lang.noOfArticles);
      $el.css('opacity',lang.noOfArticles / 10);
      $('.js-vital10-langCoverage').append($el);
    })
}
