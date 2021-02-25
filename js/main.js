gsap.from('.logo-image', {duration: 1.5, opacity: 0, scale: 0.3, ease: 'back'});
gsap.from('.motivate-quotes', {duration: 0.75, opacity: 0, x: -250});
gsap.from('.dad-jokes', {duration: 1, opacity: 0, x: -250});
gsap.from('.fas', {duration: 1.1, opacity: 0, y: 150, stagger: 0.25});

var $motivateButton = document.querySelector('#motivate-quotes');
var $laughButton = document.querySelector('#dad-jokes');
var $logo = document.querySelector('#logo');
var $quoteId = document.querySelector('#quotes');
var $jokeId = document.querySelector('#jokes');
var $textContainer = document.querySelector('#quotes-or-jokes')
var $home = document.querySelector('#home');
var $favoritedTexts = document.querySelector('#favorited-texts');
var $favoriteQuotes = document.querySelector('#favorite-quotes');
var $savedQuotes = document.querySelector('#saved-quotes');
var $quoteSave = document.querySelector('#quote-save');
var $buttons = document.querySelector('#buttons');
var quotesArray = [];
var jokesValue = null;

getQuote();
getJokes();
postQuotes();

$motivateButton.addEventListener('click', function(event) {
  if ($logo.getAttribute('class') === 'logo') {
    gsap.from($textContainer, {duration: 1.5, opacity: 0, scale: 0.3, ease: 'back'});
    }
  $logo.setAttribute('class', 'logo hidden');
  $textContainer.setAttribute('class', 'quotes-or-jokes');
  $jokeId.setAttribute('class', 'jokes hidden');
  $quoteId.setAttribute('class', 'quotes');
  $quoteSave.setAttribute('class', 'fas fa-star');
  $quoteId.innerHTML = '';
  var randomNum = Math.floor(Math.random() * quotesArray.length);
  var randomQuote = quotesArray[randomNum];
  var $liText = document.createElement('li');
  $liText.setAttribute('class', 'quote-text-value');
  $liText.textContent = randomQuote.body;
  $quoteId.appendChild($liText);
  var $liAuthor = document.createElement('li');
  $liAuthor.setAttribute('class', 'quote-author-value')
  $liAuthor.textContent = randomQuote.author;
  $quoteId.appendChild($liAuthor);
});

function getQuote () {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://favqs.com/api/quotes');
  xhr.setRequestHeader('Authorization', 'Token token=052518e725b1bbb816676aec3fc243d5');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
      quotesArray = xhr.response.quotes;
    });
  xhr.send();
};

$laughButton.addEventListener('click', function(event) {
  if ($logo.getAttribute('class') === 'logo') {
    gsap.from($textContainer, {duration: 1.5, opacity: 0, scale: 0.3, ease: 'back'});
  }
  $logo.setAttribute('class', 'logo hidden');
  $textContainer.setAttribute('class', 'quotes-or-jokes');
  $jokeId.setAttribute('class', 'jokes');
  $quoteId.setAttribute('class', 'quotes hidden');
  $jokeId.innerHTML = '';
  var $liText = document.createElement('li');
  $liText.textContent = jokesValue;
  $jokeId.appendChild($liText);
  getJokes();
});

function getJokes () {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://icanhazdadjoke.com/');
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function() {
    jokesValue = xhr.response.joke;
  });
  xhr.send();
}

$home.addEventListener('click', function(event) {
  if ($logo.getAttribute('class') === 'logo hidden') {
    gsap.from('.logo-image', {duration: 1.5, opacity: 0, scale: 0.3, ease: 'back'});
  }
  if ($buttons.getAttribute('class') === 'buttons hidden') {
    gsap.from('.motivate-quotes', {duration: 0.75, opacity: 0, x: -250});
    gsap.from('.dad-jokes', {duration: 1, opacity: 0, x: -250});
  }
  $favoritedTexts.setAttribute('class', 'favorited-texts hidden');
  $logo.setAttribute('class', 'logo');
  $buttons.setAttribute('class', 'buttons');
  $textContainer.setAttribute('class', 'quotes-or-jokes hidden');
  $quoteSave.setAttribute('class', 'fas fa-star hidden');
});

$savedQuotes.addEventListener('click', function (event) {
  if ($favoritedTexts.getAttribute('class') === 'favorited-texts hidden') {
    gsap.from($favoritedTexts, {duration: 1.5, opacity: 0, scale: 0.3, ease: 'back'});
  }
  $favoritedTexts.setAttribute('class', 'favorited-texts');
  $logo.setAttribute('class', 'logo hidden');
  $textContainer.setAttribute('class', 'quote-or-jokes hidden');
  $buttons.setAttribute('class', 'buttons hidden');
});

$quoteSave.addEventListener('click', function (event) {
  var quoteText = document.querySelector('.quote-text-value');
  var quoteAuthor = document.querySelector('.quote-author-value');
  quoteData.push({
    'quote': quoteText.textContent,
    'author': quoteAuthor.textContent
  });
});

function postQuotes () {
  for (var i = 0; i < quoteData.length; i++) {
    $liText = document.createElement('li');
    var pullText = '"' + quoteData[i].quote + '"';
    $liText.textContent = pullText;
    $favoriteQuotes.appendChild($liText);
    $liAuthor = document.createElement('li');
    var pullAuthor = '- ' + quoteData[i].author;
    $liAuthor.textContent = pullAuthor;
    $favoriteQuotes.appendChild($liAuthor);
  }
};
