import React from 'react';
import { useRecoilValue } from 'recoil';
import { newsState } from '../atoms/newsAtom';

const NewsItem = () => {
  const newsData = useRecoilValue(newsState);

  return (
    <>
      {newsData.map((item, index) => (
        <div key={index} className="card-container mt-5 bg-slate-300 shadow-md">
          <div className="card-detail">
            <h2 className="card-head"><a href={item?.link}>{item?.title}</a></h2>
            <p className="card-content"><a href={item?.link}>{item?.description}</a></p>
          </div>
        </div>
      ))}
    </>
  );
};

export default NewsItem;