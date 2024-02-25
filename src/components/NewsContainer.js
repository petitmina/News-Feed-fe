import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard'
import { useRecoilValue } from 'recoil';
import { selectCategoryState } from '../atoms/categoryAtom';

const NewsContainer = () => {
  const [news, setNews] = useState(null);
  const selectedCategory = useRecoilValue(selectCategoryState);

  
  useEffect(() => {
    const newsList = async() =>{
      try{
        const query = selectedCategory === '경제' ? '' : `&category=${selectedCategory}`
        const newsKey = process.env.REACT_APP_NEWS_API_KEY;
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=${newsKey}`)
        setNews(response.data.articles)
      } catch(error){
        throw new Error('error happens')
      }
    }
    newsList();
  }, [selectedCategory])

  return (
    <div>
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
