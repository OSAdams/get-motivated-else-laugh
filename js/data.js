/* exported data */
var quoteData = [];

window.addEventListener('beforeunload', function (event) {
  var quoteJSON = JSON.stringify(quoteData);
  localStorage.setItem('motivate-or-laugh', quoteJSON);
});
