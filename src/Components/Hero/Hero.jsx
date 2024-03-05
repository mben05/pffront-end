import React from 'react';
import './Hero.css';
import new_arrivages from '../Assets/new_arrivage';
import Item from '../Item/Item'

const Hero = () => {
  return (
    <div className="hero">
        <h1>NEW ARRIVALS ONLY</h1>
        <hr />
    <div className="hero-collections">
    {new_arrivages.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}

    </div>

    </div>
  )
}

export default Hero