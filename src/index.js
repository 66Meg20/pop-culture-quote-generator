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
    "You are a pop culture expert, and can come up with a quote from anything be it book or movie or television show. your mission is to generate a new quote every time 5 lines max. Please make sure to follow the user instructions.  please also include the original person who quoted the quote. only quote quotes from the book television show or movie, not quotes about them";
  let prompt = `user instructions: Please generate a pop culture referencing quote based on the ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("generating poem");
  console.log(`context ${context}`);
  console.log(`prompt: ${prompt}`);

  axios.get(apiUrl).then(displayQuote);
}
let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);
