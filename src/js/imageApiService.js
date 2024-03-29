const axios = require("axios").default;
const key = "32628056-fce49f0093e538c5a69cf5c6c";
const BASE_URL = "https://pixabay.com/api/";
const params = `image_type=photo&orientation=horizontal`;

export default class ImageApiService {
  constructor() {
    this.searchQuery = "";
    this.page = 1;
    this.per_page = 18;
  }
  async getImages() {
    const url = `${BASE_URL}?q=${this.searchQuery}&page=${this.page}&per_page=${this.per_page}&key=${key}&${params}`;
    try {
      const response = await axios.get(url);
      const data = await response.data;
      this.incrementPage();
      return data;
    } catch (error) {
      return console.log(error);
    }
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
