import axios from "axios";
import { atom } from "recoil";

export const newsState = atom({
  key: "newsState",
  default: [],
});

export const newsList = atom({
  key: "newsLists",
  get: async () => {
    const newsKey = process.env.REACT_APP_NEWS_API_KEY;
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${newsKey}`
      );
      return response.data.articles;
    } catch (error) {
      console.error("Error fetching news:", error);
      return [];
    }
  },
});

export const selectedNewsState = atom({
  key: "selectedNewsState",
  default: null,
});
