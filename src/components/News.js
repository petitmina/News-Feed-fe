import React, { useEffect } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState } from "../atoms/categoryAtom";
import { newsState } from "../atoms/newsAtom";

const News = () => {
  const setData = useSetRecoilState(newsState);
  const category = useRecoilValue(categoryState);

  const onClick = async (type, param) => {
    try {
      const apiUrl =
        "/api/v1/search/" + type + "?query=" + param + "&category=" + category; 
      const response = await axios.get(apiUrl, {
        headers: {
          "X-Naver-Client-Id": process.env.REACT_APP_NAVER_NEWS_CLIENT_ID,
          "X-Naver-Client-Secret":
            process.env.REACT_APP_NAVER_NEWS_CLIENT_SECRET,
        },
      });
      setData(response.data.items);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    onClick("news", category);
  }, [category]);

  return (
      <NewsItem />
  );
};

export default News;
