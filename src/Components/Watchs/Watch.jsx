import React from 'react'
import './watch.css';
import new_watch from '../Assets/new_watch';
import Item from '../Item/Item'

const Watch = () => {
  return (
   <div className="watch">
    <h1>UNIVERSE WATCHES</h1>
    <hr />
    <div className="watch-collections">
    {new_watch.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
    </div>
   </div>
  )
}

export default Watch