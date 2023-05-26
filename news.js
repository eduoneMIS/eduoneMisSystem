const newsBTN = document.getElementById('go-news');
const newsItems = document.getElementById('newsItems');
const newsClose = document.getElementById('newsContent-close')

newLoad();

function newLoad() {
    newsBTN.addEventListener("click", function (event) {
        event.preventDefault();
        newsItems.style.display = "block";
    });
    newsClose.addEventListener("click", function (event) {
        event.preventDefault();
        newsItems.style.display = "none";
        newsItems.style.transition = "0.05s ease-in-out";
    })
}

