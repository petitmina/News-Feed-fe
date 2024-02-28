import React from 'react'

const NewsItem = ({item}) => {


  return (
    <li>
            <div className="title">
                <div>{item.title}</div>
            </div>
            <div className="cont">
                <span className="date">{item.pubDate}</span>
               <div>{item.description}</div>
            </div>
        </li>
  )
}

export default NewsItem
