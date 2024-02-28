import React from 'react'
import Navbar from '../components/Navbar'
import NewsContainer from '../components/NewsContainer'
import NewsCard from '../components/NewsCard'
import NewsList from '../components/NewsList'
import News from '../components/News'


const Home = () => {
  return (
    <div>
        <Navbar />
        {/* <NewsContainer />
        <NewsCard /> 
      <NewsList /> */}
        <News />
    </div>
  )
}

export default Home
