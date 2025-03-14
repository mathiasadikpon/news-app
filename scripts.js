const apiKey = process.env.NEWS_API_KEY;

const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

async function fetchNews() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    // TODO: Add a function call to display the news
    displayNews(data.articles);
  } catch (error) {
    console.error("There was an error!", error);
  }
}

fetchNews();
const colors = [
  "red",
  "green",
  "blue",
  "orange",
  "brown",
  "purple",
  "cyan",
  "magenta",
  "yellow",
  "pink",
];
const badColors = ["cyan", "pink","yellow"]
document.body.backgroundColor = "teal";
function displayNews(articles) {
  const newsDiv = document.querySelector("#news");
  for (const article of articles) {
    const articleDiv = document.createElement("div");

    //create and append a headline to the articleDiv
    const title = document.createElement("h4");
    title.textContent = article.title;
    const img = document.createElement("img");
    img.style.width = "100%";
    img.height = 500;
    img.src = article.urlToImage;
    articleDiv.appendChild(title);
    articleDiv.appendChild(img);
    articleDiv.style.borderRadius = "15px";
    let idx = Math.floor(Math.random() * colors.length);
    articleDiv.style.background = colors[idx];
    let mycolor;
    if (badColors.includes(colors[idx])) {
      mycolor = "black";
    } else {
      mycolor = "white";
    }
    articleDiv.style.color = mycolor;
    articleDiv.style.marginBottom = '10px';
    // TODO: Use document.createElement and appendChild to create and append more elements

    newsDiv.appendChild(articleDiv);
  }
}
