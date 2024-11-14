const API__KEY = "0e291abe4fe4d41a336d98e39e385263";
const BASE__URL = "https://api.themoviedb.org/3";

export default class MovieApiService {
  constructor() {
    this.page = 1;
  }

  fetchMovies() {
    const url = `${BASE__URL}/movie/popular?api_key=${API__KEY}&language=en-US&page=${this.page}`;

    return fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("failed to fetch movies");
        }
        return response.json();
      })
      .then((data) => {
        return data.results;
      });
  }

  incrementPage() {
    this.page += 1;
  }

  decrementPage() {
    if (this.page > 1) {
      this.page -= 1;
    }
  }
}
