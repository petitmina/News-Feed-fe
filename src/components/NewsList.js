// import React, { useEffect } from 'react'
// import { useRecoilState } from 'recoil'
// import { newsState } from '../atoms/newsAtom'
// import axios from 'axios';

// const NewsList = () => {
//     const [news, setNews] = useRecoilState(newsState);

//     const newsList = async () => {
//         try {
//             const newsKey = process.env.REACT_APP_NEWS_API_KEY;
//             const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr&apiKey=${newsKey}`)
//             setNews(response.data.articles)
//         } catch(error){
//             throw new Error('error happens')
//         }
//     }

//     useEffect(()=>{
//         newsList()
//     }, []);

//   return (
//     <div>
//           <textarea value={JSON.stringify(news, null, 2)} />
//     </div>
//   )
// }

// export default NewsList


import React from 'react'
import { useRecoilValue } from 'recoil'
import { newsList } from '../atoms/newsAtom'

const NewsList = () => {
    const news = useRecoilValue(newsList);

  return (
    <div>
      <ul>
        {news.map((article, index) => (
          <li key={index}>{article.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default NewsList
