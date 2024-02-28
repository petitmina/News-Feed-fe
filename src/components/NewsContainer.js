// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import NewsCard from './NewsCard'
// import { useRecoilValue } from 'recoil';
// import { categoryState, selectCategoryState } from '../atoms/categoryAtom';

// const NewsContainer = () => {
//   const [news, setNews] = useState(null);
//   const selectedCategory = useRecoilValue(categoryState);

//   console.log(news, '222')
//   useEffect(() => {
//     const newsList = async() =>{
//       try{
//         const query = selectedCategory === '경제' ? '' : `&category=${selectedCategory}`
//         const newsKey = process.env.REACT_APP_NEWS_API_KEY;
//         const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr&sports=IT&apiKey=${newsKey}`)
//         setNews(response.data)
//       } catch(error){
//         throw new Error('error happens')
//       }
      
//     }
//     newsList();
//   }, [selectedCategory])

//   return (
//     <div>
//         <div>
//            {news && (
//         <textarea
//           rows={7}
//           value={JSON.stringify(news, null, 2)}
//           readOnly={true}
//         />
//       )}
//         </div>
//     </div>
//   )
// }

// export default NewsContainer
//https://newsapi.org 출처