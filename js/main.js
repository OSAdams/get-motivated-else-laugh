gsap.from(".logo-image", {duration: 1.5, opacity: 0, scale: 0.3, ease: "back"});
gsap.from(".motivate-quotes", {duration: 0.75, opacity: 0, x: -250});
gsap.from(".dad-jokes", {duration: 1, opacity: 0, x: -250});
gsap.from(".fas", {duration: 1.1, opacity: 0, y: 150, stagger: 0.25});

var $motivateButton = document.querySelector('#motivate-quotes');
var $laughButton = document.querySelector('#dad-jokes');
var $logo = document.querySelector('#logo');
var $quoteId = document.querySelector('#quotes');
var $jokeId = document.querySelector('#jokes');
var $textContainer = document.querySelector('#quotes-or-jokes')
var $home = document.querySelector('#home');
var $favoritedTexts = document.querySelector('#favorited-texts');
var $quoteSave = document.querySelector('#quote-save');
var quotesArray = [];
var jokesValue = null;

getQuote();
getJokes();

$motivateButton.addEventListener('click', function(event) {
  if ($logo.getAttribute('class') === 'logo') {
    gsap.from($textContainer, {duration: 1.5, opacity: 0, scale: 0.3, ease: "back"});
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
  $liText.textContent = randomQuote.text;
  $quoteId.appendChild($liText);
  var $liAuthor = document.createElement('li');
  $liAuthor.textContent = randomQuote.author;
  $quoteId.appendChild($liAuthor);
});

function getQuote () {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://type.fit/api/quotes');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
      quotesArray = xhr.response;
    });
  xhr.send();
};

$laughButton.addEventListener('click', function(event) {
  if ($logo.getAttribute('class') === 'logo') {
    gsap.from($textContainer, {duration: 1.5, opacity: 0, scale: 0.3, ease: "back"});
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
    gsap.from(".logo-image", {duration: 1.5, opacity: 0, scale: 0.3, ease: "back"});
  }
  $favoritedTexts.setAttribute('class', 'favorited-texts hidden')
  $logo.setAttribute('class', 'logo');
  $textContainer.setAttribute('class', 'quotes-or-jokes hidden');
  $jokeId.setAttribute('class', 'jokes hidden');
  $quoteId.setAttribute('class', 'quotes hidden');
  $quoteSave.setAttribute('class', 'fas fa-star hidden');
});
