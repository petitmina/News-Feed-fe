import React from "react";

const NewsCard = ({ item }) => {
  return (
    <div className="card-container mt-5 bg-slate-300 shadow-md">
      <img
        src={
          item?.urlToImage ||
          "https://banffventureforum.com/wp-content/uploads/2019/08/no-photo-icon-22.png"
        }
        alt="기본 사진"
        className="card-img"
      />

      <div className="card-detail">
        <h2 className="card-head">{item?.title}</h2>
        <p className="card-content">{item?.description}</p>
      </div>
    </div>
  );
};

export default NewsCard;
