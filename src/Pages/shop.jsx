import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import NewCollections from '../Components/NewCollections/NewCollections'
// import Offer from '../Components/Offer/Offer'
import Watch from '../Components/Watchs/Watch'

const shop = () => {
  return (
    <div>
        <Hero/>
        <Popular/>
        <NewCollections/> 
        <Watch/>
        {/* <Offer/> */}
    </div>
  )
}

export default shop