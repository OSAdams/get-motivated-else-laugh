gsap.from(".logo-image", {duration: 1.5, opacity: 0, scale: 0.3, ease: "back"});
gsap.from(".motivate-quotes", {duration: 0.75, opacity: 0, x: -250});
gsap.from(".dad-jokes", {duration: 1, opacity: 0, x: -250});
gsap.from(".fas", {duration: 1.5, opacity: 0, y: 150, stagger: 0.25});

var $motivateButton = document.querySelector('#motivate-quotes');
var $logo = document.querySelector('#logo');
var $quoteId = document.querySelector('#quotes');
var $jokeId = document.querySelector('#jokes');
var $textContainer = document.querySelector('#quotes-or-jokes')

$motivateButton.addEventListener('click', function(event) {
  $logo.setAttribute('class', 'logo hidden');
  // if () {
    gsap.from($textContainer, {duration: 1.5, opacity: 0, scale: 0.3, ease: "back"});
    // }
  $textContainer.setAttribute('class', 'quotes-or-jokes');
  $jokeId.setAttribute('class', 'jokes hidden');
  $quoteId.setAttribute('class', 'quotes');
  getQuote();
});

function getQuote () {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://type.fit/api/quotes");
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    var randomNum = Math.floor(Math.random() * 1643);
    var $response = xhr.response[randomNum];
    var $liText = document.createElement('li');
    $liText.textContent = $response.text;
    $quoteId.appendChild($liText);
    var $liAuthor = document.createElement('li');
    $liAuthor.textContent = $response.author;
    $quoteId.appendChild($liAuthor);
    });
  xhr.send();
};
