$(function () {
  alert(1);
  $.getJSON('/data_out/vital10.lang.json', function (data) {
    console.log(data);
  })
})
