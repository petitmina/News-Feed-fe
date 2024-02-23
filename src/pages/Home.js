import React from 'react'
import Navbar from '../components/Navbar'
import NewsContainer from '../components/NewsContainer'
import NewsCard from '../components/NewsCard'


const Home = () => {
  return (
    <div>
        <Navbar />
        <NewsContainer />
        <NewsCard />
    </div>
  )
}

export default Home
