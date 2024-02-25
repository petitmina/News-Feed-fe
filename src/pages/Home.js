import React from 'react'
import Navbar from '../components/Navbar'
import NewsContainer from '../components/NewsContainer'
import NewsCard from '../components/NewsCard'
import NewsList from '../components/NewsList'


const Home = () => {
  return (
    <div>
        <Navbar />
        <NewsContainer />
        <NewsCard />
        {/* <NewsList /> */}
    </div>
  )
}

export default Home
