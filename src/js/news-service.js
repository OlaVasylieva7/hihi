const API_KEY = '6cd46aaefadd445c84dea5ef48a1fca0';
const BASE_URL = 'https://newsapi.org/v2';

const options = {
  headers: {
    Authorization: API_KEY,
  },
};
export default class NewsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchArticles() {
    const url = `${BASE_URL}/everything?q=${this.searchQuery}&language=en&pageSize=7&page=${this.page}`;

    return fetch(url, options)
      .then(r => r.json())
      .then(({articles}) => {
        this.incrementPage();
        return articles;
      });
  }
  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.query;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}