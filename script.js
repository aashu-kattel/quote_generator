let docTitle = document.title;
window.addEventListener("blur",()=>{
    document.title = 'Get back here ... ';
});

window.addEventListener("focus",()=>{
    document.title = docTitle;
});

window.onload = function() {
    var modal = document.getElementById('popModal');
    var span = document.getElementsByClassName('close')[0];
    modal.style.display = "block";
    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

let genQuote = () => {
  fetch(`https://api.quotable.io/random`)
    .then((data) => data.json())
    .then((item) => {
      quote.innerText = item.content;
      author.innerText = item.author;
    });
};
btn.addEventListener("click", genQuote);

let copyBtn = document.getElementById("btn2");
copyBtn.addEventListener("click", () => {
    if (quote.innerText == "") {
        alert("Please generate a quote first.");
    }
});

copyBtn.addEventListener("click", () => {
    if (!quote.innerText == "") {
    let text = document.getElementById("quote").innerText;
    let textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
    alert("Copied to clipboard");
    }
});

const count = document.getElementById("count");
function viewCount() {
    if (!localStorage.getItem("views")) localStorage.setItem("views", 1);
    else {
        views = +localStorage.getItem("views");
        const newCount = views + 1;

        localStorage.setItem("views", newCount);
    }
    count.innerText = localStorage.getItem("views");
}
viewCount();
