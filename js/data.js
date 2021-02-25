/* exported data */
var quoteData = [];
var quoteStorage = localStorage.getItem('motivate');

var jokeData = [];
var jokeStorage = localStorage.getItem('dad-jokes');

if (quoteStorage !== null) {
  quoteData = JSON.parse(quoteStorage);
}

if (jokeStorage !== null) {
  jokeData = JSON.parse(jokeStorage);
}

window.addEventListener('beforeunload', function (event) {
  var quoteJSON = JSON.stringify(quoteData);
  localStorage.setItem('motivate', quoteJSON);
});

window.addEventListener('beforeunload', function (event) {
  var jokeJSON = JSON.stringify(jokeData);
  localStorage.setItem('dad-jokes', jokeJSON);
});
