import React from 'react'
import Home from '../components/home/Home'
import Popular from '../components/popular/Popular'
import Offer from '../components/offers/Offer'
import NewCollections from '../components/newcollections/NewCollections'
import NewsLetter from '../components/newsLetter/NewsLetter'


const Shop = () => {
  return (
    <div>
      <Home/>
      <Popular/>
      <Offer/>
      <NewCollections/>
      <NewsLetter/>
      
    </div>
  )
}

export default Shop