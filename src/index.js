function generateQuote(event) {
  event.preventDefault();
  new Typewriter("#quote", {
    strings: "Light up the darkness majesty",
    autoStart: true,
  });
}

let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);
