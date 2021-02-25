/* exported data */
var quoteData = [];
var quoteStorage = localStorage.getItem('saved-motivational-quotes');

var jokeData = [];
var jokeStorage = localStorage.getItem('saved-dad-jokes');

if (quoteStorage !== null) {
  quoteData = JSON.parse(quoteStorage);
}

if (jokeStorage !== null) {
  jokeData = JSON.parse(jokeStorage);
}

window.addEventListener('beforeunload', function (event) {
  var quoteJSON = JSON.stringify(quoteData);
  localStorage.setItem('saved-motivational-quotes', quoteJSON);
});

window.addEventListener('beforeunload', function (event) {
  var jokeJSON = JSON.stringify(jokeData);
  localStorage.setItem('saved-dad-jokes', jokeJSON);
});
