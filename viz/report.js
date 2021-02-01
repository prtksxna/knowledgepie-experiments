$(function () {
  $.getJSON('/data_out/vital10.lang.json', function (data) {
    langReport(data.languageDetails,Object.keys(data.articleCoverage));
    langCoverage(data.languageDetails);
    articleBar(data.articleCoverage, Object.keys(data.languageDetails).length);
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

langReport = function (data, allArticles) {
  $.each(data, function (lang, articles) {
    $el = $('<div>');
    $el.append($('<h4>').text(getWikiName(lang)));
    $report = $('<div>');
    $el.append($report);

    allArticles.forEach(function (article) {
      $circle = $('<div>').text(article).addClass('report-circle');
      if (articles.indexOf(article) > -1 ) {
        $circle.addClass('is-present');
      }
      $report.append($circle)
    })

    $('.js-vital10-langReport').append($el);
  })
}

getWikiName = function (code) {
  if (window.language[code] !== undefined) {
    return window.language[code].name;
  } else {
    return code;
  }
}

articleBar = function (data, totalLangs) {
  console.log(totalLangs);
  $container = $('.js-vital10-articleBar');
  $.each(data, function (article, count) {
    let percent = Math.round(( count * 100 ) / totalLangs);
    $container.append($('<h3>').text(article + '('+percent+'%)'));
    $container.append($('<div>').addClass('articleBar-bar').css('width', percent + '%').html('&nbsp;'));
  })
}
