import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import NewCollections from '../Components/NewCollections/NewCollections'
import Offer from '../Components/Offer/Offer'

const shop = () => {
  return (
    <div>
        <Hero/>
        <Popular/>
        <NewCollections/> 
        <Offer/>
    </div>
  )
}

export default shop