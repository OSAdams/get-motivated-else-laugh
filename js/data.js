/* exported data */
var quoteData = [];
var quoteStorage = localStorage.getItem('motivate');

if (quoteStorage !== null) {
  quoteData = JSON.parse(quoteStorage);
}

window.addEventListener('beforeunload', function (event) {
  var quoteJSON = JSON.stringify(quoteData);
  localStorage.setItem('motivate', quoteJSON);
});
