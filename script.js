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

const count = document.getElementById("count");

function viewCount() {

    if (!localStorage.getItem("views")) localStorage.setItem("views", 1);
    else {
        views = +localStorage.getItem("views");
        const incrementedCount = views + 1;

        localStorage.setItem("views", incrementedCount);
    }

    count.innerText = localStorage.getItem("views");
}
viewCount();
