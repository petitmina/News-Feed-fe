import React from 'react'
import { useRecoilValue } from 'recoil'
import { newsState } from '../atoms/newsAtom'

const NewsItem = ({item}) => {
    const newsData = useRecoilValue(newsState);
    console.log(newsData, 'check3')
  return (
    <div className="card-container mt-5 bg-slate-300 shadow-md">
      {/* <img
        src={
          newsData?.urlToImage ||
          "https://banffventureforum.com/wp-content/uploads/2019/08/no-photo-icon-22.png"
        }
        alt="기본 사진"
        className="card-img"
      />

      <div className="card-detail">
        <h2 className="card-head">{newsData?.title}</h2>
        <p className="card-content">{newsData?.description}</p>
      </div> */}
      {newsData.map((item, index) => (
        <div key={index} className="flex flex-wrap justify-center bg-slate-300 shadow-md">
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
      ))}
    </div>
  )
}

export default NewsItem
