const url =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=56a47f135add4e349c07263259b8f643";

export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
}
