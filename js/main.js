gsap.from('.logo-image', { duration: 1, opacity: 0, scale: 0.3, ease: 'back' });
gsap.from('.fas', { duration: 0.5, opacity: 0, y: 100, stagger: 0.25 });
gsap.from('.motivate-quotes', { duration: 0.5, opacity: 0, x: -250 });
gsap.from('.dad-jokes', { duration: 0.75, opacity: 0, x: -250 });

var $favoritedTexts = document.querySelector('#favorited-texts');
var $favoriteQuotes = document.querySelector('#favorite-quotes');
var $motivateButton = document.querySelector('#motivate-quotes');
var $textContainer = document.querySelector('#quotes-or-jokes');
var $favoriteJokes = document.querySelector('#favorite-jokes');
var $logoImgTwo = document.querySelector('#logo-image-two');
var $savedQuotes = document.querySelector('#saved-quotes');
var $savedJokes = document.querySelector('#saved-jokes');
var $laughButton = document.querySelector('#dad-jokes');
var $quoteSave = document.querySelector('#quote-save');
var $jokeSave = document.querySelector('#joke-save');
var $logoImg = document.querySelector('#logo-image');
var $loadingModal = document.querySelector('#modal');
var $buttons = document.querySelector('#buttons');
var $quoteId = document.querySelector('#quotes');
var $hdTop = document.querySelector('#hd-top');
var $hdBot = document.querySelector('#hd-bot');
var $jokeId = document.querySelector('#jokes');
var $home = document.querySelector('#home');
var $logo = document.querySelector('#logo');
var quoteAuthor = null;
var quotesArray = [];
var jokesValue = null;

getQuote();
getJokes();

$motivateButton.addEventListener('click', function (event) {
  if ($logo.getAttribute('class') === 'logo') {
    gsap.from($textContainer, { duration: 1, opacity: 0, scale: 0.3, ease: 'back' });
  }
  if ($hdTop.textContent !== 'Get Motivated' && $hdBot.textContent !== 'else Laugh') {
    $hdTop.textContent = 'Get Motivated';
    $hdBot.textContent = 'else Laugh';
  }
  $logo.setAttribute('class', 'logo hidden');
  $textContainer.setAttribute('class', 'quotes-or-jokes');
  $jokeId.setAttribute('class', 'jokes hidden');
  $quoteId.setAttribute('class', 'quotes');
  $quoteSave.setAttribute('class', 'fas fa-star');
  $jokeSave.setAttribute('class', 'fas fa-star hidden');
  $quoteId.innerHTML = '';
  var randomNum = Math.floor(Math.random() * quotesArray.length);
  var randomQuote = quotesArray[randomNum];
  var $liText = document.createElement('li');
  $liText.setAttribute('class', 'quote-text-value');
  var quoteText = '"' + randomQuote.text + '"';
  $liText.textContent = quoteText;
  $quoteId.appendChild($liText);
  var $liAuthor = document.createElement('li');
  $liAuthor.setAttribute('class', 'quote-author-value');
  if (randomQuote.author == null) {
    quoteAuthor = '- Anonymous';
  } else {
    quoteAuthor = '- ' + randomQuote.author;
  }
  $liAuthor.textContent = quoteAuthor;
  $quoteId.appendChild($liAuthor);
});

function getQuote() {
  $loadingModal.setAttribute('class', 'modal');
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://type.fit/api/quotes');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    $loadingModal.setAttribute('class', 'modal hidden');
    quotesArray = xhr.response;
  });
  xhr.send();
}

$laughButton.addEventListener('click', function (event) {
  if ($logo.getAttribute('class') === 'logo') {
    gsap.from($textContainer, { duration: 1, opacity: 0, scale: 0.3, ease: 'back' });
  }
  if ($hdTop.textContent !== 'Get Motivated' && $hdBot.textContent !== 'else Laugh') {
    $hdTop.textContent = 'Get Motivated';
    $hdBot.textContent = 'else Laugh';
  }
  $logo.setAttribute('class', 'logo hidden');
  $textContainer.setAttribute('class', 'quotes-or-jokes');
  $jokeId.setAttribute('class', 'jokes');
  $quoteId.setAttribute('class', 'quotes hidden');
  $quoteSave.setAttribute('class', 'fas fa-start hidden');
  $jokeSave.setAttribute('class', 'fas fa-star');
  $jokeId.innerHTML = '';
  var $liJokeText = document.createElement('li');
  $liJokeText.setAttribute('id', 'joke-value');
  $liJokeText.setAttribute('class', 'joke-styling');
  $liJokeText.textContent = jokesValue;
  $jokeId.appendChild($liJokeText);
  getJokes();
});

function getJokes() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://icanhazdadjoke.com/');
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    jokesValue = xhr.response.joke;
  });
  xhr.send();
}

$home.addEventListener('click', function (event) {
  $logo.setAttribute('class', 'logo');
  $logoImg.setAttribute('class', 'logo-image');
  if ($logo.getAttribute('class') === 'logo hidden') {
    gsap.from('.logo-image', { duration: 1, opacity: 0, scale: 0.3, ease: 'back' });
  }
  if ($buttons.getAttribute('class') === 'buttons hidden') {
    gsap.from('.motivate-quotes', { duration: 0.5, opacity: 0, x: -250 });
    gsap.from('.dad-jokes', { duration: 0.75, opacity: 0, x: -250 });
  }
  if ($hdTop.textContent !== 'Get Motivated' && $hdBot.textContent !== 'else Laugh') {
    $hdTop.textContent = 'Get Motivated';
    $hdBot.textContent = 'else Laugh';
  }
  $favoritedTexts.setAttribute('class', 'favorited-texts hidden');
  gsap.from('.logo-image', { duration: 1, opacity: 0, scale: 0.3, ease: 'back' });
  $logoImgTwo.setAttribute('class', 'logo-image-two hidden');
  $buttons.setAttribute('class', 'buttons');
  $textContainer.setAttribute('class', 'quotes-or-jokes hidden');
  $quoteSave.setAttribute('class', 'fas fa-star hidden');
  $jokeSave.setAttribute('class', 'fas fa-star hidden');
});

$savedQuotes.addEventListener('click', function (event) {
  if ($favoritedTexts.getAttribute('class') === 'favorited-texts hidden') {
    gsap.from($favoritedTexts, { duration: 1, opacity: 0, scale: 0.3, ease: 'back' });
  }
  if ($hdBot.textcontent !== 'Quotes') {
    $hdTop.textContent = 'Favorited';
    $hdBot.textContent = 'Quotes';
  }
  $favoritedTexts.setAttribute('class', 'favorited-texts');
  if (screen.width < 600) {
    $logo.setAttribute('class', 'logo hidden');
    $logoImg.setAttribute('class', 'logo-image hidden');
  } else if (screen.width > 600) {
    if ($logoImgTwo.getAttribute('class') === 'logo-image-two hidden') {
      gsap.from('.logo-image-two', { duration: 1, opacity: 0, scale: 0.3, ease: 'back' });
    }
    $logo.setAttribute('class', 'logo');
    $logoImg.setAttribute('class', 'logo-image hidden');
    $logoImgTwo.setAttribute('class', 'logo-image-two');
  }
  if (screen.width > 800) {
    $logo.setAttribute('class', 'logo hidden');
  }
  $textContainer.setAttribute('class', 'quote-or-jokes hidden');
  $buttons.setAttribute('class', 'buttons hidden');
  $favoriteJokes.setAttribute('class', 'favorite-jokes hidden');
  $favoriteQuotes.setAttribute('class', 'favorite-quotes');
  $favoriteQuotes.innerHTML = '';
  postQuotes();
});

$savedJokes.addEventListener('click', function (event) {
  if ($favoritedTexts.getAttribute('class') === 'favorited-texts hidden') {
    gsap.from($favoritedTexts, { duration: 1, opacity: 0, scale: 0.3, ease: 'back' });
  }
  if ($hdBot.textContent !== 'Jokes') {
    $hdTop.textContent = 'Favorited';
    $hdBot.textContent = 'Jokes';
  }
  $favoritedTexts.setAttribute('class', 'favorited-texts');
  if (screen.width < 600) {
    $logo.setAttribute('class', 'logo hidden');
    $logoImg.setAttribute('class', 'logo-image hidden');
  } else if (screen.width > 600) {
    if ($logoImgTwo.getAttribute('class') === 'logo-image-two hidden') {
      gsap.from('.logo-image-two', { duration: 1, opacity: 0, scale: 0.3, ease: 'back' });
    }
    $logo.setAttribute('class', 'logo');
    $logoImg.setAttribute('class', 'logo-image hidden');
    $logoImgTwo.setAttribute('class', 'logo-image-two');
  }
  if (screen.width > 800) {
    $logo.setAttribute('class', 'logo hidden');
  }
  $textContainer.setAttribute('class', 'quotes-or-jokes hidden');
  $buttons.setAttribute('class', 'buttons hidden');
  $favoriteQuotes.setAttribute('class', 'favorite-quotes hidden');
  $favoriteJokes.setAttribute('class', 'favorite-jokes');
  $favoriteJokes.innerHTML = '';
  postJokes();
});

$quoteSave.addEventListener('click', function (event) {
  var quoteText = document.querySelector('.quote-text-value');
  var quoteAuthor = document.querySelector('.quote-author-value');
  for (var z = 0; z < quoteData.length; z++) {
    if (quoteText.textContent === quoteData[z].quote) {
      return;
    }
  }
  quoteData.push({
    quote: quoteText.textContent,
    author: quoteAuthor.textContent
  });
});

$jokeSave.addEventListener('click', function (event) {
  var $jokeText = document.querySelector('#joke-value');
  for (var x = 0; x < jokeData.length; x++) {
    if ($jokeText.textContent === jokeData[x]) {
      return;
    }
  }
  jokeData.push($jokeText.textContent);
});

function postJokes() {
  for (var i = 0; i < jokeData.length; i++) {
    var $liJoke = document.createElement('li');
    $liJoke.setAttribute('class', 'joke-styling');
    $liJoke.textContent = jokeData[i];
    $favoriteJokes.appendChild($liJoke);
  }
}

function postQuotes() {
  for (var i = 0; i < quoteData.length; i++) {
    var $liTextValue = document.createElement('li');
    $liTextValue.textContent = quoteData[i].quote;
    $favoriteQuotes.appendChild($liTextValue);
    var $liAuthorValue = document.createElement('li');
    $liAuthorValue.setAttribute('class', 'quote-author-value');
    $liAuthorValue.textContent = quoteData[i].author;
    $favoriteQuotes.appendChild($liAuthorValue);
  }
}
