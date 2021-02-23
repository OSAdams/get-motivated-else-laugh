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
  gsap.from($textContainer, {duration: 1.5, opacity: 0, scale: 0.3, ease: "back"});
  $textContainer.setAttribute('class', 'quotes-or-jokes');
  $jokeId.setAttribute('class', 'jokes hidden');
  $quoteId.setAttribute('class', 'quotes');
});
