import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";
import { useRecoilValue, useRecoilState } from "recoil";
import { categoryState } from "../atoms/categoryAtom";
import { newsState } from "../atoms/newsAtom";

const News = () => {
  const [data, setData] = useRecoilState(newsState);
  console.log(data, 'check2')
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
    <div>
      네이버 뉴스 불러오기
     
      {/* {data && (
        <div className="flex flex-wrap justify-center">
          {data.map((index) => (
            <NewsItem key={index} />
          ))}
        </div>
      )} */}
      <NewsItem />
    </div>
  );
};

export default News;
