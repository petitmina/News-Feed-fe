import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard'

const NewsContainer = () => {
  const [news, setNews] = useState(null)

  const newsList = async() => {
    const newsKey = process.env.REACT_APP_NEWS_API_KEY;
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr&apiKey=${newsKey}`)
    setNews(response.data.articles)
  }

  console.log('news', news)
  useEffect(()=>{
    newsList();
  },[]);

  return (
    <div>
      {/* {news && <textarea
          rows={7}
          value={JSON.stringify(news, null, 2)}
          readOnly={true}
        />} */}
        
        <div>
        {news && (
        <div className="flex flex-wrap justify-center">
          {news.map((item, index) => (
            <NewsCard key={index} item={item}/>
          ))}
        </div>
      )}
        </div>
    </div>
  )
}

export default NewsContainer
