let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");

let genQuote = () => {
  fetch(`https://api.quotable.io/random`)
    .then((data) => data.json())
    .then((item) => {
      quote.innerText = item.content;
      author.innerText = item.author;
    });
};

btn.addEventListener("click", genQuote);