// import axios from 'axios';
// import React, { useEffect } from 'react';
// import { useRecoilState } from 'recoil';
// import { newsListState } from '../atoms/newsAtom';
// import NewsCard from './NewsCard';                     

// const NewsContainer = () => {
//   const [data, setData] = useRecoilState(newsListState);
 
//   useEffect(()=>{
//     const newsList = async () => {
//     try {
//       const newsKey = process.env.REACT_APP_NEWS_API_KEY;
//       const response = await axios.get(
//         `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${newsKey}`,
//       );
//       setData(response.data.articles);
//     } catch (e) {
//       console.log(e);
//     }
//   };
//   newsList();
//   },[])
  
//   return (
//     <div>
    
//       {/* {data && (
//         <textarea
//           rows={7}
//           value={JSON.stringify(data, null, 2)}
//           readOnly={true}
//         />
//       )} */}
//       {data.length > 0 && data.map((article, index)=>{
//           <NewsCard key={index} title={article.title} description={article.description}
//           url={article.url}/>
//       }) }
//     </div>
//   );
// }

// export default NewsContainer;

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
