function displayQuote(response) {
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
  });
}

function generateQuote(event) {
  event.preventDefault();
  let apiKey = "a1184840edbfda3e40off6tdfda47219";
  let instructionsInput = document.querySelector("#user-instructions");
  let context =
    "You are a pop culture expert, and can remember quotes from anything be it book or movie or television show. your mission is to generate a new quote every time. Please make sure to follow the user instructions. only quote characters from the book television show or movie.";
  let prompt = `user instructions: Please generate a quote from ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let quoteElement = document.querySelector("#quote");
  quoteElement.classList.remove("hidden");
  quoteElement.innerHTML = `<div class="generating">⏳Generating a quote about ${instructionsInput.value} </div>`;

  axios.get(apiUrl).then(displayQuote);
}
let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);
