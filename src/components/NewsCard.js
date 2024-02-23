import React from "react";

const NewsCard = ({ item }) => {
  return (
    <div className="card-container mt-5" >
      <img src={item?.urlToImage} alt="기본 사진" className="card-img" />
      <div className="card-detail">
        <h2 className="card-head">{item?.title}</h2>
        <p className="card-content">{item?.description}</p>
        {/* <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{item?.source.name}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{new Date(item?.publishedAt).toLocaleDateString()}</span>
      </div> */}
      </div>
       {/* <div >
              
              <div></div>
              <div></div>
              <div>{item.url}</div>
              <div>{item.publishedAt}</div>
            </div> */}
    </div>
  );
};

export default NewsCard;
