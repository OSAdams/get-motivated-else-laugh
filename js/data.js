/* exported data */
var quoteData = [];
var quoteStorage = localStorage.getItem('motivate-or-laugh');

if (quoteStorage !== null) {
  quoteData = JSON.parse(quoteStorage);
}

window.addEventListener('beforeunload', function (event) {
  var quoteJSON = JSON.stringify(quoteData);
  localStorage.setItem('motivate-or-laugh', quoteJSON);
});
