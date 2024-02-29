import React from 'react'
import './Offer.css'
import exclusive from '../Images/exclusive.png'


const Offer = () => {
  return (
    <div className="offer">
        <div className="small-container">
            <div className="row">
                <div className="col-1">
                    <img src={exclusive} alt="" className='offer-img' />
                </div>
                <div className="col-2">
                    <p>Enclusively Available on SHOPLY</p>
                    <h1>Smart Band 4</h1>
                    <small>The Mi Smart Band 4 features a 39.9% larger
                    (than Mi Band 3) AMOLED color full-touch display whith 
                    adjustable brightness, so everything is clear as can
                    be.</small>
                <a href="lien" className="btn">Buy Now &#8594; </a>
                </div>

            </div>
        </div>

    </div>
  )
}

export default Offer